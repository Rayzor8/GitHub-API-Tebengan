import { useState, createContext, useContext, useEffect } from 'react';

export const contextApp = createContext();

export const useContextApp = () => {
   return useContext(contextApp);
};

const AppContext = ({ children }) => {
   const [searchInput, setSearchInput] = useState('');
   const [users, setUsers] = useState([]);
   const [repos, setRepos] = useState([]);

   useEffect(() => {
      if (searchInput) {
         fetch(
            `https://api.github.com/search/users?q=${searchInput}8&per_page=5`
         )
            .then((res) => res.json())
            .then((data) => setUsers(data.items));
      }
   }, [searchInput]);

   useEffect(() => {
      if (searchInput) {
         fetch(`https://api.github.com/users/${searchInput}/repos`)
            .then((res) => res.json())
            .then((data) => setRepos(data));
      }
   }, [searchInput]);

   console.log(users);
   return (
      <contextApp.Provider value={{ users, repos, setSearchInput }}>
         {children}
      </contextApp.Provider>
   );
};

export default AppContext;
