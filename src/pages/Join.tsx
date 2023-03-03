import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
// import requestAPI from '../api/axios';

const Join = () => {
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');

  const joinHandler = async () => {
    const res = await axios.post('http://localhost:3000/register', {
      memberId,
      password,
    });
    // console.log(memberId);
    // console.log(password);
    console.log(res.data);
  };

  const imgfile: any = useRef(null);
  // 업로드 이미지 미리보기
  const imgPreview = (input: any) => {
    if (input.target.files && input.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        imgfile.current.src = e.target.result;
      };
      reader.readAsDataURL(input.target.files[0]);
    }
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className='m-auto max-w-5xl pt-[10vh] mb-40 bg-white'>
      <div className='w-[400px] m-auto'>
        <h1 className='text-3xl text-center mb-14'>회원가입</h1>
        <form onSubmit={onSubmit}>
          <div className='bg-white border mb-4'>
            <label className='block text-gray-900 text-sm font-bold mb-2' htmlFor='username'>
              아이디
            </label>
            <input
              type='text'
              placeholder='아이디를 입력하세요'
              // required
              className='w-full h-14 px-2 text-[14px] rounded-[10px] bg-white border appearance-none focus:outline-none autofill:valid:bg-white focus:border-field valid:border-field'
              value={memberId}
              onChange={(e) => setMemberId(e.target.value)}
            />
          </div>
          <div className='bg-white border mb-4'>
            <label className='block text-gray-900 text-sm font-bold mb-2' htmlFor='username'>
              이메일
            </label>
            <input
              type='text'
              placeholder='이메일을 입력하세요'
              // required
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
              // required
              className='w-full h-14 px-2 text-[14px] rounded-[10px] bg-white border appearance-none focus:outline-none autofill:valid:bg-white focus:border-field valid:border-field'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='bg-white border mb-4'>
            <label className='block text-gray-900 text-sm font-bold mb-2' htmlFor='password'>
              닉네임
            </label>
            <input
              type='text'
              placeholder='닉네임을 입력하세요'
              // required
              className='w-full h-14 px-2 text-[14px] rounded-[10px] bg-white border appearance-none focus:outline-none autofill:valid:bg-white focus:border-field valid:border-field'
            />
          </div>
          <div className='bg-white border'>
            <h4 className='block text-gray-900 text-sm font-bold mb-2'>프로필 사진 (선택)</h4>
            {/* <div className='w-1/3 border aspect-square bg-gray-100 m-auto'>
              <span className=''>이미지 미리보기</span>
            </div> */}
            <div className='flex justify-center gap-3 my-5'>
              {/* <label
                className='w-fit p-1.5 rounded-[10px] border border-solid border-field text-gray-400'
                htmlFor='imgFile'
              >
                사진 선택
              </label> */}

              <div>
                <div className='flex gap-[10px]'>
                  <label
                    htmlFor='images'
                    className='block w-[100px] h-[100px] border-solid border rounded-lg cursor-pointer border-[#ddd] bg-[url("images/cam.png")] bg-center bg-[length:60px] bg-no-repeat'
                  />
                  <input
                    id='images'
                    type='file'
                    className='hidden'
                    accept='image/gif,image/jpeg,image/png'
                    onChange={(e) => imgPreview(e)}
                  />

                  <img
                    src=''
                    alt='미리보기 이미지'
                    className='w-[100px] h-[100px] rounded-lg border border-solid border-gray-300'
                    ref={imgfile}
                  />
                </div>
                <span className='p-1.5 my-6 rounded-[10px] border border-solid border-gray-400 text-gray-400'>
                  사진 삭제
                </span>
              </div>
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
            // type='submit'
            className='w-full h-14 rounded-[10px] bg-field text-white font-bold hover:bg-hoverfield'
            onClick={joinHandler}
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
