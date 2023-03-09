import React, { useState, useEffect } from 'react';
import { join } from '@src/api/request';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { IoIosCloseCircle } from 'react-icons/io';

const Join2 = () => {
  const [imgFile, setImgeFile] = useState('');
  const onFileChange = (event) => {
    const {
      target: { files },
    } = event;
    const theFile = files[0];
    if (theFile.size > 1024 * 1024) return;
    const reader = new FileReader();
    reader.onloadend = (finishedEvent) => {
      const {
        currentTarget: { result },
      } = finishedEvent;
      setImgeFile(result);
    };
    reader.readAsDataURL(theFile);
  };
  useEffect(() => {
    console.log(imgFile);
  }, [imgFile]);
  const formSchema = z
    .object({
      email: z
        .string()
        .email({ message: '이메일 양식에 맞게 작성해 주세요.' })
        .min(1, { message: '이메일 양식에 맞게 작성해 주세요.' }),
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
        // .union([z.any(), z.instanceof(File).optional()])
        .refine((files) => files.size > 1024 * 1024, {
          message: '파일 용량은 최대 1MB까지 가능합니다.',
        }),
    })
    .partial({
      profileImg: true,
    })
    .refine((data) => data.password === data.passwordCheck, {
      message: '비밀번호가 일치하지 않습니다.',
      path: ['passwordCheck'],
    });

  type formSchema = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formSchema>({ resolver: zodResolver(formSchema) });

  const onSubmit: SubmitHandler<formSchema> = async (data) => {
    const { ok, authData } = await join(data);
    console.log(authData);
  };
  return (
    <div className='m-auto max-w-5xl pt-[10vh] mb-40 bg-white'>
      <div className='w-[400px] m-auto'>
        <h1 className='text-3xl text-center mb-14'>회원가입</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='bg-white border mb-4'>
            <label htmlFor='username' className='block text-gray-900 text-sm font-bold mb-2'>
              이메일
            </label>
            <input
              type='text'
              placeholder='이메일을 입력하세요.'
              required
              className='w-full h-14 px-2 text-[14px] rounded-[10px] bg-white border appearance-none focus:outline-none autofill:valid:bg-white focus:border-field valid:border-field'
              {...register('email')}
            />
            {errors.email && <p className='text-xs text-red-600 py-3'>{errors.email.message}</p>}
          </div>
          <div className='bg-white border mb-4'>
            <label htmlFor='password' className='block text-gray-900 text-sm font-bold mb-2'>
              비밀번호
            </label>
            <input
              type='password'
              placeholder='비밀번호를 입력하세요.'
              required
              className='w-full h-14 px-2 text-[14px] rounded-[10px] bg-white border appearance-none focus:outline-none autofill:valid:bg-white focus:border-field valid:border-field'
              {...register('password')}
            />
            {errors.password && (
              <p className='text-xs text-red-600 py-3'>{errors.password.message}</p>
            )}
          </div>
          <div className='bg-white border mb-4'>
            <label htmlFor='password' className='block text-gray-900 text-sm font-bold mb-2'>
              비밀번호 확인
            </label>
            <input
              type='password'
              placeholder='비밀번호를 다시 입력해 주세요.'
              required
              className='w-full h-14 px-2 text-[14px] rounded-[10px] bg-white border appearance-none focus:outline-none autofill:valid:bg-white focus:border-field valid:border-field'
              {...register('passwordCheck')}
            />
            {errors.passwordCheck && (
              <p className='text-xs text-red-600 py-3'>{errors.passwordCheck.message}</p>
            )}
          </div>
          <div className='bg-white border mb-4'>
            <label htmlFor='username' className='block text-gray-900 text-sm font-bold mb-2'>
              닉네임
            </label>
            <input
              type='text'
              placeholder='닉네임을 입력하세요.'
              required
              className='w-full h-14 px-2 text-[14px] rounded-[10px] bg-white border appearance-none focus:outline-none autofill:valid:bg-white focus:border-field valid:border-field'
              {...register('memberName')}
            />
            {errors.memberName && (
              <p className='text-xs text-red-600 py-3'>{errors.memberName.message}</p>
            )}
          </div>
          <div className='bg-white border'>
            <h4 className='block text-gray-900 text-sm font-bold mb-2'>프로필 사진 (선택)</h4>
            <div className='flex justify-center gap-3 my-5'>
              <label
                htmlFor='imgFile'
                className='w-fit p-1.5 rounded-[10px] border border-solid border-field text-gray-400'
              >
                사진 선택
              </label>
              <input
                type='file'
                id='imgFile'
                accept='image/*'
                className='hidden'
                {...register('profileImg', { onChange: onFileChange })}
              />
              {errors.profileImg && (
                <p className='text-xs text-red-600 py-3'>{errors.profileImg.message}</p>
              )}
              {imgFile && (
                <div>
                  <img
                    src={imgFile}
                    alt='thumnail'
                    className='w-[100px] h-[100px] rounded-lg border border-solid border-gray-300 object-cover'
                  />
                  <div>
                    <button
                      type='button'
                      className='absolute right-[-10px] top-[-10px] rounded-full'
                    >
                      <IoIosCloseCircle size='30' color='gray'></IoIosCloseCircle>
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
          <button
            type='submit'
            className='w-full h-14 rounded-[10px] bg-field text-white font-bold hover:bg-hoverField'
          >
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join2;
