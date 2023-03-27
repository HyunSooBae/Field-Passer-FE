import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SelectBox from './SelectBox';
import { RootState } from '@src/store/store';
import { getCategoryDistrict, getStadiumList, getSearchPostList } from '@src/api/request';
import { savePost } from '@src/store/postSlice';
import { unselected } from '@src/store/categorySlice';

const Searchbar = () => {
  let link = document.location.pathname;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 카테고리 선택 값
  const catagorySelect = useSelector((state: RootState) => {
    return state.category.catagorySelect;
  });
  const districtSelect = useSelector((state: RootState) => {
    return state.category.districtSelect;
  });
  const stadiumSelect = useSelector((state: RootState) => {
    return state.category.stadiumSelect;
  });

  // 카테고리 리스트 
  const [categoryList, setCategoryList] = useState([]);
  const [districtList, setDistrictList] = useState([]);
  const [stadiumList, setStadiumList] = useState([]);

  // 홈 화면 카테고리 선택 초기화
  useEffect(() => {
    if (link === '/') dispatch(unselected('all'));
  }, []);

  // 카테고리 종목,구역 리스트 api 호출
  useEffect(() => {
    const getCategoryDistrictList = async () => {
      const categoryRes = await getCategoryDistrict('category');
      setCategoryList(categoryRes)

      const districtRes = await getCategoryDistrict('district');
      setDistrictList(districtRes);
    };
    getCategoryDistrictList()
  }, []);

  // 구장 리스트 api 호출
  useEffect(() => {
    if (districtSelect) {
      const getStadium = async () => {
        const res = await getStadiumList(catagorySelect as string, districtSelect as string);
        setStadiumList(res);
      };
      getStadium();
    }
  }, [districtSelect]);

  // 검색 버튼 함수
  const selectSearch = async () => {
    const res = await getSearchPostList(catagorySelect, districtSelect, stadiumSelect, 1);
    dispatch(savePost([catagorySelect, districtSelect, stadiumSelect, res]));
    if (link !== '/board') dispatch(unselected('all'));
    navigate('/board');
  };


  return (
    <section className='flex my-[20px] justify-center gap-[10px] items-center flex-wrap max-w-full'>
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
          onClick={() => {
            dispatch(unselected('all'));
            navigate('/posting')
          }}
          className='p-3 rounded-lg bg-field hover:bg-hoverField text-white text-sm'
        >
          양도하기
        </button>
      </div>
    </section>
  );
};

export default Searchbar;
