import { useState, useEffect } from 'react';
import Charts from '@src/components/Admin/Main/Charts';
import NewPosts from '@src/components/Admin/Main/NewPosts';
import NewQuestions from '@src/components/Admin/Main/NewQuestions';
import { getNewMember, getNewPosts, getVisitMember } from '@src/api/request';
import { endDate, startDate } from '@src/util/dateCalc';

const Home = () => {
  const [newMember, setNewMember] = useState([]);
  const [newPosts, setNewPosts] = useState([]);
  const [visitMember, setVisitMember] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { ok, newMemberData } = await getNewMember(startDate(), endDate());
      const { newPostsData } = await getNewPosts(startDate(), endDate());
      const { visitMemberData } = await getVisitMember(startDate(), endDate());
      if (ok) {
        setNewMember(newMemberData.resultData);
        setNewPosts(newPostsData.resultData);
        setVisitMember(visitMemberData.resultData);
      }
    };
    fetchData();
  }, []);
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
