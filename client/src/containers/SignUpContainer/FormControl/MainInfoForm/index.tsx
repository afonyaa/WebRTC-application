import { FC, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { FormProps, SignUpForm } from '@containers/SignUpContainer/interfaces';
import { mainInfoSchema } from '@containers/SignUpContainer/FormControl/utils/yupSchemas';
import { FormField } from '@components/FormField';
import { Button } from '@components/Button';
import { SignUpContext } from '@containers/SignUpContainer/context';

export const MainInfoForm: FC<FormProps> = ({ onFulfilled }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: yupResolver(mainInfoSchema),
    mode: 'onSubmit',
  });

  const {
    mainFormFields: { firstName, lastName, age, country },
    updateMainFormFields,
  } = useContext(SignUpContext);

  const onSubmit = (data: SignUpForm) => {
    updateMainFormFields(data);
    onFulfilled();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={'h-full flex flex-col'}>
      {/*.fieldsWrapper*/}
      <div className={'flex flex-col gap-4 flex-auto'}>
        <FormField
          name={'firstName'}
          label={'First Name'}
          register={register}
          defaultValue={firstName}
          error={errors?.firstName}
        />
        <FormField
          name={'lastName'}
          label={'Last Name'}
          register={register}
          defaultValue={lastName}
          error={errors?.lastName}
        />
        <FormField
          name={'age'}
          label={'Age'}
          register={register}
          defaultValue={age}
          error={errors?.age}
        />
        <FormField
          name={'country'}
          label={'Where are you from?'}
          register={register}
          defaultValue={country}
          error={errors?.country}
        />
      </div>
      {/*.formActions*/}
      <div className={'flex flex-row-reverse'}>
        <Button type={'submit'} title={'Next'} />
      </div>
    </form>
  );
};
