import { request } from './core/api';

// 관리자 페이지 회원 정보 리스트 조회
export const getMembersList = async (page: number = 1) => {
  try {
    const response = await request(`/admin/members?page=${page}`, {
      method: 'GET',
    });
    return {
      ok: true,
      membersListData: response.data.resultData,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
};

// 관리자 페이지 특정 회원 게시글 리스트 조회
export const getMemberPost = async (memberId: number, page: number = 1) => {
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

// 관리자 페이지 게시물 리스트 정보 조회
export const getPostsList = async () => {
  try {
    const response = await request(`/admin/board?startDate=2023-01-27&endDate=2023-01-30&page=1`, {
      method: 'GET',
    });
    return {
      ok: true,
      postsListData: response.data.resultData,
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
