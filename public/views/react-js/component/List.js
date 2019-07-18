import React, { Component } from 'react';
import Header from "./Header";

class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayName: props.displayName,
            worksheetName: props.worksheetName,
            range: props.range,
            data: {
                sheetName: '',
                headers: [],
                listOfRows: []
            },
            fetchState: false
        };
    }

    componentDidMount() {
        //fetch('http://localhost:8080/lists/' + this.state.worksheetName + '/' + this.state.range)
        fetch('https://mantufo-lists.herokuapp.com/lists/' + this.state.worksheetName + '/' + this.state.range)
            .then(response => response.json())
            .then(data => {
                this.setState({ data })
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.data.headers !== this.state.data.headers) {
            this.setState({ fetchState: true });
        }
    }

    render() {
        let sheet;

        if (!this.state.fetchState) {
            sheet = <div className="collapsible-body">Loading...</div>
        } else {
            sheet =
                <div className="collapsible-body">
                    {this.state.data.headers.map((header, i) =>
                        <Header key={i} data={header}>{header}</Header>
                    )}
                </div>
        }

        return (
            <li>
                <div className="collapsible-header">
                    {this.state.displayName}
                </div>
                {sheet}
            </li>
        );
    }
}

export default List;
