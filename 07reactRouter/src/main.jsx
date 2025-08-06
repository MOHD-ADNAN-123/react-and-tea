import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import Contact from './components/ContactUs/Contact.jsx';
import About from './components/About/About.jsx'; 
import User from './components/User/User.jsx'; 
import Github from './components/Github/Github.jsx'; 
import App from './App.jsx'
import { Route, RouterProvider ,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

// //creating a router
// const router =createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,  //element to be render
//     children: [           //Array of children to be added
// //1st children ==> Home
//       {
//         path: "",
//         element: <Home/>
//       },

// //another children ==> about
//       {
//         path: "about",
//         element : <About/>
//       },
//       {
//         path: "Contact",
//         element: <Contact/>
//       },

//     ]
// }
// ])


//ANOTHER WAY TO CREATE A ROUTER
const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element ={<Layout />}>

      <Route path="" element ={<Home/>} />
      <Route path="about" element ={<About/>} />
      <Route path="Contact" element ={<Contact/>} />
      <Route path="User/:id" element ={<User/>} />
      <Route path="Github" element ={<Github/>} />
    </Route>
  )
) 

//passing the router
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
