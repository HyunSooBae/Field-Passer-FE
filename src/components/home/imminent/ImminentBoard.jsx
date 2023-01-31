import React from 'react';
import CategoryFilter from './CategoryFilter';
import ImminentList from './ImminentList';

const ImminentBoard = () => {
  //종목별 필터링
  //화면 sm사이즈(540px) 이하는 박스형으로 따로 만들기...

  return (
    <section className='my-5'>
      <div className='w-full font-bold text-2xl text-center py-3 mb-3 border border-solid rounded-[10px] border-field'>
        마감 임박 게시물
      </div>
      <div className='flex'>
        <CategoryFilter />
      </div>
      <table className='table-auto w-full xxs:text-xs sm:text-sm mt-3 rounded-[10px] overflow-hidden bg-field border border-solid border-field'>
        <thead className='text-sm text-field bg-tableBg text-bold'>
          <tr>
            <th scope='col' className='w-[15%] py-4 text-center bg-yellow-400'>
              지역
            </th>
            <th scope='col' className='w-[15%] py-4 text-center bg-red-400'>
              날짜
            </th>
            <th scope='col' className='w-[15%] py-4 text-center bg-gray-400'>
              시간
            </th>
            <th scope='col' className='w-[40%] py-4 text-center bg-orange-400'>
              구장
            </th>
            <th scope='col' className='w-[15%] py-4 text-center  bg-gray-400'>
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
            district={'강남구'}
            reservedDate={'20230131'}
            startTime={'12시 30분'}
            stadiumName={'운동장'}
          />
          <ImminentList
            district={'서대문구'}
            reservedDate={'20230201'}
            startTime={'1시 30분'}
            stadiumName={'체육관'}
          />
          <ImminentList
            district={'노원구'}
            reservedDate={'20230202'}
            startTime={'2시 00분'}
            stadiumName={'공원'}
          />
        </tbody>
      </table>
    </section>
  );
};

export default ImminentBoard;
