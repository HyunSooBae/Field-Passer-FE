import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import Datepicker from 'tailwind-datepicker-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { submitPost } from '@src/api/request';
import { IoIosCloseCircle } from 'react-icons/io';

const BoardForm = () => {
  const imgfile: any = useRef(null);
  const navigate = useNavigate();
  const MAX_FILE_SIZE = 10485760;
  const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
  const formSchema = z
    .object({
      categoryName: z.string(),
      districtName: z.string(),
      stadiumName: z.string(),
      title: z.string().min(2, { message: '제목을 2자 이상 입력해주세요.' }),
      price: z
        .string()
        .min(1, { message: '양도할 가격을 입력해주세요.' })
        .refine((val) => !Number.isNaN(parseInt(val, 10))),
      content: z.string().min(5, { message: '상세 내용을 5글자 이상 입력해주세요.' }),
      date: z.string(),
      startTime: z.string(),
      endTime: z.string(),
      file: z
        .any()
        // .default(null)
        .refine((file) => file !== null, {
          message: '.jpg, .jpeg, .png, gif 형식에 맞는 파일을 업로드해주세요.',
        })
        .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type), {
          message: '.jpg, .jpeg, .png, gif 형식에 맞는 파일을 업로드해주세요.',
        })
        .refine((file) => file?.[0]?.size <= MAX_FILE_SIZE, {
          message: `파일 용량은 최대 10MB까지 가능합니다.`,
        }),
    })
    .required();
  type FormSchmaType = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormSchmaType>({ mode: 'onChange', resolver: zodResolver(formSchema) });

  //datepicker options
  const options = {
    title: '예약 일자',
    autoHide: true,
    maxDate: new Date('2050-01-01'),
    minDate: new Date('2000-01-01'),
    theme: {
      background: 'bg-white',
      todayBtn: 'bg-field hover:bg-field',
      clearBtn: '',
      icons: '',
      text: 'text-gray-700',
      disabledText: 'font-normal text-gray-500',
      input: 'cursor-pointer w-full rounded bg-white :focus:border-field:',
      inputIcon: '',
      selected: 'text-white bg-field hover:bg-field',
    },
    icons: {
      prev: () => <span>{'<'}</span>,
      next: () => <span>{'>'}</span>,
    },
    datepickerClassNames: '-top-[450px]',
    defaultDate: new Date(),
    language: 'ko',
  };

  // Datepicker component
  const FormDatepicker = () => {
    const [show, setShow] = useState(false);
    const handleChange = (selectedDate: any) => {
      // api 완성되면 사용할 함수
    };
    const handleClose = (state: any) => {
      setShow(state);
    };

    return (
      <div className=' w-[calc(50%-10px)] mr-5'>
        <Datepicker
          options={options}
          onChange={handleChange}
          show={show}
          setShow={handleClose}
          classNames='relative'
        />
      </div>
    );
  };

  // 업로드 이미지 미리보기
  const [imgPreview, setImgPreview] = useState('');
  const imgFile = watch('file');
  useEffect(() => {
    if (imgFile && imgFile.length > 0) {
      const file = imgFile[0];
      setImgPreview(URL.createObjectURL(file));
    }
  }, [imgFile]);

  const removeImg = () => {
    setImgPreview('');
    reset({ file: null });
  };

  const preview = (input: any) => {
    if (input.target.files && input.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e: any) => {
        imgfile.current.src = e.target.result;
      };
      reader.readAsDataURL(input.target.files[0]);
    }
  };

  const onSubmit: SubmitHandler<FormSchmaType> = async (data) => {
    const {
      categoryName,
      districtName,
      stadiumName,
      title,
      price,
      content,
      date,
      startTime,
      endTime,
      file,
    } = data;

    const formData = new FormData();
    formData.append('categoryName', categoryName);
    formData.append('districtName', districtName);
    formData.append('stadiumName', stadiumName);
    formData.append('title', title);
    formData.append('price', String(price));
    formData.append('content', content);
    formData.append('startTime', `${date}T${startTime}`);
    formData.append('endTime', `${date}T${endTime}`);

    const blob = new Blob([JSON.stringify(file)], {
      type: 'application/json',
    });
    formData.append('file', file[0]);

    console.log(formData.get('districtName'));

    let entries = formData.entries();
    for (const pair of entries) {
      console.log(pair[0] + ', ' + pair[1]);
    }

    // const response = await submitPost(formData);
    // console.log(response);
    // navigate('/')
  };

  return (
    <div className='my-[50px] mx-auto px-[20px] mm:px-0'>
      <form
        onSubmit={handleSubmit((data) => onSubmit(data))}
        className='w-full max-w-[600px] ml-auto mr-auto mt-0 mb-0 flex flex-col gap-[10px] mm:gap-[20px]'
      >
        <div className='flex gap-3'>
          <select
            name=''
            id=''
            className='w-24 h-8 border-2 border-solid border-#94a3b8 rounded-md text-sm pl-2 focus:outline-none focus:border-field '
          >
            <option value=''>종목</option>
          </select>
          <select
            name=''
            id=''
            className='w-24 h-8 border-2 border-solid border-#94a3b8 rounded-md text-sm pl-2 focus:outline-none focus:border-field '
          >
            <option value=''>지역</option>
          </select>
          <select
            name=''
            id=''
            className='w-48 h-8 border-2 border-solid border-#94a3b8 rounded-md text-sm pl-2 focus:outline-none focus:border-field '
          >
            <option value=''>구장</option>
          </select>
        </div>
        <div className='flex flex-col gap-[10px] mm:gap-[20px]'>
          <input
            type='text'
            placeholder='제목'
            className='h-10 rounded text-sm border-#94a3b8 border-solid border-2 px-3 focus:outline-none focus:border-field'
            {...register('title')}
          />
          {errors.title && <p className='text-xs text-red-600'>{errors.title.message}</p>}
          <input
            type='number'
            placeholder='가격 입력'
            className='h-10 rounded text-sm border-#94a3b8 border-solid border-2 px-3 focus:outline-none focus:border-field'
            {...register('price')}
          />
          {errors.price && <p className='text-xs text-red-600'>{errors.price.message}</p>}
          <textarea
            placeholder='내용 입력'
            className='resize-none rounded text-sm border-#94a3b8 border-solid border-2 px-3 pt-3 h-96 focus:outline-none focus:border-field'
            {...register('content')}
          ></textarea>
          {errors.content && <p className='text-xs text-red-600'>{errors.content.message}</p>}
        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-xs text-gray-600'>예약 일시</p>
          <FormDatepicker />
          <div className='flex'>
            <input
              type='time'
              className='form-control block  px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none
                            focus:border-field cursor-pointer'
              placeholder='Select a date'
              {...register('startTime')}
            />
            <div className='mr-3 py-2 px-1'>부터</div>
            <input
              type='time'
              className='form-control block px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none
              focus:border-field cursor-pointer'
              placeholder='Select a date'
              {...register('endTime')}
            />
            <div className='mr-3 py-2 px-1'>까지</div>
          </div>
          {errors.startTime && <p className='text-xs text-red-600'>{errors.startTime.message}</p>}
          {errors.endTime && <p className='text-xs text-red-600'>{errors.endTime.message}</p>}
        </div>
        <div>
          <p className='text-xs text-gray-600 mb-[10px]'>예약 인증 사진</p>
          <div className='flex gap-[10px]'>
            <label
              htmlFor='img'
              className='block w-[100px] h-[100px] border-solid border rounded-lg cursor-pointer border-[#ddd] bg-[url("/images/cam.png")] bg-center bg-[length:60px] bg-no-repeat'
            />
            <input
              id='img'
              type='file'
              className='hidden'
              accept='image/gif,image/jpeg,image/png'
              {...register('file')}
              onChange={(e) => preview(e)}
            />

            <img
              src=''
              alt='미리보기 이미지'
              className='w-[100px] h-[100px] rounded-lg border border-solid border-gray-300'
              ref={imgfile}
            />
            {/* <div>
              <div className='flex gap-[10px] relative'>
                <input
                  id='file'
                  type='file'
                  multiple
                  // required
                  className='hidden'
                  accept='image/gif,image/jpeg,image/png'
                  // onChange={imgPreview}
                  {...register('file')}
                  // ref={imgRef}
                  name='file'
                />
                {errors.file && <p className='text-xs text-red-600 py-3'>{errors.file.message}</p>}
                {imgPreview && !errors.file ? (
                  <>
                    <img
                      src={imgPreview}
                      alt='미리보기 이미지'
                      className='w-[100px] h-[100px] rounded-lg border border-solid border-gray-300 object-cover'
                    />
                    <button
                      type='button'
                      className='absolute right-[-10px] top-[-10px] rounded-full'
                      onClick={() => removeImg()}
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
            </div> */}
          </div>
        </div>

        <button
          type='submit'
          className='text-sm px-2 py-2 border-solid rounded mx-auto w-[50px] bg-field text-white mt-[20px]'
        >
          작성
        </button>
      </form>
    </div>
  );
};

export default BoardForm;
