import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App  name="Daniyal Sadiq" age={14}/> 
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
