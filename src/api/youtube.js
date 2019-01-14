import Axios from 'axios';

export default 
    Axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params:{
            part:'snippet',
            maxResults:5,
            key:KEY
        },
        headers:{
            Authorization:'Client-ID AIzaSyABZ5d4N-MQMrytTgYKPY-gEu83tSLRDCA'
        }
});