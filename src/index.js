import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { MainProvider } from './state/main/mainProvider';

ReactDOM.render(
  <MainProvider>
    <App />
  </MainProvider>,
  document.getElementById('root')
);

