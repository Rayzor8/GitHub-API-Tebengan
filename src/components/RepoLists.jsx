import React from 'react';
import { useContextApp } from '../contexts/AppContext';
import Pagination from './Pagination';
import { REPO_PER_PAGE } from '../utils/contants';

const RepoLists = () => {
   const { repos, errorRequest, page, setPage } = useContextApp();

   const startIndex = (page - 1) * REPO_PER_PAGE;
   const endIndex = page * REPO_PER_PAGE;
   const selectedRepos = repos.slice(startIndex, endIndex);
   
   const totalPages = Math.ceil(repos.length / REPO_PER_PAGE)

   return (
      <>
         {repos.length > 0 && (
            <h1 className="text-xl my-2 font-bold">Repolists Page {page}</h1>
         )}
         {repos.length > 0 && (
            <Pagination totalPages={totalPages} page={page} setPage={setPage} />
         )}
         <div className="grid gap-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            {repos.length > 0 &&
               !errorRequest &&
               selectedRepos.map((repo) => {
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
                        <small>{repo.id}</small>
                        <p>{repo.name}</p>
                        <p>{repo.description}</p>
                        <p>{repo.language}</p>
                     </div>
                  );
               })}
         </div>
      </>
   );
};

export default RepoLists;
