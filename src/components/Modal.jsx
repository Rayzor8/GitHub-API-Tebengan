import React from 'react';
import { motion } from 'framer-motion';
import BackDrop from './BackDrop';
import '../styles/modal.css';

const dropIn = {
   hidden: {
      y: '-100vh',
      opacity: 0,
   },
   visible: {
      y: '0',
      opacity: 1,
      transition: {
         duration: 0.1,
         type: 'spring',
         damping: 25,
         stiffness: 500,
      },
   },
   exit: {
      y: '100vh',
      opacity: 0,
   },
};

const getDate = (date) => {
   const newDate = new Date(date);
   return newDate.toLocaleDateString();
};

const Modal = ({ handleClose, text }) => {
   return (
      <BackDrop onClick={handleClose}>
         <motion.div
            onClick={(e) => e.stopPropagation()}
            className="modal"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
         >
            <button
               onClick={handleClose}
               className="bg-blue-600 text-white text-xl px-4 py-2 rounded-b-lg"
            >
               Close
            </button>

            <div className="mt-4 border-b-2 border-gray-300 w-full p-2 md:p-4 flex flex-col gap-1">
               <small>ID: {text.id}</small>
               <h1 className="font-bold">Repo Name: {text.name}</h1>
               <h3 className="font-bold">Repo language: {text.language}</h3>
               <p className='text-sm mt-1'>{text.description}</p>
            </div>
            <div className="p-4 flex gap-8 text-xs">
               <i>Created At: {getDate(text.pushed_at)}</i>
               <i>Last Update: {getDate(text.updated_at)}</i>
            </div>
         </motion.div>
      </BackDrop>
   );
};

export default Modal;
