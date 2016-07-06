import React from 'react';
import { router, withRouter } from 'react-router';
import Input from './input.react';
import Footer from './footer.react';
import usercontainerAction from '../../actions/user/usercontainerAction';

const ScraperContainer = withRouter(React.createClass({
    _handleClick: function(value) {
        let username = value;
        this.props.router.push(`/user/${username}`);
        usercontainerAction.getUser(username);
    },
    render: function () {
        return (
            <div>
                <h2> Github-scraper </h2>
                <span> Type a github username and hit 'Go !' </span>
                <br />
                <Input onclick={this._handleClick} />
                {
                    this.props.children
                }
                <Footer />
            </div>
        );
    }
}));

export default ScraperContainer;