import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import './styles/fonts.css'  // All font imports moved here
import './styles/base.css';

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
