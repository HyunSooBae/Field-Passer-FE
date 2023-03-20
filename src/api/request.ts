import { PostDataType } from '@src/util/userPageTypes';
import { File } from 'buffer';
import { request, requestForm } from './core/api';
import { getCookie, setCookie } from '@src/util/cookie';

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

// 관리자 방문자 수 확인
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

// 관리자 신규 회원 수 조회
export const getNewMember = async (startDate: string, endDate: string, page: number = 1) => {
  try {
    const response = await request.get(
      `/admin/membes/new?startDate=${startDate}&endDate=${endDate}&page=${page}`,
    );
    return {
      ok: true,
      newMemberData: response.data,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
};

// 관리자 신규 게시글 수 조회
export const getNewPosts = async (startDate: string, endDate: string, page: number = 1) => {
  try {
    const response = await request.get(
      `/admin/board/new?startDate=${startDate}&endDate=${endDate}&page=${page}`,
    );
    return {
      ok: true,
      newPostsData: response.data,
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
    const response = await request.get(`/admin/question?startDate=${startDate}&endDate=${endDate}`);
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

// 관리자 게시글 블라인드 처리
export const postBlind = async (postId: string, blind: boolean) => {
  try {
    const response = await request.put('/admin/board/blind', {
      data: {
        postId,
        blind,
      },
    });
    return {
      ok: true,
      blindData: response.data,
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
    const res = await request.get('/api/post?page=1');
    return res;
  } catch (error) {
    console.log(error);
  }
};

// 사용자 로그인
export const userLogin = async (formData: any) => {
  try {
    const response = await requestForm('/api/auth/login', {
      method: 'POST',
      data: formData,
      withCredentials: true,
    });
    // console.log(response.data);
    return {
      ok: true,
      code: response.data.code,
      authData: response.data,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
};

// 사용자·관리자 공용 로그아웃
export const logout = async () => {
  try {
    const response = await requestForm('/api/auth/logout', {
      method: 'POST',
    });
    return {
      ok: true,
      code: response.data.code,
      authData: response.data,
    };
    console.log(response);
  } catch (error) {
    console.log(error);
    return {
      ok: false,
    };
  }
};

// 고객센터 문의글 접수하기
export const submitReport = async (
  memberId: string,
  memberName: string,
  title: string,
  reportCategory: string,
  content: string,
) => {
  try {
    const response = await request.post('/userservice/report', {
      data: {
        memberId,
        memberName,
        title,
        reportCategory,
        content,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

// 양도 게시글 작성
export const submitPost = async (formData: FormData) => {
  try {
    const response = await request.post('/api/post/write', formData);
    return response;
  } catch (err) {
    console.log(err);
  }
};

// 사용자 회원가입
export const join = async (data: any) => {
  try {
    const response = await requestForm('/api/auth/register', {
      method: 'POST',
      data,
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

// 카테고리,구역 리스트
export const getCategoryDistrict = async (type: string) => {
  try {
    const res = await request.get(`/api/${type}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 구장 리스트
export const getStadiumList = async (category: string, district: string) => {
  try {
    const res = await request.get(`/api/stadiumList?category=${category}&district=${district}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// 게시글 검색 
export const getSearchPostList = async (category:string | boolean, district:string | undefined | boolean, stadium:string | boolean, page:number) => {  
  try {
    let res = await request.get(`/api/post?page=${page}`);
    if(!category && district && !stadium) {
      res = await request.get(`api/post/district?district=${district}&page=${page}`)
      return res.data.content
    }
    if(category) res = await request.get(`api/post/category?category=${category}&page=${page}`);
    if(district) res = await request.get(`api/post/category/district?category=${category}&district=${district}&page=${page}`);
    if(stadium) res = await request.get(`api/post/stadium?category=${category}&district=${district}&stadiumName=${stadium}&page=${page}`);
    return res.data.content
  }catch (error) {
    console.log(error)
  }
};

// 상세 게시글 조회
export const getDetailPostData = async (id: string | undefined) => {
  try {
    const res = await request.get(`api/post/${id}`);  
    return res.data
  }catch (error) {
    console.log(error)
  }
};
