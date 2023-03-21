import React from 'react';

interface Options {
  categoryID: number;
  category: string;
  district: string;
  stadiumName: string;
}

interface Props {
  id: string;
  options: Options[];
  defaultValue: string;
  size: string;
  register: any;
  type: string;
  setList: React.Dispatch<React.SetStateAction<string>>;
}

const SelectBox = ({ id, options, defaultValue, size, register, type, setList }: Props) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setList(e.currentTarget.value);
  };
  return (
    <select
      id={id}
      className={`bg-gray-50 border-2 border-gray-200 focus:outline-0 text-gray-900 text-sm p-2 rounded-lg focus:border-green-500 block h-10 ${size}`}
      {...register(type)}
      onChange={onChangeHandler}
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
