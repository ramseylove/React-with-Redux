import React, { useState, useEffect } from 'react';

import youtube from '../apis/youtube';
import SearchBar from '../SearchBar';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

const App = () => {
    const [ videos, setVideos ] = useState([])
    const [ selectedVideo, setSelectedVideo ] = useState(null)

    useEffect(() => {
        onTermSubmit('buildings')
        
    }, [])

    const onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        console.log(response)
        setVideos(response.data.items)
        setSelectedVideo(response.data.items[0])
    }

    const onVideoSelect = (video) => {
        setSelectedVideo(video)
        console.log('From the App ', video)
    }

    return (
        <div className="ui container"> 
            <SearchBar onTermSubmit={onTermSubmit}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoSelect={onVideoSelect} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;