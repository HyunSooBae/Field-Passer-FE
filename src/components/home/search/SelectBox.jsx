import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { selected,unselected } from '../../../store/store';

const SelectBox = ({ id, options, defaultValue, size }) => {
  const dispatch = useDispatch();
  const select = useRef()

  const checkSelector = (action) => {
    if(select.current.value === ''){
      dispatch(unselected(action))
    } else {
      dispatch(selected(action))
    }
  }

  return (
    <select
      ref={select}
      id={id}
      className={`bg-gray-50 border-2 border-gray-200 focus:outline-0 text-gray-900 text-sm p-2 rounded-lg focus:border-green-500 block h-10 ${size}`}
      onChange={() => {
        checkSelector(id)
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