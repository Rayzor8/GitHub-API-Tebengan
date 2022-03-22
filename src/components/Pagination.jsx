import React from 'react';

const Pagination = ({ totalPages, page, setPage }) => {
   // create pagination number base on totalPages
   // create newArray with length of totalPages and fill with number from 1 to totalPages
   const createArray = [...Array(totalPages).keys()].map((arr) => arr + 1);

   const pageHandleClick = (number) => {
      setPage(number);
   };

   const buttonStyle = `px-4 py-2 bg-white text-sm md:text-xl border border-black mr-1 mb-1 rounded-sm`;
   return (
      <div className="my-4">
         {totalPages === createArray.length &&
            createArray.map((number, index) => (
               <button
                  key={index}
                  className={
                     page === number
                        ? `${buttonStyle} bg-blue-600 text-white`
                        : buttonStyle
                  }
                  onClick={() => pageHandleClick(number)}
               >
                  {number}
               </button>
            ))}
      </div>
   );
};

export default Pagination;
