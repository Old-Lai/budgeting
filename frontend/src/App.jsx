import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { 
  Root,
  NotFound,
  Home,
  About,
  Tables
} from './pages'

const router = createBrowserRouter([{
  path: '/',
  element: <Root/>,
  errorElement: <NotFound/>,
  children: [
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: '/about',
      element: <About/>,
    },
    { path: '/tools',
      element: <Tables/>,
    },
  ],
}])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
