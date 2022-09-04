import { FC, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { FormProps, SignUpForm } from '@containers/SignUpContainer/interfaces';
import { credentialsSchema } from '@containers/SignUpContainer/FormControl/utils/yupSchemas';
import { FormField } from '@components/FormField';
import { Button } from '@components/Button';
import { SignUpContext } from '@containers/SignUpContainer/context';

export const CredentialsForm: FC<FormProps> = ({ onFulfilled }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: yupResolver(credentialsSchema),
    mode: 'onSubmit',
  });

  const {
    credentialsFormFields: { nickname, passwordConfirm, password, email },
    updateCredentialFields,
  } = useContext(SignUpContext);

  const onSubmit = (data: SignUpForm) => {
    updateCredentialFields(data);
    onFulfilled();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={'h-full flex flex-col'}>
      {/*.fieldsWrapper*/}
      <div className={'flex flex-col gap-4 flex-auto'}>
        <FormField
          name={'nickname'}
          label={'Nickname'}
          defaultValue={nickname}
          register={register}
          error={errors?.nickname}
        />
        <FormField
          name={'email'}
          label={'Email'}
          defaultValue={email}
          register={register}
          error={errors?.email}
        />
        <FormField
          type={'password'}
          name={'password'}
          defaultValue={password}
          label={'Password'}
          register={register}
          error={errors?.password}
        />
        <FormField
          type={'password'}
          name={'passwordConfirm'}
          defaultValue={passwordConfirm}
          label={'Confirm your password'}
          register={register}
          error={errors?.passwordConfirm}
        />
      </div>
      {/*.formActions*/}
      <div className={'flex flex-row-reverse'}>
        <Button type={'submit'} title={'Next'} />
      </div>
    </form>
  );
};
