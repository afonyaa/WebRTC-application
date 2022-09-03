import { FC } from 'react';
import { Button } from '@components/Button';
import { LoginFormProps } from '@modules/LoginContainer/interfaces';
import { Input } from '@components/Input';

export const SignInForm: FC<LoginFormProps> = ({}) => {
  return (
    <>
      <h1 className='text-2xl font-medium text-slate-700'>Sign In</h1>
      <form className='flex flex-col pt-4 gap-4'>
        <Input name={'email'} label={'Email'} type='text' placeholder='Email' />
        <Input
          name={'password'}
          label={'Password'}
          type='password'
          placeholder='Password'
        />
        <div className='flex flex-col gap-1'>
          <Button title={'SIGN IN'} variant='secondary' />
          <Button title={'LOGIN AS CORPORATE'} variant='primary' />
        </div>
      </form>
    </>
  );
};
