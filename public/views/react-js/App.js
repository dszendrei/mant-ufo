import React, { Component } from 'react';
import HomeCard from "./component/HomeCard";
import {Row, Col, Card, CardTitle, Icon} from 'react-materialize';
import Iframe from 'react-iframe';

class App extends Component {

    render() {
        return (
        <Row>
            <HomeCard title="Registration" content="Easy to join, hard to leave!" icon='check_circle_outline'></HomeCard>
            <HomeCard title="Login" content="With email or username" icon='check_circle_outline'></HomeCard>
            <HomeCard title="Contact us" content="For more information or guiding!" icon='check_circle_outline'></HomeCard>
            <Iframe url="https://docs.google.com/spreadsheets/d/e/2PACX-1vRDZUKlaVTaYj9uaOdULwCIy6HtB3vnIcMj6KaQc6kMP17VS2-e2XNgMPgxk0NaWFpalP1fLGkQxH4t/pubhtml?widget=true&amp;headers=false"
                    width="100%"
                    height="1000px"
            ></Iframe>
        </Row>
        )
    }
}

export default App;
