import { FC } from 'react';
import { AuthLayoutProps } from '@components/AuthLayout/interfaces';
import { Header } from '@components/AuthLayout/Header';

export const AuthLayout: FC<AuthLayoutProps> = (props) => {
  const { navArea } = props;
  return (
    <main className={'h-screen bg-slate-900 flex flex-col'}>
      <Header navArea={navArea} />
      {props.children}
    </main>
  );
};
