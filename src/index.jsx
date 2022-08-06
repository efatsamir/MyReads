import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter  } from 'react-router-dom';
import BooksProvider from './store/BooksProvider';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter >
    <BooksProvider>
         <App />
    </BooksProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


