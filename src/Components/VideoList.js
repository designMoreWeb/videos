//React files needed
import React from 'react';
//User Created Components
import VideoItem from './VideoItem';


const VideoList = ({ videos,onVideoSelect }) =>{
    const renderVideoList = videos.map((video) => {
        return <VideoItem 
            key={video.id.videoId} 
            onVideoSelect={onVideoSelect} 
            video={video} 
            />;
    });
    return<div className="ui relaxed divided list">{renderVideoList}</div>;
};

export default VideoList;