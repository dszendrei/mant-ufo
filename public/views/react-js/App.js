import React, { Component } from 'react';
import HomeCard from "./component/HomeCard";
import ListContainer from "./component/ListContainer"
import Iframe from 'react-iframe';

document.body.style.backgroundColor = "#212121";

class App extends Component {

    render() {
        return (
        <div>
            {/*<div>
                <HomeCard title="Registration" content="Easy to join, hard to leave!" icon='check_circle_outline'></HomeCard>
                <HomeCard title="Login" content="With email or username" icon='check_circle_outline'></HomeCard>
                <HomeCard title="Contact us" content="For more information or guiding!" icon='check_circle_outline'></HomeCard>
            </div>*/}
            <div style={{ padding: '10px' }}>
                <ListContainer></ListContainer>
            </div>
        </div>
        )
    }
}

export default App;
