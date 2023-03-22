import React, { useState, useEffect } from 'react';
import { getCategoryDistrict, getStadiumList, submitPost } from '@src/api/request';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useForm, FieldValues } from 'react-hook-form';
import DatePicker from 'tailwind-datepicker-react';
import { zodResolver } from '@hookform/resolvers/zod';
import SelectBox from '@src/components/boardForm/SelectBox';

const Test = () => {
  const [categoryList, setCategoryList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [stadiumList, setStadiumList] = useState([]);
  const [category, setCategory] = useState('');
  const [district, setDistrict] = useState('');
  const [stadium, setStadium] = useState('');

  // 카테고리 리스트 부르기
  useEffect(() => {
    const getCategoryList = async () => {
      const res = await getCategoryDistrict('category');
      setCategoryList(res);
    };

    getCategoryList();
  }, []);

  useEffect(() => {
    if (category) {
      const getDistrict = async () => {
        const res = await getCategoryDistrict('district');
        setDistrictList(res);
      };
      getDistrict();
    }
  }, [category]);

  useEffect(() => {
    if (district) {
      const getStadium = async () => {
        const res = await getStadiumList(category as string, district as string);
        setStadiumList(res);
      };
      getStadium();
    }
  }, [district]);

  useEffect(() => {
    setStadium(stadium as string);
  }, [stadium]);

  //datepicker
  const [show, setShow] = useState(false);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const handleChange = (selectedDate: Date) => {
    setDate(selectedDate.toISOString().slice(0, 10));
  };
  const handleClose = (state: any) => {
    setShow(state);
  };
  const options = {
    title: '예약 일자',
    autoHide: true,
    maxDate: new Date('2050-01-01'),
    minDate: new Date(),
    defaultDate: new Date(),
    theme: {
      background: 'bg-white',
      todayBtn: 'bg-field hover:bg-field',
      clearBtn: '',
      icons: '',
      text: 'text-gray-700',
      disabledText: 'foyyyy text-gray-500',
      input: 'cursor-pointer w-full rounded bg-white :focus:border-field:',
      inputIcon: '',
      selected: 'text-white bg-field hover:bg-field',
    },
    icons: {
      prev: () => <span>{'<'}</span>,
      next: () => <span>{'>'}</span>,
    },
    datepickerClassNames: '-top-[450px]',
    language: 'ko',
  };

  const formSchema = z.object({
    categoryName: z.string(),
    districtName: z.string(),
    stadiumName: z.string(),
    title: z.string().min(2, { message: '제목을 2자 이상 입력해주세요.' }),
    price: z
      .string()
      .min(1, { message: '양도할 가격을 입력해주세요.' })
      .refine((val) => !Number.isNaN(parseInt(val, 10))),
    content: z.string().min(5, { message: '상세 내용을 5글자 이상 입력해주세요.' }),
    startTime: z.string(),
    endTime: z.string(),
    file: z.any(),
  });
  // .required();
  type FormSchmaType = z.infer<typeof formSchema>;

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchmaType>({ resolver: zodResolver(formSchema) });

  const imgFile = watch('file');
  const onSubmit = async (data: FieldValues) => {
    const {
      categoryName,
      districtName,
      stadiumName,
      title,
      price,
      content,
      startTime,
      endTime,
      file,
    } = data;
    console.log(data);
    const formData = new FormData();
    formData.append('memberId', '2');
    formData.append('categoryName', categoryName);
    formData.append('districtName', districtName);
    formData.append('stadiumName', stadiumName);
    formData.append('title', title);
    formData.append('content', content);
    formData.append('startTime', date + 'T' + startTime + ':00');
    formData.append('endTime', date + 'T' + endTime + ':00');
    formData.append('file', file[0]);
    formData.append('transactionStatus', '판매중');
    formData.append('price', price);

    let entries = formData.entries();
    for (const pair of entries) {
      console.log(pair[0] + ', ' + pair[1]);
    }
    try {
      const response = await submitPost(formData);
      console.log(response);
      // window.confirm('게시글 작성이 완료되었습니다. 메인으로 이동하시겠습니까?')
      //   ? navigate('/')
      //   : null;
    } catch (err) {
      console.log(err);
    }
  };
  const [imgPreview, setImgPreview] = useState('');

  useEffect(() => {
    if (imgFile && imgFile.length > 0) {
      const file = imgFile[0];
      setImgPreview(URL.createObjectURL(file));
    }
  }, [imgFile]);

  return (
    <div className='my-[50px] mx-auto px-[20px] mm:px-0'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='w-full max-w-[600px] ml-auto mr-auto mt-0 mb-0 flex flex-col gap-[10px] mm:gap-[20px]'
      >
        <div className='flex gap-[5px]'>
          <SelectBox
            id='category'
            defaultValue='종목'
            size='w-1/4'
            options={categoryList}
            register={register}
            type='categoryName'
            setList={setCategory}
          />
          <SelectBox
            id='district'
            defaultValue='지역 전체'
            size='w-1/4'
            options={category ? districtList : []}
            register={register}
            type='districtName'
            setList={setDistrict}
          />
          <SelectBox
            id='stadium'
            defaultValue='구장 전체'
            size='w-1/2'
            options={district ? stadiumList : []}
            register={register}
            type='stadiumName'
            setList={setStadium}
          />
        </div>
        <div className='flex flex-col gap-[10px] mm:gap-[20px]'>
          <input
            type='text'
            placeholder='제목'
            className='h-10 rounded text-sm border-#94a3b8 border-solid border-2 px-3 focus:outline-none focus:border-field'
            {...register('title')}
          />
          <input
            type='number'
            placeholder='가격 입력'
            className='h-10 rounded text-sm border-#94a3b8 border-solid border-2 px-3 focus:outline-none focus:border-field'
            {...register('price')}
          />
          <textarea
            placeholder='내용 입력'
            className='resize-none rounded text-sm border-#94a3b8 border-solid border-2 px-3 pt-3 h-96 focus:outline-none focus:border-field'
            {...register('content')}
          ></textarea>
        </div>
        <div className='flex flex-col gap-3'>
          <p className='text-xs text-gray-600'>예약 일시</p>

          <div className=' w-[calc(50%-10px)] mr-5'>
            <DatePicker
              options={options}
              onChange={(date) => handleChange(date)}
              show={show}
              setShow={handleClose}
              classNames='relative'
            />
          </div>

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
            />
            <img
              src={imgPreview}
              alt='미리보기 이미지'
              className='w-[100px] h-[100px] rounded-lg border border-solid border-gray-300'
            />
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

export default Test;
