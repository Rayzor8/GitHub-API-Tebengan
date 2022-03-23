import { useState, createContext, useContext, useEffect } from 'react';


export const contextApp = createContext();

export const useContextApp = () => {
   return useContext(contextApp);
};

const AppContext = ({ children }) => {
   const [searchQuery, setSearchQuery] = useState('');
   const [repoName, setRepoName] = useState('');
   const [users, setUsers] = useState([]);
   const [repos, setRepos] = useState([]);
   const [errorRequest, setErrorRequest] = useState(false);

   useEffect(() => {
      setErrorRequest(false);
      if (searchQuery === '') setUsers((prev) => (prev = []));

      if (searchQuery) {
         fetch(
            `https://api.github.com/search/users?q=${searchQuery}&per_page=5`,
            {
               method: 'GET',
               headers: {
                  'User-Agent': 'request',
               },
            }
         )
            .then((res) => {
               if (res.status === 200) {
                  return res.json();
               }
               setErrorRequest(true);
            })
            .then((data) => {
               setUsers(data.items);
            });
      }
   }, [searchQuery]);

   useEffect(() => {
      if (repoName) {
         fetch(`https://api.github.com/users/${repoName}/repos`)
            .then((res) => res.json())
            .then((data) => setRepos(data));
      }
   }, [repoName]);

   return (
      <contextApp.Provider
         value={{
            users,
            repos,
            searchQuery,
            setSearchQuery,
            setRepoName,
            errorRequest,
            setUsers,
            setRepos,
         }}
      >
         {children}
      </contextApp.Provider>
   );
};

export default AppContext;
