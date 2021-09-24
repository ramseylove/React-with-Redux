import axios from 'axios';

const KEY = 'AIzaSyDWknbfpds5x4wD7AqvqgQu87EevhEc4SA'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video',

    }
})