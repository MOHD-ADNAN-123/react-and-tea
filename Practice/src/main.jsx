import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Layout from './Layout.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Services from './components/Services.jsx';
import Home from './components/Home.jsx';
import { createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Route, RouterProvider} from 'react-router-dom';

const Router =createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="services" element={<Services/>}/>
      <Route path="contact" element={<Contact/>}/>
      
      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}/>
  </StrictMode>,
)
