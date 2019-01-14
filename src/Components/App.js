//React files needed
import React from 'react';

//User created components
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from'./VideoList';
import VideoDetail from './VideoDetail';
import '../css/App.css';

class App extends React.Component{
    state={videos:[],selectedVideo:null};
    componentDidMount(){
        this.onFormSubmit('EscapeTracks')
    };
    onFormSubmit= async (term) => {
        const response = await youtube.get('/search',{
            params:{
                q:term
            }
        });

        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        });
    };

    onVideoSelect = (video) => {
       this.setState({selectedVideo:video});
    };

    render(){
       return(
           <div className='ui container'>
           <h2 className="Video-Player-title">React Video Player</h2>
            <SearchBar onFormSubmit={this.onFormSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList 
                                onVideoSelect={this.onVideoSelect} 
                                videos={this.state.videos}
                            />
                        </div>
                    </div>
                </div>
            </div>
       )
    }
};

export default App;