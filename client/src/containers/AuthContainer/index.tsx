import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthLayout } from '@components/AuthLayout';
import AuthRoute from '@pages/Auth';
import { LinkContainer } from '@containers/AuthContainer/LinkContainer';

/**
 * Контейнер, отвечающий за логику отображения Регистрации/Логина
 * */
export const AuthContainer: FC = () => {
  const authLinks = AuthRoute.children;

  return (
    <AuthLayout
      navArea={
        <>
          {authLinks?.map((link) => (
            <LinkContainer
              path={link.path}
              name={link.baseLinkName}
              key={link.path}
            />
          ))}
        </>
      }
    >
      <Outlet />
    </AuthLayout>
  );
};
