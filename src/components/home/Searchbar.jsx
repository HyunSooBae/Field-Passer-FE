import React from "react";

const Searchbar = () => {
  return (
    <section className="flex w-[500px]  bg-red-500 justify-center mr-7">
      <select id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 h-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option defaultValue>종목</option>
        <option value="풋살">풋살</option>
        <option value="축구">축구</option>
        <option value="농구">농구</option>
        <option value="테니스">테니스</option>
        <option value="배드민턴">배드민턴</option>
      </select>
      
      <select id="district" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-32 h-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option defaultValue>지역</option>
        <option value="은평구">은평구</option>
        <option value="강남구">강남구</option>
      </select>

      <select id="stadium" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 h-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option defaultValue>구장</option>
        <option value="체육관">체육관</option>
        <option value="운동장">운동장</option>
      </select>

      <button type="submit" className=" bg-yellow-400">
        검색
      </button>
    </section>
  )
};

export default Searchbar;
