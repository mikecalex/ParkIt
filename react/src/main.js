// import 'babel-polyfill';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import ParksContainer from './containers/ParksContainer'
//
// $(function() {
//   let appContainer = document.getElementById('app')
//   if(appContainer) {
//     ReactDOM.render(
//       <ParksContainer />,
//       document.getElementById('app')
//     );
//   }
// });

import 'babel-polyfill';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom';
import App from './App'

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);
