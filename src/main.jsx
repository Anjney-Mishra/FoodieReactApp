import React, { lazy, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import About from './components/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contactus from './components/Contactus.jsx'
import Error from './components/Error.jsx'
import Body from './components/Body.jsx'
import RestaurantMenu from './components/RestaurantMenu.jsx'
import Cart from './components/Cart.jsx'
// import Grocery from './components/Grocery.jsx'

const Grocery = lazy(()=>import("./components/Grocery.jsx"));


const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contactus",
        element:<Contactus/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/restaurant/:resid",
        element: <RestaurantMenu/>
      }
    ],
    errorElement:<Error/>
  },
  
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>,
)
