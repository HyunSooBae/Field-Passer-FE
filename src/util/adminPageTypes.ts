// json server 기반 타입 실제 서버에선 변경될 수 있음
export interface postType {
  category: string;
  district: string;
  endTime: string;
  imageURL: string;
  memberId: string;
  postId: string;
  price: string;
  registerDate: string;
  reservedDate: string;
  stadiumName: string;
  startTime: string;
  title: string;
  transactionStatus: string;
  viewCount: string;
  wisthCount: string;
}

export interface questionType {
  memberId: string;
  memberName: string;
  questionId: string;
  registerDate: string;
  response: string;
  title: string;
}

export interface memberType {
  authority: string;
  email: string;
  memberId: string;
  memberName: string;
  postCount: string;
  privilege: string;
  reportsNum: number;
  signUpDate: string;
  visitCount: string;
}

export interface reportType {
  content: string;
  proccess: string;
  questionId: string;
  registerDate: string;
  reportCategory: string;
  reporterId: string;
  targetId: string;
}

export interface memberListsType {
  memberId: number;
  email: string;
  memberName: string;
  signupDate: string;
  postCount: number;
  visitCount: number;
  privilege: string;
  reportNum: number;
  authority: string;
}
