//import react lib, child component, action, store
import React from 'react';
import usercontainerStore from '../../stores/user/usercontainerStore';
import User from './user.react';
import {Link} from 'react-router';

//declare React component with createClass factory method
const usercontainer = React.createClass({
    //returns initial state of the component with getInitialState
    getInitialState: function () {
        return {
            user: {}
        };
    },
    //load necessary resources when the component gets mounted to the DOM
    componentDidMount: function () {
        usercontainerStore.addChangeListener(this._onChange);
    },
    //cleanup any resources or remove any listener
    componentWillUnmount: function () {
        usercontainerStore.removeChangeListener(this._onUnmount);
    },
    //custom method definition
    //callback for listener added in componentDidMount
    _onChange: function() {
        let userObj = usercontainerStore.retrieveUser();
        this.setState({
            user: userObj
        });
    },
    _onUnmount: function() {
        
    },
    //render function with JSX declaration of the component
    render: function () {
        let username = this.state.user.login;
        return (
            <div>
                <User avatar={this.state.user.avatar_url} name={this.state.user.name} username={this.state.user.login}/>
                {
                    this.state.user.avatar_url ? 
                            <div>
                                <Link to={`/user/${username}/repos`}> Repositories </Link> 
                                <Link to={`/user/${username}/following`}> Following </Link>
                                <Link to={`/user/${username}/followers`}> Followers </Link>
                                <Link to={`/user/${username}/orgs`}> Organizations </Link>
                            </div>
                        : ''  
                }

                {this.props.children} 
            </div>
        );
    }
});

export default usercontainer;