import { combineReducers } from "redux"

const songsReducer = () => {
    return [
        { title: 'Hit me baby', duration: '4:20' },
        { title: 'Livin la vida loca', duration: '5:12' },
        { title: 'Call Me', duration: '4:21' },
        { title: 'la vida loca', duration: '3:12' },

    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})