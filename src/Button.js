import React from 'react';

import './Button.css';

class Button extends React.Component {
  
  	render() {
	    return (
		    <button className={this.props.className} onClick={this.props.onClick.bind(null, this.props.value)}>
		    	{this.props.value}
		    </button>
	    );
  	}  	

}

export default Button