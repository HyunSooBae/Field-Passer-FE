import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import requestAPI from '../../../api/axios';
import SelectBox from './SelectBox';

const Searchbar = () => {
  const catagorySelect = useSelector((state) => {
    return state.selected.catagorySelect;
  });
  const districtSelect = useSelector((state) => {
    return state.selected.districtSelect;
  });

  const [categoryList, setCategoryList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [stadiumList, setStadiumList] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      const res = await requestAPI('categoryList')
      setCategoryList(res.data.resultData)
    }

    getCategory()
  }, []);

  useEffect(() => {
    if(catagorySelect){
      const getDistrict = async () => {
        const res = await requestAPI('districtList')
        setDistrictList(res.data.resultData)
      }
      getDistrict()
    }
  }, [catagorySelect]);

  useEffect(() => {
    if(districtSelect){
      const getStadiumList = async () => {
        const res = await requestAPI('stadiumList')
        setStadiumList(res.data.resultData)
      }
      getStadiumList()
    }
  }, [districtSelect]);

  console.log(categoryList)

  return (
    <section className='xs:w-96 sm:w-fit xxs:mt-6 xxs:flex-col xxs:m-auto xxs:flex mm:flex-row bg-zinc-200 py-2 px-2 items-center rounded-lg'>
      <SelectBox id='category' defaultValue='종목' size='w-28' options={categoryList} />
      <SelectBox id='district' defaultValue='지역 전체' size='w-28' options={catagorySelect ? districtList : []} />
      <SelectBox id='stadium' defaultValue='구장 전체' size='w-60' options={districtSelect ? stadiumList : [] } />
      <button
        type='submit'
        className='p-3 xxs:mt-1 sm:mt-0 sm:ml-1 rounded-lg bg-field hover:bg-hoverField text-white'
      >
        검색
      </button>
    </section>
  );
};

export default Searchbar;
