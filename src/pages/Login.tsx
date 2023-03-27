import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '@src/api/request';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { SET_AUTH } from '@src/store/authSlice';
import { SET_USER, DELETE_USER } from '@src/store/userSlice';
import Modal from '@src/components/Modal';
import type { modalPropsType } from '@src/components/Modal';

const Login = () => {
  const formSchema = z
    .object({
      email: z
        .string()
        .email({ message: '이메일을 작성해 주세요.' })
        .min(1, { message: '이메일을 작성해 주세요.' }),
      password: z
        .string()
        .min(6, { message: '비밀번호는 6자 이상 16자 이하로 작성해야 합니다.' })
        .max(16, { message: '비밀번호는 6자 이상 16자 이하로 작성해야 합니다.' })
        .regex(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/, '숫자 혹은 문자로만 구성되어야 합니다'),
    })
    .required();

  type FormSchmaType = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchmaType>({ mode: 'onChange', resolver: zodResolver(formSchema) });

  const [confirmModal, setComfirmModal] = useState(false);
  const [authMessage, setAuthMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const authState = useSelector(state => state.auth);

  const onSubmit: SubmitHandler<FormSchmaType> = async (data) => {
    const { ok, code, authData } = await userLogin(data);
    // console.log(authData);
    if (ok && code === 200) {
      console.log(authData);
      dispatch(SET_AUTH(true));
      navigate('/');
      console.log(authData.data);
      dispatch(SET_USER(authData.data));
      // setAuthMessage(authData.message);
      // setComfirmModal(true);
    } else {
      console.log('ok : ', ok, ', code : ', code, ', authData.message : ', authData.message);
      // 로그인에 실패하였습니다 모달창 띄우기
      setAuthMessage(authData.message);
      setComfirmModal(true);
    }
  };

  return (
    <div className='m-auto max-w-5xl pt-[10vh] bg-white'>
      <div className='w-[400px] m-auto'>
        <h1 className='text-3xl text-center mb-14'>로그인</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='bg-white border mb-4'>
            <label className='block text-gray-900 text-sm font-bold mb-2' htmlFor='username'>
              이메일
            </label>
            <input
              type='text'
              placeholder='이메일을 입력하세요'
              required
              className='w-full h-14 px-2 text-[14px] rounded-[10px] bg-white border appearance-none focus:outline-none autofill:valid:bg-white focus:border-field valid:border-field'
              {...register('email')}
            />
            {errors.email && <p className='text-xs text-red-600 py-3'>{errors.email.message}</p>}
          </div>
          <div className='bg-white border mb-4'>
            <label className='block text-gray-900 text-sm font-bold mb-2' htmlFor='password'>
              비밀번호
            </label>
            <input
              type='password'
              placeholder='비밀번호를 입력하세요'
              required
              className='w-full h-14 px-2 text-[14px] rounded-[10px] bg-white border appearance-none focus:outline-none autofill:valid:bg-white focus:border-field valid:border-field'
              {...register('password')}
            />
            {errors.password && (
              <p className='text-xs text-red-600 py-3'>{errors.password.message}</p>
            )}
          </div>
          <div className='flex justify-between mb-10'>
            <Link to='/findaccount' className='text-gray-400 hover:text-field'>
              비밀번호 찾기
            </Link>
            <Link to='/join' className='text-gray-400 hover:text-field'>
              회원가입
            </Link>
          </div>
          <button
            type='submit'
            className='w-full h-14 rounded-[10px] bg-field text-white font-bold hover:bg-hoverfield'
          >
            로그인
          </button>
        </form>
      </div>
      <>
        {confirmModal && (
          <Modal
            title={authMessage}
            description={authMessage}
            onConfirm={() => setComfirmModal(false)}
            // onConcel={() => navigate('/')}
          />
        )}
      </>
    </div>
  );
};

export default Login;
