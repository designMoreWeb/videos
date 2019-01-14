//React files needed
import React from 'react';
//User created components
import SearchBar from './SearchBar';

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