import React from 'react';
import Intense from './vendor/intense-images/intense.js';

export default React.createClass({
 style: {width: '220px', height: '220px'},
 render: function() {
   	return (
   		<img 
				src={this.props.src} 
				style={this.style}
				data-title={this.props['data-title']} 
				data-caption={this.props['data-caption']} 
			/>
	 	)
 },
 componentDidMount: function () {
    Intense( [this.getDOMNode()]);
 }
});