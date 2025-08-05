import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import About from './components/About/About.jsx'; 
import App from './App.jsx'
import { RouterProvider ,createBrowserRouter} from 'react-router-dom'

//creating a router
const router =createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,  //element to be render
    children: [           //Array of children to be added
//1st children ==> Home
      {
        path: "",
        element: <Home/>
      },

//another children ==> about
      {
        path: "about",
        element : <About/>
      }
    ]
}
])

//passing the router
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
