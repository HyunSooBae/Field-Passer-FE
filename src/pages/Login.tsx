import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [emailId, setEmailId] = useState();
  const [pw, setPw] = useState();

  return (
    <div className='m-auto max-w-5xl pt-[10vh] bg-white'>
      <div className='w-[400px] m-auto'>
        <h1 className='text-3xl text-center mb-14'>로그인</h1>
        <form>
          <div className='bg-white border mb-4'>
            <label className='block text-gray-900 text-sm font-bold mb-2' htmlFor='username'>
              이메일
            </label>
            <input
              type='text'
              placeholder='이메일을 입력하세요'
              required
              className='w-full h-14 px-2 text-[14px] rounded-[10px] bg-white border appearance-none focus:outline-none autofill:valid:bg-white focus:border-field valid:border-field'
              value={emailId}
              onChange={(e: any) => setEmailId(e.target.value)}
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
              value={pw}
              onChange={(e: any) => setPw(e.target.value)}
            />
          </div>
          <div className='flex justify-between mb-10'>
            <Link to='/findaccount' className='text-gray-400 hover:text-field'>
              비밀번호 찾기
            </Link>
            <Link to='/join' className='text-gray-400 hover:text-field'>
              회원가입
            </Link>
          </div>
          <button
            type='submit'
            className='w-full h-14 rounded-[10px] bg-field text-white font-bold hover:bg-hoverfield'
            // onClick={}
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
