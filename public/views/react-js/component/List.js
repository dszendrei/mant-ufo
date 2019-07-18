import React, {Component} from 'react';
import Header from "./Header";

class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
          worksheetName: props.worksheetName,
          range: props.range,
          data: {
            sheetName: '',
            headers: [],
            listOfRows: []
          }
        };
    }

    componentDidMount() {
      
        fetch('https://mantufo-lists.herokuapp.com/lists/' + this.state.worksheetName + '/' + this.state.range)
            .then(response => response.json())
            .then(data => {
                    this.setState({data})
                });
    }

    

    render() {
      
        return (
            <li>
              <div className="collapsible-header">
                {this.state.data.sheetName}
              </div>
              <div className="collapsible-body">
                {this.state.data.headers.map((header, i) =>
                    <Header key={i} data={header}>{header}</Header>
                )}
              </div>
            </li>
        );
    }
}

export default List;
