import { useState } from 'react';
import FormDatePicker from '../FormDatePicker';
import { getPostsList } from '@src/api/request';
import { postType } from '@src/util/adminPageTypes';

type Props = {
  setPosts: React.Dispatch<React.SetStateAction<Array<postType>>>;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
};

const SearchBox = ({ setPosts, setTotal }: Props) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const dateHandler = async () => {
    const { ok, postsListData } = await getPostsList(startDate, endDate, 1);
    if (ok) {
      setPosts(postsListData.resultData);
      setTotal(postsListData.resultDataNum);
    }
  };
  return (
    <div className='flex my-10 w-full flex-col'>
      <div className='flex'>
        <label htmlFor='category' className='block mb-2 text-sm font-medium'></label>
        <select
          id='category'
          className='bg-gray-50 border-2 border-gray-200 focus:outline-0 text-gray-900 text-m rounded-lg focus:border-green-500 block h-10'
        >
          <option defaultValue='카테고리'>카테고리</option>
          <option value='no'>글 번호</option>
          <option value='nickName'>닉네임</option>
          <option value='title'>글 제목</option>
          <option value='district'>지역</option>
        </select>
        <input
          className='bg-gray-50 border-2 w-60 border-gray-200 focus:outline-0 text-gray-900 text-m rounded-lg focus:border-green-500 block h-10'
          type='text'
          placeholder='검색할 정보를 입력하세요'
        />
        <button className='w-36 bg-field rounded-lg text-white hover:bg-hoverField ml-3 h-10'>
          검색
        </button>
      </div>
      <div className='flex items-center '>
        <FormDatePicker title={'시작 날짜'} setDate={setStartDate} />
        <span className='mr-3'>~</span>
        <FormDatePicker title={'마지막 날짜'} setDate={setEndDate} />
        <button
          type='submit'
          className='bg-field rounded-lg text-white hover:bg-hoverField h-8 w-16'
          onClick={dateHandler}
        >
          검색
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
