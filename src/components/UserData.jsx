import React from 'react';

const UserData = ({ user, handleClickUser}) => {
   return (
      <li
         key={user.id}
         className="flex items-center bg-white p-2 rounded-md gap-2 cursor-pointer hover:bg-slate-100 transition-colors ease-in-out duration-300"
         onClick={() => handleClickUser(user.login)}
      >
         <img
            className="h-8 w-8 rounded-full mr-3"
            src={user.avatar_url}
            alt={user.login}
         />

         <p className="text-gray-700 font-medium">{user.login}</p>
      </li>
   );
};

export default UserData;
