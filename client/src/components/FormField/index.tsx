import { FC } from 'react';
import { FieldError, Path, UseFormRegister } from 'react-hook-form';
import { Input } from '@components/Input';
import { SignUpForm } from '@containers/SignUpContainer/interfaces';

export interface FormFieldProps<FormSchema> {
  name: Path<FormSchema>;
  register: UseFormRegister<FormSchema>;
  label?: string;
  error?: FieldError;
  type?: string;
  defaultValue?: any;
}

export const FormField: FC<FormFieldProps<SignUpForm>> = ({
  name,
  label,
  register,
  error,
  type,
  defaultValue,
}) => {
  return (
    <Input
      {...register(name)}
      variant={'outlined'}
      label={label}
      errorMessage={error?.message}
      type={type}
      defaultValue={defaultValue}
    />
  );
};
