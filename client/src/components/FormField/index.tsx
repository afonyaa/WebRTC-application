import { FC } from 'react';
import { FieldError, Path, UseFormRegister } from 'react-hook-form';
import { SignUpForm } from '@containers/SignUpContainer';
import { Input } from '@components/Input';

export interface FormFieldProps<FormSchema> {
  name: Path<FormSchema>;
  register: UseFormRegister<FormSchema>;
  label?: string;
  error?: FieldError;
}

export const FormField: FC<FormFieldProps<SignUpForm>> = ({
  name,
  label,
  register,
  error,
}) => {
  return (
    <Input
      {...register(name)}
      variant={'outlined'}
      label={label}
      errorMessage={error?.message}
    />
  );
};
