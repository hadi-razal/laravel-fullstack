import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './route.jsx'
import { ContextProvider } from '../contexts/contextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <ContextProvider>

      <RouterProvider router={router}/>

    </ContextProvider>
    

  </StrictMode>,
)
