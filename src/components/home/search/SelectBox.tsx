import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { unselected, selected } from '@src/store/categorySlice';

const SelectBox = ({ id, options, defaultValue, size, setStadium }: any) => {
  interface Options {
    categoryID: number;
    category: string;
    district: string;
    stadiumName: string;
  }

  const dispatch = useDispatch();
  const select = useRef<HTMLSelectElement>(null);

  const checkSelector = (action: string, value: string) => {
    const prams = action + value

    if (select.current?.value === '') dispatch(unselected(action))
    else {
      dispatch(unselected(prams));
      setTimeout(() => {
        dispatch(selected(prams));
      });
    }
  };

  return (
    <select
      ref={select}
      id={id}
      className={`bg-gray-50 border-2 border-gray-200 focus:outline-0 text-gray-900 text-sm p-2 rounded-lg focus:border-green-500 block h-10 ${size}`}
      onChange={(e) => {
        if (e.target.id === 'stadium') setStadium(e.target.value);
        checkSelector(id, e.target.value);
      }}
    >
      <option value=''>{defaultValue}</option>
      {options.map((option: Options, index: number) => (
        <option key={index} value={option.category || option.district || option.stadiumName}>
          {option.category || option.district || option.stadiumName}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
