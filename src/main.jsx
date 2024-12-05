import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Ia from './ia.jsx'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <div>
      <App></App>
      
      <Ia></Ia>
      
      
    </div>
    
    
  </StrictMode>,
)
