import React from 'react'
import Loader from './Loader';

const ErrorAlert = () => {
  return (
    <div>
    <h1>Error 403 from GitHub API</h1>
    <Loader />
 </div>
  )
}

export default ErrorAlert