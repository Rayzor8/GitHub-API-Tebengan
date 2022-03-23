import React, { useState, useEffect } from 'react';
import { useContextApp } from '../contexts/AppContext';
import { FaSearch } from 'react-icons/fa';
import UserList from './UserList';

const InputForm = ({ placeholder }) => {
   const { searchQuery, setSearchQuery } = useContextApp();
   const [userInput, setUserInput] = useState('');

   // delay userInput to avoid unnecessary API calls
   useEffect(() => {
      const timeOutId = setTimeout(() => setSearchQuery(userInput), 1000);
      return () => {
         clearTimeout(timeOutId);
      };
   }, [userInput, setSearchQuery]);

   const handleSubmit = (e) => {
      e.preventDefault();
      setSearchQuery((prev) => prev);
   };

   const handleChange = (e) => {
      // setSearchQuery((prev) => (prev = e.target.value));
      setUserInput(e.target.value);
   };

   return (
      <form className="flex justify-center mb-3" onSubmit={handleSubmit}>
         <div className="mb-3 xl:w-96">
            <label
               htmlFor="inputSearch"
               className="form-label inline-block mb-2 text-gray-700 text-left text-xl font-bold"
            >
               Search GitHub users
            </label>
            <div className="flex items-center gap-1">
               <input
                  className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white border-2 border-solid border-gray-300 rounded transition ease-in-out duration-150 focus:outline-none focus:shadow-outline focus:text-gray-700 focus:bg-white focus:border-2 focus:border-blue-600 m-0"
                  type="search"
                  id="inputSearch"
                  value={userInput}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder={placeholder}
               />
               <FaSearch className="text-white h-[2.4rem] w-[2.4rem] bg-blue-600 p-1 rounded-r-md" />
            </div>

            {searchQuery.length < 4 && (
               <h1 className="my-2 italic text-xs text-blue-600">
                  Delaying fetching data 1s to avoid unnecessary API calls.
               </h1>
            )}

            <UserList />
         </div>
      </form>
   );
};

export default InputForm;
