import React, { Component } from 'react';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            valueString: this.props.value
        }
    }

    render() {
        let value;
        let highlightedLineClassExtension = '';

        let urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;

        if (this.state.valueString.match(urlRegex) != null) {
            value = <a style={{ color: 'cyan' }} target="_blank" href={this.state.valueString}> LINK </a>
        } else {
            value = this.state.valueString
        }

        if (value.toString().includes('HIGHLIGHTEDCELL')) {
            highlightedLineClassExtension = 'grey darken-2';
            value = value.replace('HIGHLIGHTEDCELL', '');
        }

        return (
            <td style={{ padding: '10px' }} className={highlightedLineClassExtension}>
                { value }
            </td>
        )
    }
}

export default Header;
