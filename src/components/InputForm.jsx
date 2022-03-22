import React, { useRef } from 'react';
import { useContextApp } from '../contexts/AppContext';

const InputForm = () => {
   const { setSearchInput } = useContextApp();
   const inputRef = useRef(null);

   const handleSubmit = (e) => {
      e.preventDefault();
      const inputValue = inputRef.current.value;
      setSearchInput(inputValue);
      inputRef.current.value = '';
   };
   return (
      <form onSubmit={handleSubmit}>
         <label htmlFor="inputSearch"></label>
         <input type="search" id="inputSearch" ref={inputRef} />
         <button type="submit">Search</button>
      </form>
   );
};

export default InputForm;
