import React from 'react';
import { categoryOptions } from '../../../util/options';

const CategoryFilter = ({ selectedCategory }) => {
  return (
    <div className='flex my-3 border-b border-solid border-gray-200'>
      {categoryOptions.map((category) => (
        <div
          key={category}
          className='w-full flex after:content-["|"] after:leading-10 after:text-gray-200 last:after:content-[""] border-gray-200'
        >
          <input
            type='radio'
            id={category}
            name='category'
            value={category}
            defaultChecked={category === '풋살장' ? true : false}
            className='peer hidden'
          />
          <label
            htmlFor={category}
            className='xxs:text-xs xs:text-base mm:text-lg md:text-lg font-bold w-full text-center py-2 align-middle cursor-pointer peer-checked:border-b-[3px] border-solid peer-checked:transition-[.5s]'
            onClick={() => {
              selectedCategory(category);
            }}
          >
            {category}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;
