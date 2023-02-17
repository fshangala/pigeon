import { useState } from 'react'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './error-page'
import LoginPage from './routes/login'
import Root from './routes/root'

const router = createHashRouter([
  {
    path:"/",
    element:<Root />,
    errorElement:<ErrorPage />,
    children:[
      {
        path:"login/",
        element:<LoginPage />
      }
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
