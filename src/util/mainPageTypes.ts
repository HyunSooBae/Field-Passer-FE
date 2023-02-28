export interface ListType {
  category: string;
  district: string;
  endTime?: string;
  imageURL?: string;
  memberId?: string;
  memberName?: string;
  postId: string;
  price?: string;
  registerDate?: string;
  stadiumName: string;
  startTime: string;
  title?: string;
  transactionStatus?: string;
}
export type ImminentBoardType = {
  selectedCategory: string;
  selectedDistrict: string;
  list: ListType[];
};
