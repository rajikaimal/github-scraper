import React from 'react';
//import inputAction from '../../actions/core/inputaction';
//import inputStore from '../../stores/core/inputstore';

const input = React.createClass({
    getInitialState: function () {
        return {
            username: ''
        };
    },
    componentDidMount: function () {

    },
    componentWillUnmount: function () {
        
    },
    _getValue: function() {
        let username = this.refs.username.value;
        this.setState({
            username: username
        })
    },
    render: function () {
        return (
            <div>
                <input type="text" ref="username" onKeyUp={this._getValue}/>
                <button onClick={this.props.onclick.bind(this, this.state.username)}> Go ! </button>
                <br/>
            </div>
        );
    }
});

export default input;