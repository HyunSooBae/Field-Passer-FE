import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@src/store/store';
import { SET_AUTH } from '@src/store/authSlice';
import { logout } from '@src/api/request';
import { SET_USER, DELETE_USER } from '@src/store/userSlice';

const MembersMenu = () => {
  // if (로그인되지 않은 상태) {고객센터/회원가입/로그인}
  // else {고객센터/마이페이지/로그아웃}
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { authenticated } = useSelector((state: RootState) => state.auth);
  const { memberName } = useSelector((state: RootState) => state.user);

  const logoutHandler = async () => {
    const { ok, code, authData } = await logout();
    console.log(authData);
    console.log(memberName);
    if (ok && code === 200 && authData) {
      dispatch(SET_AUTH(false));
      dispatch(DELETE_USER());
      console.log(SET_USER);
      console.log(authenticated);
      console.log(memberName);
      navigate('/');
    }
  };

  return (
    <div className='h-10 flex justify-end items-center pr-8 text-sm text-hoverfield'>
      {authenticated ? <p>{memberName} 님 안녕하세요!</p> : ''}
      <Link to='/help' className='mx-8 hover:font-bold'>
        고객센터
      </Link>
      {authenticated ? (
        <Link to='/mypage' className='mr-8 hover:font-bold'>
          마이페이지
        </Link>
      ) : (
        <Link to='/join' className='mr-8 hover:font-bold'>
          회원가입
        </Link>
      )}
      {authenticated ? (
        <button className='hover:font-bold' onClick={logoutHandler}>
          로그아웃
        </button>
      ) : (
        <Link to='/login' className='hover:font-bold'>
          로그인
        </Link>
      )}
    </div>
  );
};

export default MembersMenu;
