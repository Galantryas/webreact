import React from 'react';
import '../App.css';
import MyText from '../Text.js';

class Home extends React.Component{
    render(){
        return(
            <div>
            <MyText/>
                <h1>Welcome to My Site</h1>
            </div>
        )
    }
}

export default Home;
