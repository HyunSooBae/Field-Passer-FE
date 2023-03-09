// 마감임박 게시판
export type ImminentBoardType = {
  selectedCategory: string;
  selectedDistrict: string;
  list: ListType[];
};
// 마감임박 API 응답값
export interface ListType {
  category: string;
  district: string;
  imageURL?: string;
  memberId?: string;
  memberName?: string;
  postId: string;
  price?: string;
  registerDate?: string;
  reservedDate?: string;
  stadiumName: string;
  startTime: string;
  endTime?: string;
  title?: string;
  transactionStatus?: string;
  viewCount?: string;
}
// 채팅페이지 메시지 전송/응답값 타입
export interface ChatListType {
  person: string;
  time: string;
  message: string;
}
