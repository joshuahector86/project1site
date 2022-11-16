import * as React from 'react'
import ReactDOM from 'react-dom';

import App from './Components/App'
import Blog from './Blog/Blog'

ReactDOM.render(
  <React.StrictMode>
    <Blog />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);