import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';

createRoot(document.getElementById('root')).render(
  <div className='max-w-[1200px] mx-auto'>
    <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  </div>,
)
