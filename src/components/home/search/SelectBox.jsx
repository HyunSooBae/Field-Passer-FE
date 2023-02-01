import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selected } from '../../../store/selected';

const SelectBox = ({ id, options, defaultValue, size }) => {
  const dispatch = useDispatch();
  const selectedState = useSelector((state) => {
    return state.selected.catagorySelect;
  });

  useEffect(() => {
    console.log(selectedState)    
  }, [selectedState]);

  return (
    <select
      id={id}
      className={`bg-gray-50 border-2 border-gray-200 focus:outline-0 text-gray-900 text-sm p-2 rounded-lg focus:border-green-500 block h-10 ${size}`}
      onChange={() => {
        if(id === 'category') dispatch(selected('category'))
        if(id === 'district') dispatch(selected('district'))
      }}
    >
      <option value='' defaultValue>
        {defaultValue}
      </option>
      {options.map((option, index) => (
        <option key={ index } value={option.category || option.district || option.stadiumName}>
          {option.category || option.district || option.stadiumName}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
