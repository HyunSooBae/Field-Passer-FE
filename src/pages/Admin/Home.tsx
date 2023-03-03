import Charts from '../../components/Admin/Main/Charts';
import NewPosts from '../../components/Admin/Main/NewPosts';
import NewQuestions from '../../components/Admin/Main/NewQuestions';

const Home = () => {
  return (
    <div className='max-w-[1520px] h-screen grid-in-main p-10'>
      <div className='relative w-full top-[250px]'>
        <Charts />
        <div className='flex gap-3 mx-8 mt-8'>
          <NewPosts />
          <NewQuestions />
        </div>
      </div>
    </div>
  );
};

export default Home;
