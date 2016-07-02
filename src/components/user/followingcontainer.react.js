import React from 'react';
import Following from './following.react';
import usercontainerAction from '../../actions/user/usercontainerAction';
import usercontainerStore from '../../stores/user/usercontainerStore';

const followingcontainer = React.createClass({
    getInitialState: function () {
        return {
            following: []
        };
    },
    componentDidMount: function () {
        usercontainerStore.addChangeListener(this._onChange);
        let username = usercontainerStore.retrieveUser().login;
        usercontainerAction.getFollowing(username);
    },
    componentWillUnmount: function () {
        
    },
    _onChange: function() {
        this.setState({
            following: usercontainerStore.retrieveFollowing()
        });
    },
    render: function () {
        return (
            <div>
                <ul>
                    {
                        this.state.following.map((following) => {
                            return <Following
                                    name={following.login} 
                                    avatar={following.avatar_url}
                                    url={following.html_url} 
                                />
                        })
                    }
                </ul>
            </div>
        );
    }
});

export default followingcontainer;