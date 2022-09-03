import React from 'react';
import { HeaderProps } from '@components/AuthLayout/Header/interfaces';

export interface AuthLayoutProps extends HeaderProps {
  children: React.ReactNode;
}
