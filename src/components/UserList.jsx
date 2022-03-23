import React from 'react';
import { useContextApp } from '../contexts/AppContext';
import ErrorAlert from './ErrorAlert';
import UserItem from './UserItem';

// autocomplete component
const UserLits = () => {
   const { users, setRepoName, errorRequest, setUsers, setSearchQuery } =
      useContextApp();

   const handleClickUser = (userLogin) => {
      setRepoName(userLogin);
      setSearchQuery('');
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
                     <UserItem
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
