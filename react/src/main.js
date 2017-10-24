import 'babel-polyfill';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './App'

$(function() {
  let appContainer = document.getElementById('app')
  if(appContainer) {
    ReactDOM.render(
      <ParksContainer />,
      document.getElementById('app')
    );
  }
});