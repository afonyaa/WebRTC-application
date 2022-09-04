import { FC, useContext, useEffect } from 'react';
import { MainInfoForm } from './MainInfoForm';
import { FormControlProps } from '../interfaces';
import { CredentialsForm } from '@containers/SignUpContainer/FormControl/CredentialsForm';
import { Button } from '@components/Button';
import { SignUpContext } from '@containers/SignUpContainer/context';

/** Управляет отображением конкретной формы */
export const FormControl: FC<FormControlProps> = () => {
  const { step, incrementStep, decrementStep } = useContext(SignUpContext);

  const canStepBack = step !== 0;
  const handleStepBack = () => {
    if (canStepBack) {
      decrementStep();
    }
  };
  const handleStepNext = () => {
    if (step === 1) {
      console.log('fulfilled all');
    } else incrementStep();
  };

  const MainInfos = [
    <MainInfoForm onFulfilled={handleStepNext} key={1} />,
    <CredentialsForm onFulfilled={handleStepNext} key={2} />,
  ];
  return (
    <div className={'mt-8 inline-block w-full'}>
      <Button
        onClick={handleStepBack}
        title={'Previous step'}
        variant={'backLink'}
        className='mb-2'
        disabled={!canStepBack}
      />
      <div className={'h-[400px]'}>{MainInfos[step]}</div>
    </div>
  );
};
