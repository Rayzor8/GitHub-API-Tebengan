import React from 'react';
import Loader from './Loader';

const ErrorAlert = () => {
   return (
      <div className='my-4 flex flex-col justify-center items-center text-red-500 text-xl md:text-2xl font-black'>
         <h1>Error 403 from GitHub API</h1>
         <small>Wait 2 minutes, Don't overuse search input</small>
         <Loader />
      </div>
   );
};

export default ErrorAlert;
