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
            icon: props.icon,
            range: props.range,
            displayChange: props.displayChange,
            data: {
                _id: [],
                sheetName: '',
                headers: [],
                listOfRows: []
            },
            fetchState: false
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/listsdb/' + this.state.worksheetName + '/' + this.state.range)
        //fetch('https://mantufo-lists.herokuapp.com/lists/' + this.state.worksheetName + '/' + this.state.range)
            .then(response => response.json())
            .then(data => {
                this.setState({ data });
            });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.data.headers !== this.state.data.headers) {
            this.setState({ fetchState: true });
        }
    }

    render() {
        let sheet;

        let shadowStyle = { boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)' }

        if (!this.state.fetchState) {
            sheet = <div className="collapsible-body">Loading...</div>
        } else {
            sheet =
                <div className="collapsible-body" style={{ backgroundColor: 'grey' , borderColor: 'black' ,
                                                            fontSize: '70%', padding: '4px' }}>
                    <table className="highlight">
                        <thead style={shadowStyle}>
                            <tr className={this.state.color}>
                                {this.state.data.headers.map((header, i) =>
                                    <Header key={i + "_header"} value={header}></Header>
                                )}
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(this.state.data.listOfRows).map((row, i) => 
                                <tr key={row + "_row"}>
                                    {Object.keys(this.state.data.listOfRows[row]).map((cell, i) =>
                                        <Cell key={cell}
                                        value={this.state.data.listOfRows[row][cell]}></Cell>
                                    )}
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
        }

        let liClass = "collapsible-element section scrollspy";

        if (window.innerWidth > this.state.displayChange) {
            liClass = liClass.concat(" active");
        }

        return (
            <li id={this.state.worksheetName} className={liClass} style={{ padding: '1px' }}>
                <div className='grey darken-3 collapsible-header'
                style={{ borderColor: 'black' }}>
                    <div style={{ marginTop: 'auto', marginBottom: 'auto' }}>{this.state.displayName}</div>
                    <div className={`link-icon ${this.state.color}`}
                    style={{ marginLeft: 'auto', marginRight: '0px', marginTop: 'auto', marginBottom: 'auto',
                    width: '2em', minWidth: "2em", height: '2em' ,borderRadius: '50%'}}>
                        <i className="material-icons" style={{ width: '100%', fontSize: '1em',
                        textAlign: 'center', verticalAlign: 'bottom' }}>{this.state.icon}</i>
                    </div>
                </div>
                {sheet}
            </li>
        );
    }
}

export default List;
