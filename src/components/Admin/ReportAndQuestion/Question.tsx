import { Link } from 'react-router-dom';
import { questionType } from '@src/util/adminPageTypes';

type Props = {
  item: questionType;
};

const Question = ({ item }: Props) => {
  return (
    <tr key={item.questionId} className='border-t-[1px] border-solid border-field bg-white'>
      <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
        {item.questionId}
      </td>
      <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>{item.title}</td>
      <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
        {item.memberId}
      </td>
      <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
        {item.response}
      </td>
      <td className='text-sm text-gray-900 font-light px-3 py-4 whitespace-nowrap'>
        <Link to='/admin/service/123'>
          <button className='bg-field rounded-lg text-white hover:bg-hoverField h-8 w-20 ml-3'>
            상세 보기
          </button>
        </Link>
      </td>
    </tr>
  );
};

export default Question;
