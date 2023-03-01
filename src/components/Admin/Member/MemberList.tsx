import { useNavigate } from 'react-router';
import { memberListsType } from '@src/util/adminPageTypes';

type Props = {
  item: memberListsType;
};

const MemberList = ({ item }: Props) => {
  const navigate = useNavigate();
  const onClickHandler = (id: string) => {
    navigate(`/admin/member/detail/${id}`);
  };
  return (
    <tr className='border-t-[1px] border-solid border-field bg-white'>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {item.memberName}
      </td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>{item.email}</td>
      <td className='text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap'>
        {item.signupDate}
      </td>
      <td className='px-6 py-4'>
        <button
          className='bg-field rounded-lg text-white hover:bg-hoverField h-8 w-14'
          onClick={() => onClickHandler(item.email)}
        >
          조회
        </button>
        <button className='bg-field rounded-lg text-white hover:bg-hoverField h-8 w-14 ml-3'>
          탈퇴
        </button>
      </td>
    </tr>
  );
};

export default MemberList;
