import React from 'react';
import Repo from './repository.react';
import repocontainerAction from '../../actions/repo/repocontainerAction';
import repocontainerStore from '../../stores/repo/repocontainerStore';
import usercontainerStore from '../../stores/user/usercontainerStore';

const repocontainer = React.createClass({
    getInitialState: function () {
        return {
            username: '',
            repos: []
        };
    },
    componentDidMount: function () {
        repocontainerStore.addChangeListener(this._onChange);
        let username = usercontainerStore.retrieveUser().login;
        repocontainerAction.getRepos(username);
    },
    componentWillUnmount: function () {
        repocontainerStore.removeChangeListener(this._onUnmount);
    },
    _onChange: function() {
        let reposList = repocontainerStore.getRepos();
        this.setState({
            repos: reposList
        });
        console.log(typeof this.state.repos);
    },
    _onUnmount: function() {
        //cleanup    
    },
    _renderRepos: function() {

    },
    render: function () {
        return (
            <div>
                <ul>
                    {
                        this.state.repos.map((repo) => {
            
                            return <Repo 
                                    name={repo.full_name} 
                                    url={repo.html_url}
                                    description={repo.description} 
                                    stars={repo.stargazers_count}
                                    forks={repo.forks_count} />
                            
                        })
                    }  
                </ul>
            </div>
        );
    }
});

export default repocontainer;