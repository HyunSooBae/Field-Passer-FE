import React from 'react';

const question = ({ item }) => {
  return (
    <tr className='border-t-[1px] border-solid border-field bg-white'>
      <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>{item.title}</td>
      <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
        {item.memberName}
      </td>
      <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
        {item.response}
      </td>
    </tr>
  );
};

export default question;
