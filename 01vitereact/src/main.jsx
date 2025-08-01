import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Chai from "./chai"

createRoot(document.getElementById('root')).render(
  <>
    <Chai/>
  </>
)
