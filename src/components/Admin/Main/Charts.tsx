import Chart from './Chart';

const Charts = () => {
  return (
    <div className='flex gap-10 justify-center items-center mx-8'>
      <Chart title={'방문자 수'} />
      <Chart title={'신규 가입자 수'} />
      <Chart title={'신규 게시글 수'} />
    </div>
  );
};

export default Charts;
