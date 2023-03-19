import { useState, useEffect, Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SelectBox from './SelectBox';
import { RootState } from '@src/store/store';
import { getCategoryDistrict, getStadiumList, getSearchPostList } from '@src/api/request';
import { savePost } from '@src/store/postSlice';

const Searchbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const catagorySelect = useSelector<RootState>((state) => {
    return state.category.catagorySelect;
  });
  const districtSelect = useSelector<RootState>((state) => {
    return state.category.districtSelect;
  });
  const stadiumSelect = useSelector<RootState>((state) => {
    return state.category.stadiumSelect;
  });

  const [categoryList, setCategoryList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [stadiumList, setStadiumList] = useState([]);

  useEffect(() => {
    const getCategoryList = async () => {
      const res = await getCategoryDistrict('category');
      setCategoryList(res);
    };

    getCategoryList();
  }, []);

  useEffect(() => {
    if (catagorySelect) {
      const getDistrict = async () => {
        const res = await getCategoryDistrict('district');
        setDistrictList(res);
      };
      getDistrict();
    }
  }, [catagorySelect]);

  useEffect(() => {
    if (districtSelect) {
      const getStadium = async () => {
        const res = await getStadiumList(catagorySelect as string, districtSelect as string);
        setStadiumList(res);
      };
      getStadium();
    }
  }, [districtSelect]);

  const selectSearch = async () => {
    if (!catagorySelect) return console.log('카테고리 선택해주세요.')
    const res = await getSearchPostList(catagorySelect as string, districtSelect as string, stadiumSelect as string, 1)
    dispatch(savePost([catagorySelect, districtSelect, stadiumSelect, res]))
    navigate('/board')
  }

  return (
    <section className='flex my-[20px] justify-center gap-[10px] items-center flex-wrap'>
      <div className='flex gap-[5px] flex-col mm:flex-row'>
        <div className='flex gap-[5px]'>
          <SelectBox id='category' defaultValue='종목' size='w-1/2' options={categoryList} />
          <SelectBox
            id='district'
            defaultValue='지역 전체'
            size='w-1/2'
            options={catagorySelect ? districtList : []}
          />
        </div>
        <SelectBox
          id='stadium'
          defaultValue='구장 전체'
          size='w-[240px]'
          options={districtSelect ? stadiumList : []}
        />
      </div>

      <div className='flex gap-[5px] h-[40px]'>
        <button
          type='submit'
          className='rounded-lg bg-field hover:bg-hoverField text-white text p-3 text-sm'
          onClick={() => selectSearch()}
        >
          검색
        </button>
        <button
          onClick={() => navigate('/posting')}
          className='p-3 rounded-lg bg-field hover:bg-hoverField text-white text-sm'
        >
          양도하기
        </button>
      </div>
    </section>
  );
};

export default Searchbar;
