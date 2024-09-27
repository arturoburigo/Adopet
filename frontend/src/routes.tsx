import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { SignIn } from './pages/auth/sign-in/sign-in';
import { SignUp } from './pages/auth/sign-up/sign-up';
import Home from './pages/app/home/home';
import AdminHome from './pages/app/admin/adminHome';
import Donate from './pages/app/donate/donate';
import ProtectedRoute from './lib/adminProtectionRoute';

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
        element: <SignUp />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'admin',
        element: (
          <ProtectedRoute>
            <AdminHome />
          </ProtectedRoute>
        )
      },
      {
        path: 'doacoes',
        element: <Donate />
      }
    ]
  }
]);
