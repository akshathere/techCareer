import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Navbar from './components/Navbar.tsx'
import { Navigator } from './components/Navigator.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar></Navbar>
    <Navigator></Navigator>
    <App />
  </React.StrictMode>,
)
