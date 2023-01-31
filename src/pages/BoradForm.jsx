import React from 'react'
import { useState } from 'react'
import Datepicker from "tailwind-datepicker-react"

const BoradForm = () => {
  const options = {
    title: "예약 일자",
    autoHide: true,
    maxDate: new Date("2050-01-01"),
    minDate: new Date("2000-01-01"),
    theme: {
      background: "bg-white",
      todayBtn: "bg-field hover:bg-field",
      clearBtn: "",
      icons: "",
      text: "text-gray-700",
      disabledText: "font-normal text-gray-500",
      input: "cursor-pointer w-full rounded bg-white :focus:border-field:",
      inputIcon: "",
      selected: "text-white bg-field hover:bg-field",
    },
    icons: {
      // () => ReactNode | JSX.Element
      prev: () => <span>{'<'}</span>,
      next: () => <span>{'>'}</span>,
    },
    datepickerClassNames: "-top-[450px]",
    defaultDate: new Date(),
    language: "ko",
  }
  
  const DemoComponent = () => {
    const [show, setShow] = useState(false)
    const handleChange = (selectedDate) => {
      
    }
    const handleClose = (state) => {
      setShow(state)
    }
  
    return (
      <div class=' w-[calc(50%-10px)] mr-5'>
        <Datepicker options={options} onChange={handleChange} show={show} setShow={handleClose} classNames="relative"/>
      </div>
    )
  }


  return (
    <div className='mt-12 mb-24 mx-auto'>
        <form action="" className='w-[600px] ml-auto mr-auto mt-0 mb-0 flex flex-col gap-5'>
            <div className='flex gap-3'>
                <select name="" id="" className='w-24 h-8 border-2 border-solid border-#94a3b8 rounded-md text-sm pl-2 focus:outline-none focus:border-field '>
                    <option value="">종목</option>
                </select>
                <select name="" id="" className='w-24 h-8 border-2 border-solid border-#94a3b8 rounded-md text-sm pl-2 focus:outline-none focus:border-field '>
                    <option value="">지역</option>
                </select>
                <select name="" id="" className='w-48 h-8 border-2 border-solid border-#94a3b8 rounded-md text-sm pl-2 focus:outline-none focus:border-field '>
                    <option value="">구장</option>
                </select>
            </div>
            <div className='flex flex-col gap-5'>
                <input type="text" disabled placeholder='구장' className='h-10 rounded text-sm border-#94a3b8 border-solid border-2 px-3'/>
                <input type="number" placeholder='가격 입력' className='h-10 rounded text-sm border-#94a3b8 border-solid border-2 px-3 focus:outline-none focus:border-field appearance-none'/>
                <textarea placeholder='내용 입력' className='resize-none h-10 rounded text-sm border-#94a3b8 border-solid border-2 px-3 pt-3 h-96 focus:outline-none focus:border-field'></textarea>
            </div>
            <div>
              <p className='text-xs text-gray-600 mb-[10px]'>예약 날짜 / 시간</p>
              <div className='flex'>
                <DemoComponent />
                <input
                  type="time"
                  className='form-control block w-[calc(50%-10px)] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                            focus:border-field focus:outline-none;'
                  placeholder="Select a date"
                />
              </div>
            </div>
            <div>
              <p className='text-xs text-gray-600 mb-[10px]'>인증 사진</p>
              <div>
                <label htmlFor="images" className='block w-[100px] h-[100px] border-solid border rounded cursor-pointer border-[#ddd]'>카메라 icon</label>
                <input id="images" type='file' multiple className='hidden'></input>
              </div>
            </div>

            <button className='text-sm px-2 py-2 border-solid rounded mx-auto w-[50px] bg-field text-white'>작성</button>
        </form>
    </div>
  )
}

export default BoradForm