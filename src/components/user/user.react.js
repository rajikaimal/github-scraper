import React from 'react';

const styles = {
    img: {
        'width': '75'
    }
}

const user = React.createClass({
    render: function () {
        return (
            <div>
                <img src={this.props.avatar} style={styles.img} />
                {this.props.name}
                <br />
                { this.props.username ? `@` + this.props.username : ''}
            </div>
        );
    }
});

export default user;