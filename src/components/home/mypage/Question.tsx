import React from 'react';

const Question = ({ item }) => {
  console.log(item);
  const convertDate = (date) => {
    return date.replace('T', ' ');
  };
  return (
    <tr className='border-t-[1px] border-solid border-gray-200 bg-white'>
      <td className='font-bold p-4 py-5'>{item.title}</td>
      <td className='px-4 py-5'>{convertDate(item.registerDate)}</td>
      <td className='px-4 py-5'>
        <span
          className={`
            p-1.5 rounded-[10px] font-bold 
            ${item.response === '답변 전' ? 'text-gray-500 bg-gray-200' : 'text-field bg-tableBg'}
          `}
        >
          {item.response}
        </span>
      </td>
      <td className='px-4 py-5 font-bold'>{item.memberName}</td>
    </tr>
  );
};

export default Question;
