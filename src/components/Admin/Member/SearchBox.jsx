import React from 'react';

const SearchBox = () => {
  return (
    <div className='flex my-10 w-full'>
      <label htmlFor='category' className='block mb-2 text-sm font-medium'></label>
      <select
        id='category'
        className='border border-field text-sm rounded-lg block p-2.5 basis-1/4'
      >
        <option defaultValue='카테고리'>카테고리</option>
        <option value='email'>이메일</option>
        <option value='nickName'>닉네임</option>
      </select>
      <input
        className='border border-field rounded-lg basis-1/2'
        type='text'
        placeholder='검색할 정보를 입력하세요'
      />
      <button className='w-40 h-14 bg-field rounded-lg text-white hover:bg-signatureGray ml-3 basis-1/4'>
        검색
      </button>
    </div>
  );
};

export default SearchBox;
