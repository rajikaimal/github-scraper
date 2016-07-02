import React from 'react';

const repository = React.createClass({
    render: function () {
        return (
            <div>
                <li>
                    <a href={this.props.url}>{this.props.name} </a> <br/>
                    {this.props.description} 
                    stars : {this.props.stars}
                    forks : {this.props.forks}
                </li>
            </div>
        );
    }
});

export default repository;