import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import { Provider } from 'react-redux'
import Store from './Store';
import Counter from './Counter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={Store}>
        <Counter />
  </Provider>
  </React.StrictMode>
);


