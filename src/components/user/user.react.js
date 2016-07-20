import React from 'react';

//declare styles object
const styles = {
    img: {
        'width': '75'
    }
}

//user component declared with createClass factory method from react.creatClass
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

//export user component for making it reusable custom component
export default user;
