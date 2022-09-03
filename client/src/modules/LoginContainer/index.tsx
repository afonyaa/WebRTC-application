import { FC, useState } from 'react';
import { LoginState } from './interfaces';
import { SignInForm } from '@modules/LoginContainer/SignInForm';
import { SignUpForm } from '@modules/LoginContainer/SignUpForm';

export const LoginContainer: FC = () => {
  const [loginState, setLoginState] = useState(LoginState.SigningIn);

  const changeStateMessage =
    loginState === LoginState.SigningIn ? (
      <>
        Do not have an account?{' '}
        <b
          className='cursor-pointer'
          onClick={() => setLoginState(LoginState.SigningUp)}
        >
          Sign up
        </b>
      </>
    ) : (
      <>
        Already have an account?{' '}
        <b
          className='cursor-pointer'
          onClick={() => setLoginState(LoginState.SigningIn)}
        >
          Sign in
        </b>
      </>
    );

  return (
    <div className='h-screen w-full grid sm:grid-cols-2 grid-cols-1'>
      <div className='hidden sm:block bg-slate-400'>Image</div>
      <div className='flex items-center justify-center'>
        <div className='m-4 px-8 py-10 w-full sm:max-w-[400px]'>
          {loginState === LoginState.SigningIn && (
            <SignInForm onSubmit={() => {}} />
          )}
          {loginState === LoginState.SigningUp && (
            <SignUpForm
              onSubmit={(data) => {
                console.log(data);
              }}
            />
          )}
          <div className='text-center text-sm text-slate-500 mt-5'>
            {changeStateMessage}
          </div>
        </div>
      </div>
    </div>
  );
};
