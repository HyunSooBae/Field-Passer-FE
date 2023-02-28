import React from 'react';
import { useState, useRef } from 'react';
import { RiQuestionnaireLine } from 'react-icons/ri';

const QuestionBox = () => {
  const imgfile = useRef(null);
  const categories = [
    { account: '회원/계정' },
    { conflict: '거래분쟁' },
    { policy: '운영정책' },
    { howto: '이용방법' },
    { etc: '기타' },
  ];

  // 업로드 이미지 미리보기
  const imgPreview = (input) => {
    if (input.target.files && input.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        imgfile.current.src = e.target.result;
      };
      reader.readAsDataURL(input.target.files[0]);
    }
  };

  async function postQuestion(body) {
    // const data = await requestAPI({ url: 'post', method: 'POST', body: JSON.stringify(body) });
    // console.log(data?.data?.resultData);
    console.log(body);
  }

  return (
    <main className='m-auto max-w-4xl mt-12 mb-40 py-10 relative px-3'>
      <div className='mb-16 text-center'>
        <RiQuestionnaireLine className='w-20 h-20 m-auto mb-4' />
        <h1 className='text-center h-10 leading-10 text-4xl mb-3'>1:1 문의</h1>
        <span className='h-10 text-neutral-500'>
          문의사항을 남겨주시면 빠르게 답변드리겠습니다.
        </span>
      </div>
      <form
        action=''
        className='w-full max-w-[600px] ml-auto mr-auto mt-0 mb-0 flex flex-col gap-[10px] mm:gap-[20px]'
      >
        <div className='flex h-10 gap-3 leading-10 m-auto'>
          <span className=''>카테고리</span>
          {categories.map((category, index) => (
            <div className=' ' key={Object.keys(category)}>
              <input
                type='radio'
                id={Object.keys(category)}
                value={Object.values(category)}
                name='category'
                className='peer mx-2 scale-125'
                defaultChecked={index === 0}
              />
              <label
                htmlFor={Object.keys(category)}
                className='font-bold w-full text-center align-middle cursor-pointer'
              >
                {Object.values(category)}
              </label>
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-[10px] mm:gap-[20px]'>
          <input
            type='text'
            placeholder='제목'
            className='h-10 rounded text-sm border-#94a3b8 border-solid border-2 px-3 focus:outline-none focus:border-field'
          />
          <textarea
            placeholder='내용 입력'
            className='resize-none rounded text-sm border-#94a3b8 border-solid border-2 px-3 pt-3 h-96 focus:outline-none focus:border-field'
          ></textarea>
        </div>
        <div>
          <p className='text-xs text-gray-600 mb-[10px]'>사진 첨부</p>
          <div className='flex gap-[10px]'>
            <label
              htmlFor='images'
              className='block w-[100px] h-[100px] cursor-pointer border-[#ddd] bg-[url("images/cam.png")] bg-center bg-[length:60px] bg-no-repeat'
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
        </div>

        <button
          className='text-lg p-3 border-solid rounded-[10px] mx-auto bg-field text-white mt-[20px]'
          onClick={() => {
            try {
              postQuestion('/?');
              window.confirm('문의글 작성이 완료되었습니다.');
            } catch (err) {
              alert(err, '다시 시도해주세요.');
            }
          }}
        >
          작성
        </button>
      </form>
    </main>
  );
};

export default QuestionBox;
