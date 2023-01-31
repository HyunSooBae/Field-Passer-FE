import React from 'react'

const AddBorad = () => {
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
                <p>예약 시간과 인증 사진이 부정확 할시 삭제 조치될 수 있습니다.</p>
                <input type="date" required aria-required="true" data-placeholder="예약일자" className='before:content-[attr(data-placeholder)] w-full;'/>
            </div>
        </form>
    </div>
  )
}

export default AddBorad