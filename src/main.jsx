import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/'>
    <div className='p-4'>

    <Navbar/>
    <App />
    </div>
    
    </BrowserRouter>
)
