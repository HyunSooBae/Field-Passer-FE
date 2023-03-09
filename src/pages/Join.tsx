import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { join } from '@src/api/request';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm, useFormContext, SubmitHandler } from 'react-hook-form';
import ConfirmModal from '@src/components/ui/Modal';
import { IoIosCloseCircle } from 'react-icons/io';

const Join = () => {
  const [confirmModal, setConfirmModal] = useState(false);
  const navigate = useNavigate();
  const MAX_FILE_SIZE = 1048576;
  const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
  const formSchema = z
    .object({
      email: z
        .string()
        .email({ message: '이메일을 양식에 맞게 작성해 주세요.' })
        .min(1, { message: '이메일을 양식에 맞게 작성해 주세요.' }),
      password: z
        .string()
        .min(6, { message: '비밀번호는 6자 이상 16자 이하로 작성해야 합니다.' })
        .max(16, { message: '비밀번호는 6자 이상 16자 이하로 작성해야 합니다.' })
        .regex(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/, '숫자 혹은 문자로만 구성되어야 합니다'),
      passwordCheck: z
        .string()
        .min(6, { message: '비밀번호는 6자 이상 16자 이하로 작성해야 합니다.' })
        .max(16, { message: '비밀번호는 6자 이상 16자 이하로 작성해야 합니다.' })
        .regex(/^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$/, '숫자 혹은 문자로만 구성되어야 합니다'),
      memberName: z
        .string()
        .min(1, { message: '최대 10글자 이내로 작성해주세요.' })
        .max(10, { message: '최대 10글자 이내로 작성해주세요.' }),
      profileImg: z
        .any()
        .default(null)
        .refine((file) => file !== null, {
          message: '.jpg, .jpeg, .png, gif 형식에 맞는 파일을 업로드해주세요.',
        })
        .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type), {
          message: '.jpg, .jpeg, .png, gif 형식에 맞는 파일을 업로드해주세요.',
        })
        .refine((file) => file?.[0]?.size <= MAX_FILE_SIZE, {
          message: `파일 용량은 최대 1MB까지 가능합니다.`,
        }),
      // .optional(),
    })
    .required()
    // .partial()
    .refine((data) => data.password === data.passwordCheck, {
      message: '비밀번호가 일치하지 않습니다.',
      path: ['passwordCheck'],
    });
  type formSchema = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<formSchema>({ mode: 'onChange', resolver: zodResolver(formSchema) });

  const onSubmit: SubmitHandler<formSchema> = async (data) => {
    console.log(watch(data.profileImg));
    const { email, passwordCheck, memberName, profileImg } = data;
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', passwordCheck);
    formData.append('memberName', memberName);
    formData.append('profileImg', profileImg);
    // console.log(data);
    // const { ok, authData } = await join(formData);
    // console.log(authData);
    setConfirmModal(true);
    // let entries = formData.entries();
    // for (const pair of entries) {
    //   console.log(pair[0] + ', ' + pair[1]);
    // }
  };

  // const [imgFile, setImgFile] = useState('');
  // const imgRef: any = useRef('');

  const [avatarPreview, setAvatarPreview] = useState('');
  const avatar = watch('profileImg');
  useEffect(() => {
    if (avatar && avatar.length > 0) {
      const file = avatar[0];
      setAvatarPreview(URL.createObjectURL(file));
    }
  }, [avatar]);

  const removeProfileImg = () => {
    setAvatarPreview('');
    reset({ profileImg: null });
  };

  return (
    <div className='m-auto max-w-5xl pt-[10vh] mb-40 bg-white'>
      <div className='w-[400px] m-auto'>
        <h1 className='text-3xl text-center mb-14'>회원가입</h1>
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
          <div className='bg-white border mb-4'>
            <label className='block text-gray-900 text-sm font-bold mb-2' htmlFor='password'>
              비밀번호 확인
            </label>
            <input
              type='password'
              placeholder='비밀번호를 한번 더 입력하세요'
              required
              className='w-full h-14 px-2 text-[14px] rounded-[10px] bg-white border appearance-none focus:outline-none autofill:valid:bg-white focus:border-field valid:border-field'
              {...register('passwordCheck')}
            />
            {errors.passwordCheck && (
              <p className='text-xs text-red-600 py-3'>{errors.passwordCheck.message}</p>
            )}
          </div>
          <div className='bg-white border mb-4'>
            <label className='block text-gray-900 text-sm font-bold mb-2' htmlFor='password'>
              닉네임
            </label>
            <input
              type='text'
              placeholder='닉네임을 입력하세요'
              required
              className='w-full h-14 px-2 text-[14px] rounded-[10px] bg-white border appearance-none focus:outline-none autofill:valid:bg-white focus:border-field valid:border-field'
              {...register('memberName')}
            />
            {errors.memberName && (
              <p className='text-xs text-red-600 py-3'>{errors.memberName.message}</p>
            )}
          </div>
          <div className='bg-white border'>
            <h4 className='block text-gray-900 text-sm font-bold mb-2'>프로필 사진</h4>
            {/* <div className='w-1/3 border aspect-square bg-gray-100 m-auto'>
              <span className=''>이미지 미리보기</span>
            </div> */}
            <div className='flex justify-center gap-3 my-5'>
              {/* <label
                className='w-fit p-1.5 rounded-[10px] border border-solid border-field text-gray-400'
                htmlFor='imgFile'
              >
                사진 선택
              </label> */}

              <div>
                <div className='flex gap-[10px] relative'>
                  <input
                    id='images'
                    type='file'
                    // required
                    className='hidden'
                    accept='image/gif,image/jpeg,image/png'
                    // onChange={imgPreview}
                    {...register('profileImg')}
                    // ref={imgRef}
                  />
                  {/* {errors.profileImg && (
                    <p className='text-xs text-red-600 py-3'>{errors.profileImg.message}</p>
                  )} */}
                  {avatarPreview && !errors.profileImg ? (
                    <>
                      <img
                        src={avatarPreview}
                        alt='미리보기 이미지'
                        className='w-[100px] h-[100px] rounded-lg border border-solid border-gray-300 object-cover'
                      />
                      <button
                        type='button'
                        className='absolute right-[-10px] top-[-10px] rounded-full'
                        onClick={() => removeProfileImg()}
                      >
                        <IoIosCloseCircle size='30' color='gray'></IoIosCloseCircle>
                      </button>
                    </>
                  ) : (
                    <label
                      htmlFor='images'
                      className='block w-[100px] h-[100px] border-solid border rounded-lg cursor-pointer border-[#ddd] bg-[url("/images/cam.png")] bg-center bg-[length:60px] bg-no-repeat'
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <button
            type='submit'
            className='w-full h-14 rounded-[10px] bg-field text-white font-bold hover:bg-hoverfield'
          >
            회원가입
          </button>
        </form>
        {confirmModal && (
          <ConfirmModal
            title='회원가입이 완료되었습니다.'
            description='확인 버튼을 누르면 로그인 화면으로 이동합니다.'
            onConfirm={() => navigate('/login')}
            onCancel={() => {
              setConfirmModal(false), navigate('/');
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Join;
