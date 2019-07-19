import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            valueString: this.props.data.value
        }
    }

    render() {
        let value;

        let urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

        if (this.state.valueString.match(urlRegex) != null) {
            value =
                <td>
                    <a target="_blank" href={this.state.valueString}> LINK </a>
                </td>
        } else {
            value =
                <td> {this.state.valueString} </td>
        }

        return (
            value
        )
    }
}

export default Header;
