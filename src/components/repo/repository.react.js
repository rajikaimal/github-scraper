import React from 'react';

const repository = React.createClass({
    render: function () {
        return (
            <div>
                <li>
                    <a href={this.props.url}>{this.props.name} </a> 
                    stars : {this.props.stars}
                    forks : {this.props.forks}
                    <br/>
                    {this.props.description} 
                </li>
            </div>
        );
    }
});

export default repository;