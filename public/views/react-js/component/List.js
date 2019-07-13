import React, {Component} from 'react';
import {Col, Preloader, Input, Row, Button, Card} from 'react-materialize'

class List extends Component {

    constructor(props) {
        super(props);

        this.state = {
          worksheetName: '',
          range: '',
          data: ''
        };
    }

    componentDidMount() {
        fetch('https://mantufo-lists.herokuapp.com/lists/tantargyak_itthon/A1:G100')
            .then(response => response.json())
            .then(data => {
                if(this._isMounted) {
                    this.setState({data})
                }});
    }

    render() {
       const style = {
            borderRadius: '1px',
            padding: '10px',
            margin: '4px',
            boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2)'
        };
        if( this.state.data === undefined ) {
          return (
            <div>
                <div className='center-align'>
                    <h4>
                        Server is loading...
                    </h4>
                  <Col s={4}>
                    <Preloader flashing/>
                  </Col>
                </div>

            </div>
          )
        }
              
        return (

            <div>
            <p>{this.state.data}</p>
            </div>
        );
    }
}

export default List;
