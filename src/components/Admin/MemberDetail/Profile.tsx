import { memberType } from '@src/util/adminPageTypes';
import { memberPromoted } from '@src/api/request';

type Props = {
  item: memberType;
};

const Profile = ({ item }: Props) => {
  const promoteHandler = async () => {
    const { ok, resultData } = await memberPromoted(item.email);
    if (resultData === 'success') {
      alert('관리자로 지정하였습니다.');
    }
  };
  return (
    <div className='mt-[60px]'>
      {item ? (
        <div className='relative m-10'>
          <div className='flex items-center gap-7'>
            <img
              src='https://t1.daumcdn.net/cfile/tistory/99826F4F5AE770D521'
              alt=''
              className='w-[150px] h-[150px] rounded-full'
            />
            <div>
              <h3 className='font-bold text-field'>{item.memberName}</h3>
              <div className='flex flex-col gap-2 mt-[10px] font-light text-sm'>
                <span>이메일: {item.email}</span>
                <span>회원 등급: {item.privilege}</span>
                <span>가입일: {item.signUpDate}</span>
                <span>방문 횟수: {item.visitCount}</span>
              </div>
            </div>
          </div>
          <div className='absolute right-0 top-0'>
            {item.privilege === '관리자' ? null : (
              <button
                onClick={promoteHandler}
                className='bg-field rounded-lg text-white hover:bg-hoverField h-10 w-24'
              >
                관리자 권한
              </button>
            )}
            <button className='bg-field rounded-lg text-white hover:bg-hoverField h-10 w-16 ml-3'>
              탈퇴
            </button>
          </div>
        </div>
      ) : (
        <p>해당 회원을 찾을 수 없습니다.</p>
      )}
    </div>
  );
};

export default Profile;
