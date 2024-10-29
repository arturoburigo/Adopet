import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import Home from './pages/app/home/home';
import AdminHome from './pages/auth/admin-home/adminHome';
import Donate from './pages/app/donate/donate';
import ProtectedRoute from './lib/adminProtectionRoute';
import { Eventos } from './pages/app/eventos/eventos';
import { EventAdmin } from './pages/auth/event-admin/eventAdmin';
import { SignIn } from './pages/auth/sign-in/sign-in';
import { SignUp } from './pages/auth/sign-up/sign-up';
import Sobre from './pages/app/sobre/sobre';
import Contato from "./pages/app/contato/contato";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Navigate to="/home" replace /> // Redireciona para /home
      },
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
      },
      {
        path: 'eventos',
        element: <Eventos/>
      },
      {
        path: 'evento-admin',
        element: (
          <ProtectedRoute>
            <EventAdmin />
          </ProtectedRoute>
        )
      },
      {
        path: 'sobre-nos',
        element: <Sobre/>
      },
      {
        path: 'contato',
        element: <Contato/>
      },
    ]
  }
]);
