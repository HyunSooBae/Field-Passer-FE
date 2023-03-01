import { request } from './core/api';

// 예시입니다.
const getMembersList = async () => {
  try {
    const response = await request('/membersList', {
      method: 'GET',
      data: null,
    });
    return {
      ok: true,
      memberListData: response.data,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
};
