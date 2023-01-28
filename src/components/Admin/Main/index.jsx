import React from 'react';
import Charts from './Charts';
import NewPosts from './NewPosts';
import NewQuestions from './NewQuestions';
import styles from './Main.module.css';

const Main = () => {
  return (
    <div className={`w-full h-screen relative ${styles.background}`}>
      <div className='absolute w-full bottom-40'>
        <Charts />
        <div className='flex gap-3 mx-8 mt-8'>
          <NewPosts />
          <NewQuestions />
        </div>
      </div>
    </div>
  );
};

export default Main;
