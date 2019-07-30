import React, { Component } from 'react';
import HomeCard from "./component/HomeCard";
import ListContainer from "./component/ListContainer"

document.body.style.backgroundColor = "#212121";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mediaFontSize: null
        };
    }

    componentDidMount() {
        this.setFontSize();
        window.addEventListener("resize", this.setFontSize);
    }

    setFontSize = () => {
        if (window.innerWidth < 400) {
            this.setState({ mediaFontSize: '16px' });
        } else if (window.innerWidth < 600) {
            this.setState({ mediaFontSize: '18px' });
        } else if (window.innerWidth < 900) {
            this.setState({ mediaFontSize: '20px' });
        } else if (window.innerWidth < 1400) {
            this.setState({ mediaFontSize: '22px' });
        } else if (window.innerWidth < 2000) {
            this.setState({ mediaFontSize: '24px' });
        } else {
            this.setState({ mediaFontSize: '26px' });
        }
    }

    render() {

        return (
        <div style={{ display: 'inline-block', width: 'auto', minWidth: '100%' }}>
            {/*<div>
                <HomeCard title="Registration" content="Easy to join, hard to leave!" icon='check_circle_outline'></HomeCard>
                <HomeCard title="Login" content="With email or username" icon='check_circle_outline'></HomeCard>
                <HomeCard title="Contact us" content="For more information or guiding!" icon='check_circle_outline'></HomeCard>
            </div>*/}
            <div style={{ padding: '10px' , fontSize: this.state.mediaFontSize }}>
                <ListContainer></ListContainer>
            </div>
        </div>
        )
    }
}

export default App;
