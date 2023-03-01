import PostList from './PostList';
import { postType } from '@src/util/adminPageTypes';

const PostsLists = (props: { posts: postType[] }) => {
  return (
    <table className='table-auto w-full text-sm mt-3 rounded-[10px] overflow-hidden bg-field border border-solid border-field'>
      <thead className='text-sm text-field bg-tableBg text-bold'>
        <tr>
          <th scope='col' className='px-6 py-4 text-left'>
            #
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            필드 종류
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            지역
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            구장
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            게시글 제목
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            작성 시간
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            작성자
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            양도 현황
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            관리
          </th>
        </tr>
      </thead>
      <tbody>
        {props.posts
          ? props.posts?.map((post) => <PostList key={post.postId} item={post} />)
          : null}
      </tbody>
    </table>
  );
};

export default PostsLists;
