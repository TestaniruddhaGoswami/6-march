import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(   
  // render is a function//this takes component
  <React.StrictMode> {/* <//it gives additional checks and balanace} */}
    {/* jsx element must have only one parent element so, we need fragment<> tags  */}
    <h1>hello</h1>
    <App />
  </React.StrictMode> 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
