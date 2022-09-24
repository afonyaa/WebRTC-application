import { FC } from 'react';
import { Outlet } from 'react-router-dom';

export const VideoCallsContainer: FC = () => {
  return (
    <div className={'h-screen bg-slate-900 flex flex-col p-4'}>
      <Outlet />
    </div>
  );
};
