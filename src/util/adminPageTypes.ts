// json server 기반 타입 실제 서버에선 변경될 수 있음
export interface postType {
  endTime: string;
  title: string;
  price: number;
  blind: boolean;
  postId: number;
  category: string;
  district: string;
  registerDate: string;
  transactionStatus: string;
  stadiumName: string;
  memberId: string;
  memberName: string;
  startTime: string;
}

export const initPost = [
  {
    endTime: '',
    title: '',
    price: 0,
    blind: false,
    postId: 0,
    category: '',
    district: '',
    registerDate: '',
    transactionStatus: '',
    stadiumName: '',
    memberId: '',
    memberName: '',
    startTime: '',
  },
];

export interface questionType {
  memberId: string;
  memberName: string;
  questionId: string;
  registerDate: string;
  response: string;
  title: string;
}

// 회원 정보
export interface memberType {
  authority: string;
  email: string;
  memberId: number;
  memberName: string;
  postCount: number;
  privilege: string;
  punishDTO: punishDTOType;
  signUpDate: string;
  visitCount: number;
}

export interface punishDTOType {
  judgeDate: string | null;
  punishId: number;
  punishResult: boolean;
  releaseDate: string | null;
}

// 회원 정보 init
export const initMember = {
  authority: '',
  email: '',
  memberId: 0,
  memberName: '',
  postCount: 0,
  privilege: '',
  punishDTO: {
    judgeDate: '',
    punishId: 0,
    punishResult: false,
    releaseDate: '',
  },
  signUpDate: '',
  visitCount: 0,
};

export interface reportType {
  content: string;
  proccess: string;
  questionId: string;
  registerDate: string;
  reportCategory: string;
  reporterId: string;
  targetId: string;
}

// 전체 회원 목록 조회
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
