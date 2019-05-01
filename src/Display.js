import React from 'react'

import './Display.css'

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

export default Display;