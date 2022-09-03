import { FC } from 'react';
import { AuthLinkProps } from '@components/AuthLayout/AuthLink/interfaces';
import { Link } from 'react-router-dom';

export const AuthLink: FC<AuthLinkProps> = ({ linkName, to, isActive }) => {
  const textUnderlined = isActive ? 'underline underline-offset-4' : '';
  return (
    <Link
      to={to}
      className={`px-3 text-sm text-slate-100 hover:text-purple-600 duration-300 ${textUnderlined} `}
    >
      {linkName}
    </Link>
  );
};
