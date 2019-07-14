import React, {Component} from 'react';

class HomeCard extends Component {
    render() {
        return (
            <div className="col s12 l4">
                <div className="card blue-grey lighten-4 small">
                    <div className="center-align">
                        <div className="medium material-icons">{this.props.icon}</div>
                    </div>
                    <h4 className="center-align">{this.props.title}</h4>
                    <hr/>
                    <h5>{this.props.content}</h5>

                </div>
            </div>
        );
    }
}

export default HomeCard;