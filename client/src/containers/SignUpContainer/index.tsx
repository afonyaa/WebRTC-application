import { FC, useState } from 'react';
import { ProgressDotted } from '@components/ProgressDotted';
import { FormControl } from '@containers/SignUpContainer/FormControl';
import { AUTH_STEPS_INDICATORS } from '@containers/SignUpContainer/constants';

export const SignUpContainer: FC = () => {
  /** Хендлеры и состояние текущего шага заполнения формы */
  const [currentStep, setCurrentStep] = useState<number>(0);
  const incrementStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div className='flex-1 py-12'>
      <div className='w-[600px] mx-auto'>
        <ProgressDotted
          progressItems={AUTH_STEPS_INDICATORS}
          activeItemIdx={currentStep}
        />
        <FormControl
          currentStep={currentStep}
          onCurrentStepChange={incrementStep}
        />
      </div>
    </div>
  );
};
