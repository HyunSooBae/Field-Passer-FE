import React from 'react';
import Searchbar from './Searchbar';

const SearchSection = () => {
  return (
    <section className='relative border-b border-solid border-gray-200 w-full xxs:h-[270px] mm:h-28 flex items-center md:justify-center xxs:m-auto'>
      <Searchbar />
      <div className=''>
        <button className='p-3 xxs:absolute mm:static xxs:right-5 sm:right-10 md:right-10 lg:right-24 bottom-2 rounded-lg bg-field hover:bg-hoverField text-white text-sm'>
          양도글 작성
        </button>
      </div>
    </section>
  );
};

export default SearchSection;
