import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import requestAPI from '../../../api/axios';
import SelectBox from './SelectBox';

const Searchbar = () => {
  const catagorySelect = useSelector((state: any) => {
    return state.store.catagorySelect;
  });
  const districtSelect = useSelector((state: any) => {
    return state.store.districtSelect;
  });

  const [categoryList, setCategoryList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [stadiumList, setStadiumList] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const res = await requestAPI('categoryList');
      setCategoryList(res?.data.resultData);
    };

    getCategory();
  }, []);

  useEffect(() => {
    if (catagorySelect) {
      const getDistrict = async () => {
        const res = await requestAPI('districtList');
        setDistrictList(res?.data.resultData);
      };
      getDistrict();
    }
  }, [catagorySelect]);

  useEffect(() => {
    if (districtSelect) {
      const getStadiumList = async () => {
        const res = await requestAPI('stadiumList');
        setStadiumList(res?.data.resultData);
      };
      getStadiumList();
    }
  }, [districtSelect]);

  return (
    <section className='flex my-[20px] justify-center gap-[10px] items-center flex-wrap'>
      <div className='flex gap-[5px] flex-col mm:flex-row'>
        <div className='flex gap-[5px]'>
          <SelectBox id='category' defaultValue='종목' size='w-1/2' options={categoryList} />
          <SelectBox
            id='district'
            defaultValue='지역 전체'
            size='w-1/2'
            options={catagorySelect ? districtList : []}
          />
        </div>
        <SelectBox
          id='stadium'
          defaultValue='구장 전체'
          size='w-[240px]'
          options={districtSelect ? stadiumList : []}
        />
      </div>

      <div className='flex gap-[5px] h-[40px]'>
        <button
          type='submit'
          className='rounded-lg bg-field hover:bg-hoverField text-white text p-3 text-sm'
        >
          검색
        </button>
        <button className='p-3 rounded-lg bg-field hover:bg-hoverField text-white text-sm'>
          <Link to='/posting'>양도하기</Link>
        </button>
      </div>
    </section>
  );
};

export default Searchbar;
