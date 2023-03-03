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
export type ImminentBoardType = {
  selectedCategory: string;
  selectedDistrict: string;
  list: ListType[];
};
