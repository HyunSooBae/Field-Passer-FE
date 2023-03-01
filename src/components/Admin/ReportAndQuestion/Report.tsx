import { reportType } from '@src/util/adminPageTypes';

type Props = {
  item: reportType;
};

const Report = ({ item }: Props) => {
  return (
    <tr key={item.questionId} className='border-t-[1px] border-solid border-field bg-white'>
      <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
        {item.reportCategory}
      </td>
      <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
        {item.reporterId}
      </td>
      <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
        {item.targetId}
      </td>
      <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
        {item.proccess}
      </td>
      <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
        <button className='bg-field rounded-lg text-white hover:bg-hoverField h-8 w-20 ml-3'>
          상세 보기
        </button>
      </td>
    </tr>
  );
};

export default Report;
