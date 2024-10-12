import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'; // Import the CSS file for styles
import App from './App'; // Import the main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Attach the App to the root div in the HTML file
);
