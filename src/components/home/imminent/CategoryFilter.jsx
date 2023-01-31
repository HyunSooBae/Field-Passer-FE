import React from 'react';

const CategoryFilter = () => {
  const categories = ['풋살', '축구', '농구', '테니스', '배드민턴'];

  return (
    <>
      {categories.map((category) => (
        <div key={category} className='w-full flex after:content-["|"] text-center align-middle'>
          <input
            type='radio'
            id={category}
            name='category'
            value={category}
            defaultChecked={category === '풋살' ? true : false}
            className='peer hidden'
          />
          <label
            htmlFor={category}
            className='xxs:text-xs xs:text-base mm:text-lg md:text-lg font-bold w-full text-center py-2 align-middle cursor-pointer peer-checked:border-b-4 peer-checked:border-solid peer-checked:border-black'
          >
            {category}
          </label>
        </div>
      ))}
    </>
  );
};

export default CategoryFilter;
