
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import LoginPage from "./routes/login-page";
import SignUpPage from "./routes/signup-page"
import WelcomePage from "./routes/welcome-page"
import AdminUsersPage from "./routes/admin/admin-users-page"
import ErrorPage from "./routes/error-page";

import './index.css'

import PrivateRoute from './routes/route-components/PrivateRoute';
import { AuthProvider } from "./routes/route-components/AuthProvider";

const router =  createBrowserRouter([
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/signup',
    element: <SignUpPage />
  },
  {
    path: '/welcome',
    element: (
      <PrivateRoute>
        <WelcomePage />
      </PrivateRoute>
    )
  },
  {
    path: '/admin/users',
    element: (
      <PrivateRoute>
        <AdminUsersPage />
      </PrivateRoute>
    )
  },
  {
    path: '*',
    element: <ErrorPage />
  }
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement as HTMLElement).render(
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
} else {
  console.error('Failed to find the root element.');
}