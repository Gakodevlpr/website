import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './routes/routes.tsx'
import { RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)