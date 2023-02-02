import React, { useEffect, useState } from 'react';
import requestAPI from '../../../api/axios';
import CategoryFilter from './CategoryFilter';
import TableForm from './TableForm';
import BoxForm from './BoxForm';
import { useMediaQuery } from 'react-responsive';
import { districtOptions } from '../../../options';
import { GiTennisCourt } from 'react-icons/gi';

const ImminentBoard = () => {
  const pcForm = useMediaQuery({
    query: '(min-width:680px)',
  });
  const mobileForm = useMediaQuery({
    query: '(max-width:679px)',
  });

  const [list, setList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('풋살장');
  const [selectedDistrict, setSelectedDistrict] = useState('all');
  const [sortingDate, setSortingDate] = useState(true);

  useEffect(() => {
    async function getList() {
      const data = await requestAPI('imminent');
      setList(data?.data?.resultData);
      console.log(data?.data?.resultData);
    }
    getList();
  }, []);

  useEffect(() => {
    console.log(selectedDistrict);
  }, [selectedDistrict]);

  return (
    <section className='my-5 pb-5 border-b border-gray-200 border-solid'>
      <GiTennisCourt className='w-20 h-20 m-auto' />
      <div className='w-full font-bold xxs:text-2xl mm:text-3xl text-center py-3 mb-10'>
        마감 임박 게시물
      </div>
      <CategoryFilter selectedCategory={setSelectedCategory} />
      <div className='flex h-15 mx-5 my-5 gap-10'>
        <select
          className='border-2 border-field focus:outline-0 text-gray-900 text-sm p-2 rounded-[10px] focus:border-green-500 block h-10 cursor-pointer'
          onChange={(e) => setSelectedDistrict(e.target.value)}
        >
          <option value={'all'}>모든 지역</option>
          {districtOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <div>
          <button
            onClick={(e) => setSortingDate(!sortingDate)}
            className='p-3 text-sm rounded-[10px] border-2 border-solid border-field hover:bg-gray-200'
          >
            날짜 정렬
          </button>
        </div>
      </div>
      {pcForm && (
        <TableForm
          selectedCategory={selectedCategory}
          selectedDistrict={selectedDistrict}
          sort={sortingDate}
          list={list}
        />
      )}
      {mobileForm && (
        <BoxForm
          selectedCategory={selectedCategory}
          selectedDistrict={selectedDistrict}
          sort={sortingDate}
          list={list}
        />
      )}
    </section>
  );
};

export default ImminentBoard;
