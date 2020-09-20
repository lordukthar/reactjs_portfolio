import React from 'react';
import ReactDOM from 'react-dom';

import App from './js/components/App';
import Home from './js/components/Home';
import Contact from './js/components/Contact';
import About from './js/components/About';

import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );