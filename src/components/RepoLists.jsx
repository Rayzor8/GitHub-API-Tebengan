import React from 'react';
import { useContextApp } from '../contexts/AppContext';
import Pagination from './Pagination';
const RepoLists = () => {
   const { repos, errorRequest } = useContextApp();
   return (
      <>
         <div className="grid gap-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {repos.length > 0 &&
               !errorRequest &&
               repos.map((repo) => {
                  return (
                     <div
                        key={repo.id}
                        className="bg-white p-2 cursor-pointer hover:bg-slate-100 transition-colors duration-300"
                        onClick={() =>
                           alert(
                              `${repo.name} ${repo.id} ${repo.language} ${
                                 repo.description ? repo.description : ''
                              }${repo.pushed_at} ${repo.updated_at}`
                           )
                        }
                     >
                        <h1>Repository List</h1>
                        <p>{repo.name}</p>
                        <p>{repo.description}</p>
                        <p>{repo.language}</p>
                     </div>
                  );
               })}
         </div>
         {repos.length > 0 && <Pagination />}
      </>
   );
};

export default RepoLists;
