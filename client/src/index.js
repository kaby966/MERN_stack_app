import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
