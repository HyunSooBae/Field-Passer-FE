import { postType } from '@src/util/adminPageTypes';

type Props = {
  item: postType;
};

const post = ({ item }: Props) => {
  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substring(0, n) + '...' : str;
  };
  return (
    <div className='box-border'>
      <img
        src='https://www.newspeak.kr/news/photo/202209/440903_288757_4514.jpg'
        alt=''
        className='w-[180px] rounded-lg'
      />
      <div className='flex flex-col gap-2'>
        <span className='text-xs pt-2'>{item.category}</span>
        <span className='font-bold'>{truncate(item.title, 10)}</span>
        <span className='font-bold'>{item.startTime.slice(0, 10)}</span>
        <span className='font-bold'>{Number(item.price).toLocaleString()}원</span>
      </div>
    </div>
  );
};

export default post;
