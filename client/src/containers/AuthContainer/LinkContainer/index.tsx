import { FC } from 'react';
import { AuthLink } from '@components/AuthLayout/AuthLink';
import { LinkContainerProps } from '@containers/AuthContainer/LinkContainer/interfaces';
import { useMatch, useResolvedPath } from 'react-router';

export const LinkContainer: FC<LinkContainerProps> = ({ path = '', name }) => {
  const pathResolved = useResolvedPath(path);
  const isMatch = useMatch({ path: pathResolved.pathname, end: true });
  return <AuthLink linkName={name} to={path} isActive={!!isMatch} />;
};
