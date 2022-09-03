import { FC } from 'react';
import { Button } from '@components/Button';
import {
  LoginFormProps,
  SignUpFormFields,
} from '@modules/LoginContainer/interfaces';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { getUserSchema } from '@modules/LoginContainer/SignUpForm/getUserSchema';
import { Input } from '@components/Input';

export const SignUpForm: FC<LoginFormProps> = ({ onSubmit }) => {
  const schemaToResolve = getUserSchema();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormFields>({
    mode: 'onSubmit',
    resolver: yupResolver(schemaToResolve),
  });

  return (
    <>
      <h1 className='text-2xl font-medium text-slate-700'>Sign Up</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col pt-4 gap-4'
      >
        <Input
          type='text'
          placeholder='FirstName'
          errorLabel={errors.firstname?.message}
          {...(register && register('firstname'))}
        />
        <Input
          type='text'
          placeholder='Surname'
          errorLabel={errors.surname?.message}
          {...(register && register('surname'))}
        />
        <Input
          type='text'
          placeholder='Email'
          errorLabel={errors.email?.message}
          {...(register && register('email'))}
        />
        <Input
          type='password'
          placeholder='Password'
          errorLabel={errors.password?.message}
          {...(register && register('password'))}
        />
        <Input
          type='password'
          placeholder='Confirm Password'
          errorLabel={errors.confirmPassword && 'Passwords should match!'}
          {...(register && register('confirmPassword'))}
        />
        <Button title={'SIGN UP'} variant='secondary' />
      </form>
    </>
  );
};
