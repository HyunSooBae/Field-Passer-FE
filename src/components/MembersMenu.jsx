import React from "react";

const MembersMenu = () => {

  // if (로그인되지 않은 상태) {고객센터/회원가입/로그인}
  // else {고객센터/마이페이지/로그아웃}

  return (
    <div className="w-full h-10 flex justify-end pr-8 text-sm font-semibold text-hoverfield">
      <button className="mx-8 hover:text-black">고객센터</button>
      <button className="mr-8 hover:text-black">회원가입</button>
      <button className="hover:text-black">로그인</button>
    </div>
  )
};

export default MembersMenu;
