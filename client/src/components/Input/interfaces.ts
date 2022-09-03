import { DetailedHTMLProps, InputHTMLAttributes } from 'react';

export type InputProps = {
  name: string;
  label?: string;
  errorLabel?: string;
  variant?: InputVariant;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type InputVariant = 'default' | 'outlined' | 'oneLine';
