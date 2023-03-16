import React from 'react';

export type modalPropsType = {
  title?: string;
  description?: string;
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  onConfirm?: React.MouseEventHandler<HTMLButtonElement>;
};

const Modal = ({title, description, onCancel, onConfirm}: modalPropsType) => {
  return (
    <div className='fixed w-screen h-screen top-0 right-0 bottom-0 left-0 bg-black/50 flex justify-center items-center'>
      <div className='w-[400px] h-fit p-10 bg-white rounded-[10px]'>
        <div className='text-center'>
          <h2 className='mb-6 text-xl'>{title}</h2>
          {description ? <p className='mb-10 text-gray-500'>{description}</p> : ''}
        </div>
        <div className='flex justify-evenly'>
          {onCancel 
          ? <button className='px-6 py-4 rounded-[10px] border border-gray-200' type='button' onClick={onCancel}>
          취소
          </button>
          : ''}
          {onConfirm 
          ? <button className='px-6 py-4 rounded-[10px] border border-field bg-field text-white hover:brightness-105' type='button' onClick={onConfirm}>
          확인
          </button>
          : ''}          
        </div>
      </div>
    </div>
  );
};

export default Modal;
