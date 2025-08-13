import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Homepage from './Homepage.jsx'
import Client from './Client.jsx'
import Professionals from './Professionals.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/client" element={<Client />} />
        <Route path="/professionals" element={<Professionals />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
