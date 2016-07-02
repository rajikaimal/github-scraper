import React from 'react';
import usercontainerStore from '../../stores/user/usercontainerStore';
import User from './user.react';
import {Link} from 'react-router';

const usercontainer = React.createClass({
    getInitialState: function () {
        return {
            user: {}
        };
    },
    componentDidMount: function () {
        usercontainerStore.addChangeListener(this._onChange);
    },
    componentWillUnmount: function () {
        usercontainerStore.removeChangeListener(this._onUnmount);
    },
    _onChange: function() {
        let userObj = usercontainerStore.retrieveUser();
        this.setState({
            user: userObj
        });
    },
    _onUnmount: function() {
        
    },
    render: function () {
        let username = this.state.user.login;
        return (
            <div>
                <User avatar={this.state.user.avatar_url} name={this.state.user.name} username={this.state.user.login}/>
                <Link to={`/user/${username}/repos`}> Repositories </Link> 
                <Link to={`/user/${username}/following`}> Following </Link>
                <Link to={`/user/${username}/followers`}> Followers </Link>  
                {this.props.children} 
            </div>
        );
    }
});

export default usercontainer;