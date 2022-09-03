import { FC } from 'react';
import { HeaderProps } from '@components/AuthLayout/Header/interfaces';

export const Header: FC<HeaderProps> = ({ navArea }) => {
  //todo вынести хардкод bl из лэяута
  return (
    <header className='p-4 flex items-center justify-between'>
      <span className='text-2xl font-bold text-slate-200'>
        WebRTC application
      </span>
      <div className='h-max flex divide-x'>{navArea}</div>
    </header>
  );
};
