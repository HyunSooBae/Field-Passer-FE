import React from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
  return (
    <div className='m-auto max-w-7xl pt-[10vh] bg-white'>
      <div className='w-[400px] m-auto'>
        <h2 className='text-3xl text-center mb-14'>회원가입</h2>
        <form>
          <div className='bg-white border mb-4'>
            <label className='block text-gray-900 text-sm font-bold mb-2' htmlFor='username'>
              아이디
            </label>
            <input
              type='text'
              placeholder='아이디를 입력하세요'
              required
              className='w-full h-14 px-2 text-[14px] rounded-[10px] bg-white border appearance-none focus:outline-none autofill:valid:bg-white focus:border-field valid:border-field'
            />
          </div>
          <div className='bg-white border mb-4'>
            <label className='block text-gray-900 text-sm font-bold mb-2' htmlFor='username'>
              이메일
            </label>
            <input
              type='text'
              placeholder='이메일을 입력하세요'
              required
              className='w-full h-14 px-2 text-[14px] rounded-[10px] bg-white border appearance-none focus:outline-none autofill:valid:bg-white focus:border-field valid:border-field'
            />
          </div>
          <div className='bg-white border mb-4'>
            <label className='block text-gray-900 text-sm font-bold mb-2' htmlFor='password'>
              비밀번호
            </label>
            <input
              type='password'
              placeholder='비밀번호를 입력하세요'
              required
              className='w-full h-14 px-2 text-[14px] rounded-[10px] bg-white border appearance-none focus:outline-none autofill:valid:bg-white focus:border-field valid:border-field'
            />
          </div>
          <div className='bg-white border mb-4'>
            <label className='block text-gray-900 text-sm font-bold mb-2' htmlFor='password'>
              닉네임
            </label>
            <input
              type='password'
              placeholder='닉네임을 입력하세요'
              required
              className='w-full h-14 px-2 text-[14px] rounded-[10px] bg-white border appearance-none focus:outline-none autofill:valid:bg-white focus:border-field valid:border-field'
            />
          </div>
          <div className='bg-white border'>
            <h4 className='block text-gray-900 text-sm font-bold mb-2'>프로필 사진 (선택)</h4>
            <div className='w-1/3 border aspect-square bg-gray-100 m-auto'>
              <span className=''>이미지 미리보기</span>
            </div>
            <div className='flex justify-center gap-3 my-5'>
              <label
                className='w-fit p-1.5 rounded-[10px] border border-solid border-field text-gray-400'
                htmlFor='imgFile'
              >
                사진 선택
              </label>
              <span className='w-fit p-1.5 rounded-[10px] border border-solid border-gray-400 text-gray-400'>
                초기화
              </span>
            </div>
            <input
              type='file'
              id='imgFile'
              // placeholder='닉네임을 입력하세요'
              // required
              style={{ display: 'none' }}
            />
          </div>

          <button
            type='submit'
            className='w-full h-14 rounded-[10px] bg-field text-white font-bold hover:bg-hoverfield'
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
