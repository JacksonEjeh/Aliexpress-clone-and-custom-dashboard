import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AliDashboardProvider } from './context/dashboardContext';
import { AliExpressProvider } from './context/appContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AliExpressProvider>
      <AliDashboardProvider>
        <App />
      </AliDashboardProvider>
    </AliExpressProvider>
  </React.StrictMode>
);

