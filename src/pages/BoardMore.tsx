import { useSelector } from 'react-redux';
import Searchbar from '../components/home/search/Searchbar';
import PostList from '../components/PostList';
import { RootState } from '@src/store/store';

const BoardMore = () => {
  const postMoreData = useSelector((state: RootState) => {
    return state.post.postMoreData;
  });

  return (
    <div className='px-[20px]'>
      <Searchbar />
      <PostList data={postMoreData} />
    </div>
  );
};

export default BoardMore;
