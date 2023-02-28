import { useNavigate } from 'react-router-dom';

type Props = {
  title: string;
  icon: JSX.Element;
  address: string;
};
const NavTab = ({ title, icon, address }: Props) => {
  const navigate = useNavigate();

  const onClickHandler = (address: string) => {
    navigate(`/${address}`);
  };

  return (
    <div
      className='flex flex-col justify-center items-center gap-5 w-24'
      onClick={() => onClickHandler(address)}
    >
      {icon}
      <span className='text-white text-center pt-2 whitespace-nowrap'>{title}</span>
    </div>
  );
};

export default NavTab;
