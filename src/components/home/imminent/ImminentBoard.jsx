import React from "react";
import BoardList from "../search/BoardList";
import RenderList from "./RenderList";

const ImminentBoard = () => {
  return (
    <section className="h-[500px] pt-5 bg-green-700">
      <BoardList title='마감 임박' />
      <RenderList />
    </section>
  )
};

export default ImminentBoard;
