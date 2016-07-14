import React from 'react';
import ReactDOM from 'react-dom';
import Intense from './vendor/intense-images/intense.js';

var css = require('!style!css!sass!./sass/image.scss') //why do I have to specify extension by tutorials dont?

export default React.createClass({
 render: function() {
   	return (
   		<div id='imageDiv'>
	   		<img id='thumbnail'
					src={this.props.src} 
					data-title={this.props['data-title']} 
					data-caption={this.props['data-caption']} 
				/>
				<div id='commentDiv'>
					<h5>{this.props['data-title']}</h5>
					<h9>{this.props['data-caption']}</h9>
				</div>
			</div>
	 	);
 },
 componentDidMount: function () {
  var element = ReactDOM.findDOMNode(this).getElementsByTagName('img');
  Intense(element);
 }
});