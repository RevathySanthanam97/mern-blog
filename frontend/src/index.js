import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { WorkoutsContextProvider } from './context/workoutContext';
import { UserContextProvider } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserContextProvider>
      <WorkoutsContextProvider>
        <App />
      </WorkoutsContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
