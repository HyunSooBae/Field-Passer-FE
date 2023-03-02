import { GiTrumpet } from 'react-icons/gi';
import { request } from './core/api';

// 관리자 페이지 회원 정보 리스트 조회
export const getMembersList = async (page: number = 1) => {
  try {
    const response = await request(`/admin/members?page=${page}`, {
      method: 'GET',
    });
    return {
      ok: true,
      membersListData: response.data,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
};

// 관리자 페이지 특정 회원 게시글 목록 조회
export const getMemberPost = async (memberId: string, page: number = 1) => {
  try {
    const response = await request(`/admin/board/members/${memberId}?page=${page}`, {
      method: 'GET',
    });
    return {
      ok: true,
      memberPostData: response.data,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
};

// 관리자 페이지 회원 정보 조회
export const getMemberDetail = async (memberId: string) => {
  try {
    const response = await request(`/admin/members/${memberId}`, {
      method: 'GET',
    });
    return {
      ok: true,
      memberData: response.data.resultData,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
};

// 관리자 페이지 게시글 목록 조회
export const getPostsList = async (startDate: string, endDate: string, page: number = 1) => {
  try {
    const response = await request(
      `/admin/board?startDate=${startDate}&endDate=${endDate}&page=${page}`,
      {
        method: 'GET',
      },
    );
    return {
      ok: true,
      postsListData: response.data,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
};

// 관리자 페이지 관리자 승격
export const memberPromoted = async (email: string) => {
  try {
    const response = await request('/admin/promote', {
      method: 'PUT',
      data: {
        email,
      },
    });
    return {
      ok: true,
      resultData: response.data.resultCode,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
};

// 관리자 페이지 방문자 수 확인
export const getVisitMember = async (startDate: string, endDate: string) => {
  try {
    const response = await request(`/admin/members/?startDate=${startDate}&endDate=${endDate}`, {
      method: 'GET',
    });
    return {
      ok: true,
      visitMemberData: response.data.resultData,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
};

// 관리자 문의글 목록 조회
export const getQuestionsList = async (startDate: string, endDate: string) => {
  try {
    const response = await request(`/admin/question?startDate=${startDate}&endDate=${endDate}`, {
      method: 'GET',
    });
    return {
      ok: true,
      questionsListData: response.data,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
};

// 관리자 신고 목록 조회
export const getReportsList = async (startDate: string, endDate: string) => {
  try {
    const response = await request(`/admin/report?startDate=${startDate}&endDate=${endDate}`, {
      method: 'GET',
    });
    return {
      ok: true,
      reportsListData: response.data,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
};

// 관리자 로그인
export const adminLogin = async (email: string, password: string) => {
  try {
    const response = await request('/admin/auth/login', {
      method: 'POST',
      data: {
        email,
        password,
      },
    });
    return {
      ok: true,
      authData: response.data,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
};

// 메인 - 마감임박 게시글 조회
export const getImminentList = async (category: string) => {
  try {
    return await request.get('/api/imminent', {
      params: {
        category,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// 메인 - 새로 등록된 게시글 조회
export const getNewPostList = async () => {
  try {
    return await request.get('/api/post?page=1');
  } catch (error) {
    console.log(error);
  }
};
