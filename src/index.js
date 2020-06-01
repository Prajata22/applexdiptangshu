import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import './Demo.css';
import Demo from './Demo';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Demo/>,
  document.getElementById('root')
);
serviceWorker.unregister();
