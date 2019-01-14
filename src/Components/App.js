//React files needed
import React from 'react';
//User created components
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from'./VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state={videos:[],selectedVideo:null};
    onFormSubmit= async (term) => {
        const response = await youtube.get('/search',{
            params:{
                q:term
            }
        });

        this.setState({videos:response.data.items});
    };

    onVideoSelect = (video) => {
       this.setState({selectedVideo:video});
    };

    render(){
       return(
           <div className='ui container'>
            <SearchBar onFormSubmit={this.onFormSubmit}/>
            <VideoDetail video={this.state.selectedVideo}/>
            <VideoList 
                onVideoSelect={this.onVideoSelect} 
                videos={this.state.videos}
            />
            </div>
       )
    }
};

export default App;