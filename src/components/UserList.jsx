import React from 'react';
import { useContextApp } from '../contexts/AppContext';
import ErrorAlert from './ErrorAlert';
import UserData from './UserData';

// autocomplete component

const UserLits = () => {
   const { users, setRepoName, errorRequest,setUsers,setSearchInput } = useContextApp();
   const handleClickUser = (userLogin) => {
      setRepoName(userLogin);
      setSearchInput('')
      setUsers([]);
   };

   return (
      <>
         {errorRequest && <ErrorAlert />}

         <ul className="flex flex-col gap-2 py-2">
            {users &&
               !errorRequest &&
               users.map((user) => {
                  return (
                     <UserData
                        key={user.id}
                        user={user}
                        handleClickUser={handleClickUser}
                     />
                  );
               })}
         </ul>
      </>
   );
};

export default UserLits;
