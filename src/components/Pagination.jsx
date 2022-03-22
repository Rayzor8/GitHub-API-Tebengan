import React from 'react';

const Pagination = () => {
   const buttonArr = [1, 2, 3, 4, 5, 6, 7, 8];
   return (
      <div className='my-2'>
         {buttonArr.map((el, index) => (
            <button
               key={index}
               className="px-4 py-2 bg-white text-sm md:text-xl border border-black mr-1 mb-1 rounded-sm"
            >
               {el}
            </button>
         ))}
      </div>
   );
};

export default Pagination;
