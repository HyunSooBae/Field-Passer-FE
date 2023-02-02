import React from 'react';
import ImminentList from './ImminentList';

const TableForm = () => {
  return (
    <table className='table-auto w-full xxs:text-sm lg:text-base mt-3 rounded-[10px] overflow-hidden bg-field border border-solid border-field'>
      <thead className='text-field bg-tableBg text-bold'>
        <tr>
          <th scope='col' className='w-[10%] py-4 text-center'>
            종목
          </th>
          <th scope='col' className='w-[10%] py-4 text-center'>
            지역
          </th>
          <th scope='col' className='w-[15%] py-4 text-center'>
            날짜
          </th>
          <th scope='col' className='w-[15%] py-4 text-center'>
            시간
          </th>
          <th scope='col' className='w-[40%] py-4 text-center'>
            구장
          </th>
          <th scope='col' className='w-[10%] py-4 text-center'>
            거래하기
          </th>
        </tr>
      </thead>
      <tbody>
        {/* {reports ? (
        reports?.map((report) => <Question key={아이디} item={게시글정보} />)
      ) : (
        <tr>
          <td>마감 임박 게시물이 없습니다.</td>
        </tr>
      )} */}
        <ImminentList
          category={'풋살'}
          district={'강남구'}
          reservedDate={'20230131'}
          startTime={'12시 30분'}
          stadiumName={'운동장'}
          mobile={false}
        />
        <ImminentList
          category={'농구'}
          district={'서대문구'}
          reservedDate={'20230201'}
          startTime={'1시 30분'}
          stadiumName={'체육관'}
          mobile={false}
        />
        <ImminentList
          category={'배드민턴'}
          district={'노원구'}
          reservedDate={'20230202'}
          startTime={'2시 00분'}
          stadiumName={'공원'}
          mobile={false}
        />
        <ImminentList
          category={'테니스'}
          district={'마포구'}
          reservedDate={'20230203'}
          startTime={'12시 00분'}
          stadiumName={'실내구장'}
          mobile={false}
        />
      </tbody>
    </table>
  );
};

export default TableForm;
