import React, { useState } from 'react';
import { useContextApp } from '../contexts/AppContext';
import Pagination from './Pagination';
import { REPO_PER_PAGE } from '../utils/contants';
import Modal from './Modal';
import RepoItem from './RepoItem';

const RepoLists = () => {
   const { repos, errorRequest } = useContextApp();
   const [modalOpen, setModalOpen] = useState(false);
   const [targetModal, setTargetModal] = useState([]);
   const [page, setPage] = useState(1);

   // modalHandler
   const open = () => setModalOpen(true);
   const close = () => setModalOpen(false);

   // paginationHandler
   const startIndex = (page - 1) * REPO_PER_PAGE;
   const endIndex = page * REPO_PER_PAGE;
   const selectedRepos = repos.slice(startIndex, endIndex);
   const totalPages = Math.ceil(repos.length / REPO_PER_PAGE);

   // filterRepos
   const matchSelectedRepo = (id) => {
      const target = selectedRepos.find((repo) => repo.id === id);
      setTargetModal(target);
      open();
   };

   return (
      <div>
         {repos.length > 0 && (
            <h1 className="text-xl my-2 font-bold">Repolists Page {page}</h1>
         )}
         {repos.length > 0 && (
            <Pagination totalPages={totalPages} page={page} setPage={setPage} />
         )}
         
         <div className="grid gap-4  grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 max-h-full">
            {repos.length > 0 &&
               !errorRequest &&
               selectedRepos.map((repo) => {
                  return (
                     <RepoItem
                        key={repo.id}
                        repo={repo}
                        matchSelectedRepo={matchSelectedRepo}
                     />
                  );
               })}

            {modalOpen && (
               <Modal
                  modalOpen={modalOpen}
                  handleClose={close}
                  text={targetModal}
               />
            )}
         </div>
      </div>
   );
};

export default RepoLists;
