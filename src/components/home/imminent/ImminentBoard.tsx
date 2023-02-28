import React, { useEffect, useState } from 'react';
import requestAPI from '../../../api/axios';
import CategoryFilter from './CategoryFilter';
import TableForm from './TableForm';
import BoxForm from './BoxForm';
import { useMediaQuery } from 'react-responsive';
import { districtOptions } from '../../../util/options';
import { GiTennisCourt } from 'react-icons/gi';
import { ListType } from '@src/util/mainPageTypes';

const ImminentBoard = () => {
  const pcForm = useMediaQuery({
    query: '(min-width:680px)',
  });
  const mobileForm = useMediaQuery({
    query: '(max-width:679px)',
  });

  const [list, setList] = useState<ListType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('풋살장');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [sortingDate, setSortingDate] = useState(true);

  useEffect(() => {
    async function getList() {
      // const data = await requestAPI({ url: 'imminent', method: 'get' });
      const data = await requestAPI('imminent');
      setList(data?.data?.resultData);
    }
    getList();
  }, []);

  const sortedItems = () => {
    if (sortingDate) {
      return list?.sort(
        (a: any, b: any) =>
          a.startTime.slice(0, 10).replaceAll('-', '') -
          b.startTime.slice(0, 10).replaceAll('-', ''),
      );
    } else {
      return list.sort(
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
          className='border-2 border-black focus:outline-0 text-gray-900 text-sm p-2 rounded-full block h-12 w-28 cursor-pointer text-center hover:border-field focus:border-field'
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
            className='p-3 text-sm h-12 w-28 rounded-full border-2 border-solid border-black hover:border-field'
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
          list={list}
        />
      )}
      {mobileForm && (
        <BoxForm
          selectedCategory={selectedCategory}
          selectedDistrict={selectedDistrict}
          list={list}
        />
      )}
    </section>
  );
};

export default ImminentBoard;
