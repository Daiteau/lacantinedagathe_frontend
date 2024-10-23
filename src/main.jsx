import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import LoginPage from "./routes/login-page";
import SignUpPage from "./routes/signup-page"
import ErrorPage from "./routes/error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    // errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "contacts/:contactId",
    //     element: <Contact />,
    //   },
    // ],
    // ce code permet de render le child contacts dans root 
    // sauf que nous on veut pas ça on veut juste avoir une autre page
  },
  {
    path:"/auth/login",
    element: <LoginPage />
  },
  {
    path:"/auth/signup",
    element: <SignUpPage />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
