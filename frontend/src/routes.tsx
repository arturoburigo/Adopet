import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { SignIn } from './pages/auth/sign-in/sign-in'
import { SignUp } from './pages/auth/sign-up/sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'sign-in',
        element: <SignIn />
      },
      {
        path: 'sign-up',
        element: <SignUp/>
      }
    ]
  }
])
