import { DetailedHTMLProps, HTMLAttributes } from 'react';

export type FormInputVariantKey = 'default' | 'outlined';
export interface InputProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  type?: string;
  label?: string;
  name?: string;
  errorMessage?: string;
  variant?: FormInputVariantKey;
  value?: string;
}
