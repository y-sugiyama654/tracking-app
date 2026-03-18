import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ContactComplete from './pages/ContactComplete'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ContactComplete />
  </StrictMode>,
)
