import React from 'react';
import { FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='mt-10 py-8 text-center bg-gradient-to-r from-blue-500 to-purple-500 text-white'>
      <p className='text-lg font-semibold'>© Maheenkhan | All rights reserved 2024.</p>
      <div className="mt-4 flex justify-center space-x-4">
        <a href="https://github.com/Maheenkhan63" className="flex items-center text-white hover:underline" target="_blank" rel="noopener noreferrer">
          <FaGithub className="mr-1" /> Maheenkhan63
        </a>
        <a href="https://instagram.com/maheen_khan_65" className="flex items-center text-white hover:underline" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="mr-1" /> maheen_khan_65
        </a>
      </div>
    </footer>
  );
}

export default Footer;