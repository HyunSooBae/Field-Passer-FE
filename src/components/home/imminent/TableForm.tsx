import React from 'react';
import ImminentList from './ImminentList';
import { ImminentBoardType } from '@src/util/userPageTypes';

const TableForm = ({ selectedCategory, selectedDistrict, list }: ImminentBoardType) => {
  const filteredList = list.filter(
    (item) =>
      item.category === selectedCategory &&
      (selectedDistrict === 'all' || item.district === selectedDistrict),
  );

  return (
    <table className='table-auto w-full xxs:text-sm lg:text-base mt-3 rounded-[10px] overflow-hidden bg-field border border-solid border-field'>
      <colgroup>
        <col style={{ width: '10%' }} />
        <col style={{ width: '10%' }} />
        <col style={{ width: '15%' }} />
        <col style={{ width: '15%' }} />
        <col style={{ width: '40%' }} />
        <col style={{ width: '10%' }} />
      </colgroup>
      <thead className='text-field bg-tableBg text-bold'>
        <tr>
          <th scope='col' className='py-4 text-center'>
            종목
          </th>
          <th scope='col' className='py-4 text-center'>
            지역
          </th>
          <th scope='col' className='py-4 text-center'>
            날짜
          </th>
          <th scope='col' className='py-4 text-center'>
            시간
          </th>
          <th scope='col' className='py-4 text-center'>
            구장
          </th>
          <th scope='col' className='py-4 text-center'>
            거래하기
          </th>
        </tr>
      </thead>
      <tbody>
        {filteredList.length ? (
          filteredList?.map(({ category, postId, district, stadiumName, startTime }) => (
            <ImminentList
              key={postId}
              postId={postId}
              category={category}
              district={district}
              startTime={startTime}
              stadiumName={stadiumName}
              mobile={false}
            />
          ))
        ) : (
          <>
            <tr className='h-40 bg-white'>
              <td className='text-lg text-center align-middle' colSpan={6}>
                조건에 맞는 게시물이 없습니다.
              </td>
            </tr>
          </>
        )}
      </tbody>
    </table>
  );
};

export default TableForm;
