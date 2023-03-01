import { request } from './core/api';

// 관리자 페이지 회원 정보 리스트 조회
export const getMembersList = async (page: number = 1) => {
  try {
    const response = await request(`/admin/members?page=${page}`, {
      method: 'GET',
    });
    return {
      ok: true,
      memberListData: response.data.resultData,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
};
