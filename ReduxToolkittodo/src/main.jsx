import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//these two needs to be import
import { Provider } from 'react-redux'
import {store} from './app/store';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>  
    <App />
  </Provider>,
)
