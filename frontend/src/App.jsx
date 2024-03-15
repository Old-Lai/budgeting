import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { 
  Root,
  NotFound,
  Home,
  About,
  Tools,
  Table,
  SignIn,
  SignUp,
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
      element: <Tools/>,
    },
    {
      path: '/profile',
      element: <SignIn/>,
    },
    {
      path: '/tools/table/:id',
      element: <Table/>,
    }
  ],
}])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
