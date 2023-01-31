import React from 'react';
import { Link } from 'react-router-dom';

const MyPage = () => {
  return (
    <div className='m-auto max-w-7xl'>
      <h2 className='text-3xl text-center font-bold my-28 m-auto'>마이페이지</h2>
      {/* <div className='content'>
        <div className='flex justify-between mt-8 mb-4'>
          <h3 className='text-2xl'>관심구장</h3>
          <Link>더보기</Link>
        </div>
        <div className='grid grid-cols-6 gap-10'>
          <div>
            <div className='aspect-square rounded-[10px] bg-gray-200'>
              <img />
            </div>
            <p className='text-sm mt-3 mb-1'>풋살장</p>
            <p className='text-lg font-bold'>관심구장이름</p>
            <p className='text-sm mb-2 text-gray-500'>영등포구 | 영등포공원 풋살경기장</p>
          </div>
        </div>
      </div> */}

      {/* 관심글 */}
      <div className='content'>
        <div className='flex justify-between mt-24 mb-10'>
          <h3 className='text-2xl font-bold'>관심글</h3>
          <Link className='text-gray-500'>더보기</Link>
        </div>
        <div className='grid grid-cols-5 gap-10'>
          <div>
            <div className='aspect-square rounded-[10px] bg-gray-200'>
              <img />
            </div>
            <p className='text-sm mt-5 mb-2'>풋살장</p>
            <p className='text-lg font-bold'>
              영등포구 영등포공원 풋살경기장 1월 31일 14시 00분 양도합니다
            </p>
            <p className='text-lg font-bold'>2023-01-21 10:00</p>
            <p className='text-lg font-extrabold'>45,000</p>
            <p className='text-sm my-2 text-gray-500'>영등포구 | 영등포공원 풋살경기장</p>
            <p className='text-sm text-gray-500'>조회 7 · 채팅 1</p>
            <p className='text-sm inline-block my-3 p-1.5 border border-solid border-field rounded-[6px] text-field hover:border-field'>
              양도중
            </p>
          </div>

          <div>
            <div className='aspect-square rounded-[10px] bg-gray-200'>
              <img />
            </div>
            <p className='text-sm mt-5 mb-2'>풋살장</p>
            <p className='text-lg font-bold'>
              영등포구 영등포공원 풋살경기장 1월 31일 14시 00분 양도합니다
            </p>
            <p className='text-lg font-bold'>2023-01-21 10:00</p>
            <p className='text-lg font-extrabold'>45,000</p>
            <p className='text-sm my-2 text-gray-500'>영등포구 | 영등포공원 풋살경기장</p>
            <p className='text-sm text-gray-500'>조회 7 · 채팅 1</p>
            <p className='text-sm inline-block my-3 p-1.5 rounded-[6px] bg-field text-white'>
              예약중
            </p>
          </div>

          <div>
            <div className='aspect-square rounded-[10px] bg-gray-200'>
              <img />
            </div>
            <p className='text-sm mt-5 mb-2'>풋살장</p>
            <p className='text-lg font-bold'>
              영등포구 영등포공원 풋살경기장 1월 31일 14시 00분 양도합니다
            </p>
            <p className='text-lg font-bold'>2023-01-21 10:00</p>
            <p className='text-lg font-extrabold'>45,000</p>
            <p className='text-sm my-2 text-gray-500'>영등포구 | 영등포공원 풋살경기장</p>
            <p className='text-sm text-gray-500'>조회 7 · 채팅 1</p>
            <p className='text-sm inline-block my-3 p-1.5 rounded-[6px] bg-gray-200 text-gray-400'>
              양도완료
            </p>
          </div>

          <div>
            <div className='aspect-square rounded-[10px] bg-gray-200'>
              <img />
            </div>
            <p className='text-sm mt-5 mb-2'>풋살장</p>
            <p className='text-lg font-bold'>
              영등포구 영등포공원 풋살경기장 1월 31일 14시 00분 양도합니다
            </p>
            <p className='text-lg font-bold'>2023-01-21 10:00</p>
            <p className='text-lg font-extrabold'>45,000</p>
            <p className='text-sm my-2 text-gray-500'>영등포구 | 영등포공원 풋살경기장</p>
            <p className='text-sm text-gray-500'>조회 7 · 채팅 1</p>
            <p className='text-sm inline-block my-3 p-1.5 border border-solid border-field rounded-[6px] text-field hover:border-field'>
              양도중
            </p>
          </div>

          <div>
            <div className='aspect-square rounded-[10px] bg-gray-200'>
              <img />
            </div>
            <p className='text-sm mt-5 mb-2'>풋살장</p>
            <p className='text-lg font-bold'>
              영등포구 영등포공원 풋살경기장 1월 31일 14시 00분 양도합니다
            </p>
            <p className='text-lg font-bold'>2023-01-21 10:00</p>
            <p className='text-lg font-extrabold'>45,000</p>
            <p className='text-sm my-2 text-gray-500'>영등포구 | 영등포공원 풋살경기장</p>
            <p className='text-sm text-gray-500'>조회 7 · 채팅 1</p>
            <p className='text-sm inline-block my-3 p-1.5 border border-solid border-field rounded-[6px] text-field hover:border-field'>
              양도중
            </p>
          </div>

          <div>
            <div className='aspect-square rounded-[10px] bg-gray-200'>
              <img />
            </div>
            <p className='text-sm mt-5 mb-2'>풋살장</p>
            <p className='text-lg font-bold'>
              영등포구 영등포공원 풋살경기장 1월 31일 14시 00분 양도합니다
            </p>
            <p className='text-lg font-bold'>2023-01-21 10:00</p>
            <p className='text-lg font-extrabold'>45,000</p>
            <p className='text-sm my-2 text-gray-500'>영등포구 | 영등포공원 풋살경기장</p>
            <p className='text-sm text-gray-500'>조회 7 · 채팅 1</p>
            <p className='text-sm inline-block my-3 p-1.5 border border-solid border-field rounded-[6px] text-field hover:border-field'>
              양도중
            </p>
          </div>

          <div>
            <div className='aspect-square rounded-[10px] bg-gray-200'>
              <img />
            </div>
            <p className='text-sm mt-5 mb-2'>풋살장</p>
            <p className='text-lg font-bold'>
              영등포구 영등포공원 풋살경기장 1월 31일 14시 00분 양도합니다
            </p>
            <p className='text-lg font-bold'>2023-01-21 10:00</p>
            <p className='text-lg font-extrabold'>45,000</p>
            <p className='text-sm my-2 text-gray-500'>영등포구 | 영등포공원 풋살경기장</p>
            <p className='text-sm text-gray-500'>조회 7 · 채팅 1</p>
            <p className='text-sm inline-block my-3 p-1.5 border border-solid border-field rounded-[6px] text-field hover:border-field'>
              양도중
            </p>
          </div>
        </div>
      </div>

      {/* 내가 쓴 글 */}
      <div className='content'>
        <div className='flex justify-between mt-48 mb-10'>
          <h3 className='text-2xl font-bold'>내가 쓴 글</h3>
          <Link>더보기</Link>
        </div>
        <div className='grid grid-cols-4 gap-10'>
          <div>
            <div className='aspect-square rounded-[10px] bg-gray-200'>
              <img />
            </div>
            <p className='text-sm mt-5 mb-2'>풋살장</p>
            <p className='text-lg font-bold'>
              영등포구 영등포공원 풋살경기장 1월 31일 14시 00분 양도합니다
            </p>
            <p className='text-lg font-bold'>2023-01-21 10:00</p>
            <p className='text-lg font-extrabold'>45,000</p>
            <p className='text-sm my-2 text-gray-500'>영등포구 | 영등포공원 풋살경기장</p>
            <p className='text-sm text-gray-500'>조회 7 · 채팅 1</p>
            <p className='text-sm inline-block my-3 p-1.5 border border-solid border-field rounded-[6px] text-field hover:border-field'>
              양도중
            </p>
          </div>

          <div>
            <div className='aspect-square rounded-[10px] bg-gray-200'>
              <img />
            </div>
            <p className='text-sm mt-5 mb-2'>풋살장</p>
            <p className='text-lg font-bold'>
              영등포구 영등포공원 풋살경기장 1월 31일 14시 00분 양도합니다
            </p>
            <p className='text-lg font-bold'>2023-01-21 10:00</p>
            <p className='text-lg font-extrabold'>45,000</p>
            <p className='text-sm my-2 text-gray-500'>영등포구 | 영등포공원 풋살경기장</p>
            <p className='text-sm text-gray-500'>조회 7 · 채팅 1</p>
            <p className='text-sm inline-block my-3 p-1.5 rounded-[6px] bg-field text-white'>
              예약중
            </p>
          </div>

          <div>
            <div className='aspect-square rounded-[10px] bg-gray-200'>
              <img />
            </div>
            <p className='text-sm mt-5 mb-2'>풋살장</p>
            <p className='text-lg font-bold'>
              영등포구 영등포공원 풋살경기장 1월 31일 14시 00분 양도합니다
            </p>
            <p className='text-lg font-bold'>2023-01-21 10:00</p>
            <p className='text-lg font-extrabold'>45,000</p>
            <p className='text-sm my-2 text-gray-500'>영등포구 | 영등포공원 풋살경기장</p>
            <p className='text-sm text-gray-500'>조회 7 · 채팅 1</p>
            <p className='text-sm inline-block my-3 p-1.5 rounded-[6px] bg-gray-200 text-gray-400'>
              양도완료
            </p>
          </div>

          <div>
            <div className='aspect-square rounded-[10px] bg-gray-200'>
              <img />
            </div>
            <p className='text-sm mt-5 mb-2'>풋살장</p>
            <p className='text-lg font-bold'>
              영등포구 영등포공원 풋살경기장 1월 31일 14시 00분 양도합니다
            </p>
            <p className='text-lg font-bold'>2023-01-21 10:00</p>
            <p className='text-lg font-extrabold'>45,000</p>
            <p className='text-sm my-2 text-gray-500'>영등포구 | 영등포공원 풋살경기장</p>
            <p className='text-sm text-gray-500'>조회 7 · 채팅 1</p>
            <p className='text-sm inline-block my-3 p-1.5 rounded-[6px] bg-gray-200 text-gray-500'>
              양도중
            </p>
          </div>
        </div>
      </div>

      {/* 문의 게시판 */}
      <div className='content pb-60'>
        <div className='flex justify-between mt-48 mb-10'>
          <h3 className='text-2xl font-bold'>문의 게시판</h3>
          <Link>더보기</Link>
        </div>
        <table className='table-auto w-full border border-solid border-gray-200 rounded-[10px] overflow-hidden bg-gray-200'>
          <thead className='bg-gray-100'>
            <tr>
              <th scope='col' className='p-4 text-sm font-bold text-gray-500 text-left'>
                제목
              </th>
              <th scope='col' className='p-4 text-sm font-bold text-gray-500 text-left'>
                등록 일자
              </th>
              <th scope='col' className='p-4 text-sm font-bold text-gray-500 text-left'>
                답변 상태
              </th>
              <th scope='col' className='p-4 text-sm font-bold text-gray-500 text-left'>
                작성자 닉네임
              </th>
            </tr>
          </thead>
          <tbody className='devide-y'>
            {/* {reports ? (
                reports?.map((report) => <Question key={report.questionId} item={report} />)
              ) : (
                <tr>
                  <td>문의가 없습니다.</td>
                </tr>
              )} */}
            <tr className='border-t-[1px] border-solid border-gray-200 bg-white'>
              <td className='font-bold p-4 py-5'>사기를 당했습니다</td>
              <td className='px-4 py-5'>2023-01-19 13:14</td>
              <td className='px-4 py-5'>
                <span className='p-1.5 rounded-[10px] font-bold text-gray-500 bg-gray-200'>
                  답변 전
                </span>
              </td>
              <td className='px-4 py-5 font-bold'>역삼동 모드리치</td>
            </tr>

            <tr className='border-t-[1px] border-solid border-gray-200 bg-white'>
              <td className='font-bold p-4 py-5'>집에 물이 안나와요</td>
              <td className='px-4 py-5'>2023-01-19 13:20</td>
              <td className='px-4 py-5'>
                <span className='p-1.5 rounded-[10px] font-bold text-field bg-tableBg'>
                  답변 완료
                </span>
              </td>
              <td className='px-4 py-5 font-bold'>서초동 백수</td>
            </tr>

            <tr className='border-t-[1px] border-solid border-gray-200 bg-white'>
              <td className='font-bold p-4 py-5'>제가 호날두라는데 사람들이 안믿어줘요</td>
              <td className='px-4 py-5'>2023-01-19 13:25</td>
              <td className='px-4 py-5'>
                <span className='p-1.5 rounded-[10px] font-bold text-gray-500 bg-gray-200'>
                  답변 전
                </span>
              </td>
              <td className='px-4 py-5 font-bold'>진짜 호날두</td>
            </tr>

            <tr className='border-t-[1px] border-solid border-gray-200 bg-white'>
              <td className='font-bold p-4 py-5'>
                제가 호날두라는데 사람들이 안믿어줘요 제가 호날두라는...
              </td>
              <td className='px-4 py-5'>2023-01-19 13:25</td>
              <td className='px-4 py-5'>
                <span className='p-1.5 rounded-[10px] font-bold text-gray-500 bg-gray-200'>
                  답변 전
                </span>
              </td>
              <td className='px-4 py-5 font-bold'>진짜 호날두</td>
            </tr>

            <tr className='border-t-[1px] border-solid border-gray-200 bg-white'>
              <td className='font-bold p-4 py-5'>제가 호날두라는데 사람들이 안믿어줘요</td>
              <td className='px-4 py-5'>2023-01-19 13:25</td>
              <td className='px-4 py-5'>
                <span className='p-1.5 rounded-[10px] font-bold text-gray-500 bg-gray-200'>
                  답변 전
                </span>
              </td>
              <td className='px-4 py-5 font-bold'>진짜 호날두</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPage;
