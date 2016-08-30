var ReactDOM = require('react-dom');
var React = require('react');

var HelloMessage = require('./HelloMessage');

ReactDOM.render(
  <HelloMessage name="world" />,
  document.getElementById('app')
);
