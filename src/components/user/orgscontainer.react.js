import React from 'react';
import Organization from './orgs.react';
import usercontainerAction from '../../actions/user/usercontainerAction';
import usercontainerStore from '../../stores/user/usercontainerStore';

const orgscontainer = React.createClass({
    getInitialState: function () {
        return {
            orgs: []
        };
    },
    componentDidMount: function () {
        usercontainerStore.addChangeListener(this._onChange);
        let username = usercontainerStore.retrieveUser().login;
        usercontainerAction.getOrgs(username);
    },
    componentWillUnmount: function () {
        
    },
    _onChange: function() {
        this.setState({
            orgs: usercontainerStore.retrieveOrgs()
        })
    },
    render: function () {
        return (
            <div>
                <ul>
                    {
                        this.state.orgs.map((org) => {
                            return <Organization
                                    name={org.login} 
                                    avatar={org.avatar_url}
                                    url={org.url} 
                                />
                        })
                    }
                </ul>
            </div>
        );
    }
});

export default orgscontainer;