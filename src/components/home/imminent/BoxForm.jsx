import React from 'react';
import ImminentList from './ImminentList';

const BoxForm = ({ selectedCategory, selectedDistrict, sort }) => {
  return (
    <div className='flex mm:hidden text-center'>
      <div className='w-full'>
        <ImminentList
          category={'풋살'}
          district={'강남구'}
          reservedDate={'20230131'}
          startTime={'12시 30분'}
          stadiumName={'운동장'}
          mobile={true}
        />
        <ImminentList
          category={'농구'}
          district={'서대문구'}
          reservedDate={'20230201'}
          startTime={'1시 30분'}
          stadiumName={'체육관'}
          mobile={true}
        />
        <ImminentList
          category={'배드민턴'}
          district={'노원구'}
          reservedDate={'20230202'}
          startTime={'2시 00분'}
          stadiumName={'공원'}
          mobile={true}
        />
        <ImminentList
          category={'테니스'}
          district={'마포구'}
          reservedDate={'20230203'}
          startTime={'12시 00분'}
          stadiumName={'실내구장'}
          mobile={true}
        />
      </div>
    </div>
  );
};

export default BoxForm;
