import React from 'react';
import Follower from './follower.react';
import usercontainerAction from '../../actions/user/usercontainerAction';
import usercontainerStore from '../../stores/user/usercontainerStore';

const followercontainer = React.createClass({
    getInitialState: function () {
        return {
            followers: []
        };
    },
    componentDidMount: function () {
        usercontainerStore.addChangeListener(this._onChange);
        let username = usercontainerStore.retrieveUser().login;
        usercontainerAction.getFollowers(username);
    },
    componentWillUnmount: function () {
        
    },
    _onChange: function() {
        console.log(usercontainerStore.retrieveFollowers());
        this.setState({
            followers: usercontainerStore.retrieveFollowers()
        })
    },
    render: function () {
        return (
            <div>
                <ul>
                    {
                        this.state.followers.map((follower) => {
                            return <Follower 
                                    name={follower.login} 
                                    avatar={follower.avatar_url}
                                    url={follower.html_url} 
                                />
                        })
                    }
                </ul>
            </div>
        );
    }
});

export default followercontainer;