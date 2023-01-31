import React from "react";

const BoardList = ({title}) => {
  const categories = ['풋살', '축구', '농구', '테니스', '배드민턴'];

  const baseClassName = "xxs:text-base mm:text-lg md:text-xl font-bold xxs:w-20 mm:w-32 md:w-40 bg-white m-auto text-center cursor-pointer"

  const categoryItemClass = `${baseClassName} h-14 mm:leading-[56px] leading-[56px]`
  const imminentItemClass = `${baseClassName} h-10 mm:leading-10 leading-10`

  const renderCategories = () => {
    const result = [];
    categories.forEach(category => { result.push(
      <li key={category} value="category" className={title ? imminentItemClass : categoryItemClass}>
        {category}
      </li>
    )})
    return result;
  };

  const categoryBoardClass = "bg-zinc-200 h-[100px] my-5 px-5 sm:mx-5 flex"
  const imminentBoardClass = "bg-zinc-200 h-16 my-5 px-5 sm:mx-5 flex" //바꿔..?
  
  return (    
    <section className="pt-5 border-b border-gray-200 border-solid">
      <div className="xxs:w-full xs:w-2/3 sm:1/2 h-10 m-auto text-xl leading-10 text-center font-bold bg-zinc-200">
        {title ? title : '종목별 게시판'}
      </div>
      <ul className={title ? imminentBoardClass : categoryBoardClass}>
        {renderCategories()}
      </ul>
    </section>
  )
};

export default BoardList;
