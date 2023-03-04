import { useState } from 'react';
import Datepicker from 'tailwind-datepicker-react';

type Props = {
  title: string;
};

const FormDatePicker = ({ title }: Props) => {
  const [show, setShow] = useState(false);
  //datepicker options
  const options = {
    title,
    autoHide: true,
    maxDate: new Date('2050-01-01'),
    minDate: new Date('2000-01-01'),
    theme: {
      background: 'bg-white',
      todayBtn: 'bg-field hover:bg-field',
      clearBtn: '',
      icons: '',
      text: 'text-gray-700',
      disabledText: 'font-normal text-gray-500',
      input: 'cursor-pointer w-full rounded bg-white :focus:border-field:',
      inputIcon: '',
      selected: 'text-white bg-field hover:bg-field',
    },
    icons: {
      prev: () => <span>{'<'}</span>,
      next: () => <span>{'>'}</span>,
    },
    defaultDate: new Date(),
    language: 'ko',
  };

  const handleChange = (selectedDate: any) => {
    // api 완성되면 사용할 함수
  };
  const handleClose = (state: any) => {
    setShow(state);
  };

  return (
    <div className=' w-[180px] mr-3'>
      <Datepicker
        options={options}
        onChange={handleChange}
        show={show}
        setShow={handleClose}
        classNames='relative'
      />
    </div>
  );
};

export default FormDatePicker;
