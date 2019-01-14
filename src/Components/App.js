//React files needed
import React from 'react';
//User created components
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from'./VideoList';


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

    onVideoSelect=(Video) =>{
        console.log('From the App!',video);
    };

    render(){
       return(
           <div className='ui container'>
            <SearchBar onFormSubmit={this.onFormSubmit}/>
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
           </div>
       )
    }
};

export default App;