import React from 'react';

const styles = {
    img: {
        'width': '75'
    }
}

const following = React.createClass({
    render: function () {
        return (
            <div>
                <li>
                    <a href={this.props.url}>
                        <img src={this.props.avatar} style={styles.img} />
                        {this.props.name}
                    </a>
                </li>
            </div>
        );
    }
});

export default following;