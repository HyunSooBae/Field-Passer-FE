import React from "react";

const BoardList = ({title}) => {
  const categories = ['풋살', '축구', '농구', '테니스', '배드민턴'];

  const categoryItemClass = "xxs:text-base mm:text-lg md:text-xl font-bold xxs:w-20 mm:w-32 md:w-40 h-14 bg-white m-auto mm:leading-[56px] leading-[56px] text-center cursor-pointer"
  const imminentItemClass = "xxs:text-base mm:text-lg md:text-xl font-bold xxs:w-20 mm:w-32 md:w-40 h-10 bg-white m-auto mm:leading-10 leading-10 text-center cursor-pointer"

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
    <section>
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
