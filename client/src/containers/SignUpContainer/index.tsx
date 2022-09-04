import { FC, useContext, useEffect } from 'react';
import { ProgressDotted } from '@components/ProgressDotted';
import { FormControl } from '@containers/SignUpContainer/FormControl';
import { AUTH_STEPS_INDICATORS } from '@containers/SignUpContainer/constants';
import { SignUpContext } from '@containers/SignUpContainer/context';

export const SignUpContainer: FC = () => {
  /** Хендлеры и состояние текущего шага заполнения формы */
  const { step } = useContext(SignUpContext);
  return (
    <div className='flex-1 py-12'>
      <div className='w-[600px] mx-auto'>
        <ProgressDotted
          progressItems={AUTH_STEPS_INDICATORS}
          activeItemIdx={step}
        />
        <FormControl />
      </div>
    </div>
  );
};
