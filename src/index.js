import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import MainScene from './scenes/Main/';


console.log(new Date().toLocaleTimeString());
ReactDOM.render(<MainScene />, document.getElementById('app'));
