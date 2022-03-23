import React from 'react';
import { useContextApp } from '../contexts/AppContext';
import { FaSearch } from 'react-icons/fa';
import UserList from './UserList';

const InputForm = ({ placeholder }) => {
   const { searchInput, setSearchInput } = useContextApp();

   const handleSubmit = (e) => {
      e.preventDefault();
      setSearchInput((prev) => prev);
   };

   const handleChange = (e) => {
      setSearchInput((prev) => (prev = e.target.value));
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
                  value={searchInput}
                  onChange={handleChange}
                  autoComplete="off"
                  placeholder={placeholder}
               />
               <FaSearch className="text-white h-[2.4rem] w-[2.4rem] bg-blue-600 p-1 rounded-r-md" />
            </div>
            
            {searchInput.length < 4 && <h1 className='my-2 italic text-xs text-blue-600'>User length Min 4 Characters (avoid request status 403)</h1>}

            <UserList />
         </div>
      </form>
   );
};

export default InputForm;
