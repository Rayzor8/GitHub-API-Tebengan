import React from 'react';

const RepoItem = ({ repo, matchSelectedRepo }) => {
   return (
      <figure
         key={repo.id}
         className="bg-white p-2 cursor-pointer transition duration-300 border-2 border-gray-300 rounded-md hover:shadow-xl"
         onClick={() => matchSelectedRepo(repo.id)}
      >
         <figcaption className="flex flex-col gap-1 ">
            <strong>ID: {repo.id}</strong>
            <p>
               <strong>Name:</strong> {repo.name}
            </p>
            <p>
               <strong>Description:</strong> {repo.description}
            </p>
            <p>
               <strong>Language:</strong> {repo.language}
            </p>
         </figcaption>
      </figure>
   );
};

export default RepoItem;
