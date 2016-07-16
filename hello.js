import React from 'react';
import Image from './image.js';

export default React.createClass({
 	render: function() {
   	return (
     	<div>
	     	<Image 
	     		src='/trailImages/m.jpg' 
	     		data-title="Canyon Creek Trail" 
	     		data-caption="4.5 hrs each way"
     		/>
     		<Image 
	     		src='/trailImages/m.jpg' 
	     		data-title="Canyon Creek Trail" 
	     		data-caption="4.5 hrs each way"
     		/>
     		<Image 
	     		src='/trailImages/m.jpg' 
	     		data-title="Canyon Creek Trail" 
	     		data-caption="4.5 hrs each way"
     		/>
     	</div>
   	);
 	}
});