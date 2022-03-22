import { useState, createContext, useContext, useEffect } from 'react';

export const contextApp = createContext();

export const useContextApp = () => {
   return useContext(contextApp);
};

const AppContext = ({ children }) => {
   const [searchInput, setSearchInput] = useState('');
   const [repoName, setRepoName] = useState('');
   const [users, setUsers] = useState([]);
   const [repos, setRepos] = useState([]);
   const [errorRequest, setErrorRequest] = useState(false);

   console.log(users);
   console.log(searchInput.length);
   useEffect(() => {
      setErrorRequest(false);
      if (searchInput === '') setUsers((prev) => (prev = []));

      if (searchInput.length > 3) {
         fetch(
            `https://api.github.com/search/users?q=${searchInput}&per_page=5`,
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
   }, [searchInput]);

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
            searchInput,
            setSearchInput,
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
