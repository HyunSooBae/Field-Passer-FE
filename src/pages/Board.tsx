import { useSelector } from 'react-redux';
import Searchbar from '../components/home/search/Searchbar';
import PostList from '../components/PostList';
import { RootState } from '@src/store/store';
import { PostType } from './../util/userPageTypes';

const Board = () => {
  const postData = useSelector<RootState>((state) => {
    return state.post.postData;
  });

  return (
    <div className='px-[20px]'>
      <Searchbar />
      <PostList data={postData as PostType[]} />
    </div>
  );
};

export default Board;
