//import React lib
import React from 'react';

//declare style with the component itself
const styles = {
    img: {
        'width': '75'
    }
}

//declare orgs child component (stateless component / dumb component)
const orgs = React.createClass({
    //render function with JSX declaration of the component
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

export default orgs;