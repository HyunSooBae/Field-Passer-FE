import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import requestAPI from '../../../api/axios';
import CategoryFilter from './CategoryFilter';
import TableForm from './TableForm';
import BoxForm from './BoxForm';
import { useMediaQuery } from 'react-responsive';
import { districtOptions } from '../../../util/options';
import { GiTennisCourt } from 'react-icons/gi';
import { ListType } from '@src/util/userPageTypes';
import { getImminentList, getNewPostList } from '@src/api/request';

const ImminentBoard = () => {
  const pcForm = useMediaQuery({
    query: '(min-width:680px)',
  });
  const mobileForm = useMediaQuery({
    query: '(max-width:679px)',
  });

  const [postList, setPostList] = useState<ListType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('풋살장');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [sortingDate, setSortingDate] = useState(true);

  useEffect(() => {
    async function getList() {
      // const res = await requestAPI('imminent');
      const res = await getImminentList(selectedCategory);
      console.log(res);
      // setPostList(res?.data.content);
    }
    getList();
  }, [selectedCategory]);

  useEffect(() => {
    async function getNewPost() {
      const res = await getNewPostList();
      console.log(res);
    }
    getNewPostList();
  }, []);

  const sortedItems = () => {
    if (sortingDate) {
      return postList?.sort(
        (a: any, b: any) =>
          a.startTime.slice(0, 10).replaceAll('-', '') -
          b.startTime.slice(0, 10).replaceAll('-', ''),
      );
    } else {
      return postList.sort(
        (a: any, b: any) =>
          b.startTime.slice(0, 10).replaceAll('-', '') -
          a.startTime.slice(0, 10).replaceAll('-', ''),
      );
    }
  };
  sortedItems();

  return (
    <section className='my-5 pb-5 border-b border-gray-200 border-solid'>
      <GiTennisCourt className='w-16 h-16 m-auto' />
      <div className='w-full font-bold xxs:text-2xl mm:text-3xl text-center py-3 mb-10'>
        마감 임박 게시물
      </div>
      <CategoryFilter selectedCategory={setSelectedCategory} />
      <div className='flex h-15 justify-center my-5 gap-16'>
        <select
          className='border-2 border-gray-300 focus:outline-0 text-gray-900 text-sm p-2 rounded-full block h-12 w-28 cursor-pointer text-center hover:border-field focus:border-field'
          onChange={(e) => setSelectedDistrict(e.target.value)}
        >
          <option value={'all'}>모든 지역</option>
          {districtOptions.map((option: string) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div>
          <button
            onClick={(e) => setSortingDate(!sortingDate)}
            className='p-3 text-sm h-12 w-28 rounded-full border-2 border-solid border-gray-300 hover:border-field'
          >
            날짜 정렬
            {sortingDate ? '  ▲' : ' ▼'}
          </button>
        </div>
      </div>
      {pcForm && (
        <TableForm
          selectedCategory={selectedCategory}
          selectedDistrict={selectedDistrict}
          list={postList}
        />
      )}
      {mobileForm && (
        <BoxForm
          selectedCategory={selectedCategory}
          selectedDistrict={selectedDistrict}
          list={postList}
        />
      )}
    </section>
  );
};

export default ImminentBoard;
