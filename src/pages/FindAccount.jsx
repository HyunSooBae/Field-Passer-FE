import React from 'react';
import { useNavigate } from 'react-router-dom';

const FindAccount = () => {
  const tabMenuHandler = () => {
    console.log('클릭');
  };

  return (
    <div className='m-auto max-w-7xl pt-[10vh] bg-white'>
      <div className='w-[400px] m-auto'>
        <h2 className='text-3xl text-center mb-14 font-bold'>비밀번호 찾기</h2>
        <div className='flex justify-center gap-8  mb-10 border-solid border-b-2 border-gray-200'>
          <button onClick={tabMenuHandler} className='text-2xl w-full h-12 mb-2 hover:text-field'>
            아이디 찾기
          </button>
          <button
            onClick={tabMenuHandler}
            className='text-2xl w-full h-12  mb-2 text-gray-300 hover:text-field'
          >
            비밀번호 찾기
          </button>
        </div>
        <div>
          <form>
            <div className='bg-white border mb-4'>
              <label className='block text-gray-900 font-bold mb-4' htmlFor='username'>
                가입시 입력한 이메일 주소 확인
              </label>
              <input
                type='text'
                placeholder='이메일을 입력하세요'
                required
                className='w-full h-14 px-2 mb-6 text-[14px] rounded-[10px] bg-white border appearance-none focus:outline-none autofill:valid:bg-white focus:border-field valid:border-field'
              />
            </div>
            <button
              type='submit'
              className='w-full h-14 rounded-[10px] bg-field text-white font-bold hover:bg-hoverfield'
            >
              아이디 찾기
            </button>
          </form>
        </div>
        <div className='my-52'>
          <h4 className='text-gray-900 font-bold mb-4'>이메일 주소와 일치하는 아이디입니다.</h4>
          <div className='flex justify-center items-center w-full h-40 rounded-[10px] border border-solid border-gray-300'>
            qwerasdf@gmail.com
          </div>
          <div className='flex gap-3 mt-6'>
            <button className='w-full h-14 rounded-[10px] border border-solid bg-field text-white font-bold hover:bg-hoverfield'>
              로그인 하기
            </button>
            <button className='w-full h-14 rounded-[10px] border border-solid border-field text-field font-bold hover:bg-hoverfield'>
              홈
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindAccount;
