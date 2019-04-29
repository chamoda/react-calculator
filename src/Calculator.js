import React from 'react';

import Display from './Display.js';
import Button from './Button.js';

import './Calculator.css'

class Calculator extends React.Component {
  
  	render() {

	    return (

	      	<div className="Calculator">

	      		<Display />

		        <Button value="AC" className="Button BlackButton"/>
		        <Button value="+/-" className="Button BlackButton"/>
		        <Button value="%" className="Button BlackButton"/>
		        <Button value={"\u00F7"} className="Button OrangeButton" />

		        <br />

		        <Button value="7" className="Button GrayButton" />
		        <Button value="8" className="Button GrayButton" />
		        <Button value="9" className="Button GrayButton" />
		        <Button value="x" className="Button OrangeButton" />

		        <br />

		        <Button value="4" className="Button GrayButton" />
		        <Button value="5" className="Button GrayButton" />
		        <Button value="6" className="Button GrayButton" />
		        <Button value="-" className="Button OrangeButton" />

		        <br />

		        <Button value="1" className="Button GrayButton" />
		        <Button value="2" className="Button GrayButton" />
		        <Button value="3" className="Button GrayButton" />
		        <Button value="+" className="Button OrangeButton" />

		        <br />

		        <Button value="0" className="Button GrayButton LargeButton" />
		        <Button value="." className="Button GrayButton" />
		        <Button value="=" className="Button OrangeButton" />


	      	</div>

	    );
  	}

}

export default Calculator