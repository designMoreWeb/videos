//React files needed
import React from 'react';

//User created components


const VideoDetail = ({video}) =>{
    if (!video){
        return <div>Loading...</div>
    }
    return <div>{video.snippet.title}</div>;
};

export default VideoDetail;