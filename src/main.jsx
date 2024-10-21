import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <div className='bg-gray-800 h-[100vh] text-white'>
    <StrictMode>
      <App />
    </StrictMode>,
  </div>
)