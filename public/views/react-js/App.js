import React, { Component } from 'react';
import HomeCard from "./component/HomeCard";

class App extends Component {

    render() {
        return (
            <HomeCard title="Registration" content="Easy to join, hard to leave!" icon='check_circle_outline'/>
        )
    }
}

export default App;
