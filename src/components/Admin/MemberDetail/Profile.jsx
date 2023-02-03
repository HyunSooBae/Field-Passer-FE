import React, { useState, useEffect } from 'react';
import requestAPI from '../../../api/axios';

const Profile = () => {
  const [member, setMember] = useState([]);
  useEffect(() => {
    async function getMember() {
      const data = await requestAPI('membersList');
      setMember(data?.data?.resultData[0]);
    }
    getMember();
  }, []);

  console.log(member);
  return (
    <div className='mt-[60px]'>
      {member ? (
        <div className='relative m-10'>
          <div className='flex items-center gap-7'>
            <img
              src='https://t1.daumcdn.net/cfile/tistory/99826F4F5AE770D521'
              alt=''
              className='w-[150px] h-[150px] rounded-full'
            />
            <div>
              <h3 className='font-bold text-field'>{member.memberName}</h3>
              <div className='flex flex-col gap-2 mt-[10px] font-light text-sm'>
                <span>이메일: {member.email}</span>
                <span>회원 등급: {member.privilege}</span>
                <span>가입일: {member.signUpDate}</span>
                <span>누적 신고: {member.reportsNum}</span>
              </div>
            </div>
          </div>
          <div className='absolute right-0 top-0'>
            <button className='bg-field rounded-lg text-white hover:bg-hoverField h-10 w-24'>
              관리자 권한
            </button>
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
