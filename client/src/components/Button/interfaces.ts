import React from 'react';
export type ButtonVariantKey = 'default' | 'outlined' | 'backLink';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: ButtonVariantKey;
}
