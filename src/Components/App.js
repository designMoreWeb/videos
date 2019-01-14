//React files needed
import React from 'react';
//User created components
import SearchBar from './SearchBar';
import youtube from '../api/youtube';

class App extends React.Component{
    render(){
       return(
           <div className='ui container'>
            <SearchBar />
           </div>
       )
    }
};

export default App;