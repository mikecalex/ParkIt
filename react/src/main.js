import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ParksContainer from './containers/ParksContainer'

$(function() {
  ReactDOM.render(
    <ParksContainer />,
    document.getElementById('app')
  );
});
