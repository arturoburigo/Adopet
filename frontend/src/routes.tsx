import { createBrowserRouter } from 'react-router-dom'
import App from './App'
import { SignIn } from './pages/auth/sign-in/sign-in'
import { SignUp } from './pages/auth/sign-up/sign-up'
import { Home } from './pages/app/home/home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true, // Adiciona a rota inicial como 'Home'
        element: <Home />
      },
      {
        path: 'sign-in',
        element: <SignIn />
      },
      {
        path: 'sign-up',
        element: <SignUp />
      }
    ]
  }
])
