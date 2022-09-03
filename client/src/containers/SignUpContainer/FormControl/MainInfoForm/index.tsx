import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { FormProps, SignUpForm } from '@containers/SignUpContainer/interfaces';
import { mainInfoSchema } from '@containers/SignUpContainer/FormControl/utils/yupSchemas';
import { FormField } from '@components/FormField';
import { Button } from '@components/Button';

export const MainInfoForm: FC<FormProps> = ({ onFulfilled }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpForm>({
    resolver: yupResolver(mainInfoSchema),
    mode: 'onSubmit',
  });

  const onSubmit = (data: SignUpForm) => {
    onFulfilled();
  };

  return (
    <div className='mt-24 min-h-[400px] flex flex-col '>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-5 flex-auto'
      >
        <FormField
          name={'firstName'}
          label={'First Name'}
          register={register}
          error={errors?.firstName}
        />
        <FormField
          name={'lastName'}
          label={'Last Name'}
          register={register}
          error={errors?.lastName}
        />
        <FormField
          name={'age'}
          label={'Age'}
          register={register}
          error={errors?.age}
        />
      </form>
      <div>
        <Button />
      </div>
    </div>
  );
};
