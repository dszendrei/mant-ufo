import React, { Component } from 'react';
import Header from "./Header";
import Cell from "./Cell";

class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
            displayName: props.displayName,
            worksheetName: props.worksheetName,
            color: props.color,
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
                <div className="collapsible-body" style={{ backgroundColor: 'grey' , borderColor: 'black' ,
                                                            fontSize: '70%'}}>
                    <table className="highlight">
                        <thead>
                            <tr className={this.state.color}>
                                {this.state.data.headers.map((header, i) =>
                                    <Header key={i + "_header"} data={header}>{header}</Header>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.listOfRows.map((row) =>
                                <tr key={row.index + "_row"}>
                                    {row.listOfCells.map((cell) =>
                                        <Cell key={row.index + "_" + cell.coordinate.sheetsFormattedCoordinate}
                                            data={cell}>{cell}</Cell>
                                    )}
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
        }

        return (
            <li id={this.state.worksheetName}>
                <div className={`grey darken-3 collapsible-header`} style={{ borderColor: 'black' }}>
                    {this.state.displayName}
                </div>
                {sheet}
            </li>
        );
    }
}

export default List;
