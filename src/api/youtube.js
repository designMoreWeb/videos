import axios from 'axios';

const KEY = 'AIzaSyD8TSPa2MMAXRVjTMc45L-1J2VC2mpRpIk';

export default 
    axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params:{
            part:'snippet',
            maxResults:5,
            key:KEY
        }
});