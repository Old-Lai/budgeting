import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { 
  Root,
  NotFound,
  Home,
  About,
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
  ],
}])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
