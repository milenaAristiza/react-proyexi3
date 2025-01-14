import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  gtmId: 'GTM-T7M4P2RQ', // Reemplaza con tu ID de GTM
};
const root = ReactDOM.createRoot(document.getElementById('root'));
TagManager.initialize(tagManagerArgs);
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
