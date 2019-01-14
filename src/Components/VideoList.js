//React files needed
import React from 'react';
//User Created Components
import VideoItem from './VideoItem';
import App from './App';

const VideoList = ({ videos }) =>{
    const renderVideoList = videos.map((video) => {
        return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
    });
    return<div className="ui relaxed divided list">{renderVideoList}</div>;
};

export default VideoList;