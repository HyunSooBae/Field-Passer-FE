import Report from './Report';

const Reports = () => {
  return (
    <table className='table-auto w-full text-sm mt-3 rounded-[10px] overflow-hidden bg-field border border-solid border-field'>
      <colgroup>
        <col className='w-auto' />
        <col className='w-auto' />
        <col className='w-auto' />
        <col className='w-[250px]' />
      </colgroup>
      <thead className='text-sm text-field bg-tableBg text-bold'>
        <tr>
          <th scope='col' className='px-6 py-4 text-left'>
            카테고리
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            신고자
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            피신고자
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            처리 상태
          </th>
          <th scope='col' className='px-6 py-4 text-left'>
            관리
          </th>
        </tr>
      </thead>
      <tbody>
        <Report />
      </tbody>
    </table>
  );
};

export default Reports;
