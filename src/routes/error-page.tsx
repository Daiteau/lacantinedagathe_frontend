import React from 'react'
import { Link, useRouteError } from "react-router-dom";

interface ErrorType {
  statusText?: string;
  message?: string;
}

export default function ErrorPage() {
  // const error = useRouteError() as ErrorType;

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to="/login" className='bg-gray-200 hover:bg-gray-300'>Go back to the homepage</Link>
    </div>
  );
}