import React from "react";
import SelectBox from "./SelectBox";

const Searchbar = () => {

  const categoryName = ['풋살', '축구', '농구', '테니스', '배드민턴'];
  const districtName = ['강남구', '은평구', '서대문구'];
  const stadiumName = ['체육관', '운동장', '스타디움', '공원', '실내구장']

  return (
    <section className="xxs:mt-12 xxs:flex-col xxs:m-auto xxs:flex sm:flex-row bg-zinc-200 py-2 px-2 items-center rounded-lg">
      <SelectBox id="category" names={categoryName} defaultValue="종목" size="w-28" />
      <SelectBox id="district" names={districtName} defaultValue="지역" size="w-28" />
      <SelectBox id="stadium" names={stadiumName} defaultValue="구장" size="w-60"/>
      <button type="submit" className="w-16 h-10 xxs:mt-1 sm:mt-0 sm:ml-1 rounded-lg bg-field font-bold text-white">
        검색
      </button>
    </section>
  )
};

export default Searchbar;