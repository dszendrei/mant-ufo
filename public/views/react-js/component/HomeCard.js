import React, {Component} from 'react';
import {Card, Col, Icon} from 'react-materialize'

class HomeCard extends Component {
    render() {
        return (
            <Col s={12} l={4}>
                <Card className="blue-grey lighten-4 small">
                    <div className="center-align">
                        <Icon medium>{this.props.icon}</Icon>
                    </div>
                    <h4 className="center-align">{this.props.title}</h4>
                    <hr/>
                    <h5>{this.props.content}</h5>

                </Card>
            </Col>
        );
    }
}

export default HomeCard;