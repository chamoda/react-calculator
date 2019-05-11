import React from 'react';
import PropTypes from 'prop-types';

import './Display.css';

class Display extends React.Component {

    constructor(props) {

        super(props);

        this.state = {display: props.display};

    }

    render() {

        return (
            <div className="Display">
                <span className="DisplaySpan">{this.props.display}</span>
            </div>
        );

    }

}

Display.propTypes = {
    display: PropTypes.string
};

export default Display;