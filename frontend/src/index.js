import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BlogsContextProvider } from './context/blogContext';
import { UserContextProvider } from './context/authContext';
import { GlobalStyle } from './globalStyle';
import { Global } from '@emotion/react'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <BlogsContextProvider>
        <Global styles={GlobalStyle} />
        <App />
      </BlogsContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
