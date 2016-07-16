import ReactDOM from 'react-dom';
import React from 'react';
import Hello from './hello';

var css = require('!style!css!sass!./sass/index.scss') //why do I have to specify extension by tutorials dont?

ReactDOM.render(
 <Hello name="World" />,
 document.getElementById('main')
);