import React from 'react';
import '../styles/Loader.css'

const Loader = () => {
   return (
      <div className=" flex justify-center items-center my-10 ">
         <div className="loader bg-white p-5 rounded-full flex space-x-3">
            <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce" />
            <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce" />
            <div className="w-5 h-5 bg-gray-800 rounded-full animate-bounce" />
         </div>
      </div>
   );
};

export default Loader;