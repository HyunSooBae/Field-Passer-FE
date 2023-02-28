import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='w-full mt-10 pt-5 text-white bg-black'>
      <div className='m-auto max-w-5xl h-40 text-xs p-5 justify-center relative flex flex-col gap-3'>
        <a
          href='https://github.com/Field-Passer/Field-Passer-BE'
          target='_blank'
          className='px-1 flex gap-1'
        >
          <AiFillGithub />
          Backend Repository
        </a>
        <a
          href='https://github.com/Field-Passer/Field-Passer-FE'
          target='_blank'
          className='px-1 flex gap-1'
        >
          <AiFillGithub />
          Frontend Repository
        </a>
        <div className='flex justify-end'>
          <img src='images/logo-1.png' className='w-36 right-0' />
        </div>
        <span className='font-semibold text-right'>
          &copy; 2023 FIELD-PASSER. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
