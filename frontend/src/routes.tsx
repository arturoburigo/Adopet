import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { SignIn } from './pages/auth/sign-in/sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'sign-in',
        element: <SignIn />
      }
    ]
  }
])
