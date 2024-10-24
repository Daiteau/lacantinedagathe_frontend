import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginPage from "./routes/login-page";
import SignUpPage from "./routes/signup-page"
import WelcomePage from "./routes/welcome-page"
import AdminUsersPage from "./routes/admin/admin-users-page"

import ErrorPage from "./routes/error-page";

// On déclare un type pour vérifier la présence de l'élément HTML root
const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path:"/auth/login",
    element: <LoginPage />
  },
  {
    path:"/auth/signup",
    element: <SignUpPage />
  },
  {
    path:"/admin/users",
    element: <AdminUsersPage />
  },
]);

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement as HTMLElement).render(
    // <React.StrictMode>
      <RouterProvider router={router} />
    // </React.StrictMode>
  );
} else {
  console.error('Failed to find the root element.');
}