import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='m-auto max-w-7xl pt-[10vh] bg-white'>
      <h2 className='w-[400px] text-3xl text-center my-10 m-auto'>로그인</h2>
      <form className='w-[400px] m-auto'>
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
        <div className='flex justify-between mb-10'>
          <Link href='#' className='text-gray-400 hover:text-field'>
            아이디/비밀번호 찾기
          </Link>
          <Link href='#' className='text-gray-400 hover:text-field'>
            회원가입
          </Link>
        </div>
        <button
          type='submit'
          className='w-full h-14 rounded-[10px] bg-field text-white font-bold hover:bg-hoverfield'
        >
          로그인
        </button>
      </form>
    </div>
  );
};

export default Login;
