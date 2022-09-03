import { FC } from 'react';
import { MainInfoForm } from './MainInfoForm';
import { FormControlProps } from '../interfaces';

/** Управляет отображением конкретной формы */
export const FormControl: FC<FormControlProps> = ({
  currentStep,
  onCurrentStepChange,
}) => {
  const MainInfos = [
    <MainInfoForm onFulfilled={onCurrentStepChange} key={1} />,
    <MainInfoForm onFulfilled={onCurrentStepChange} key={2} />,
    <MainInfoForm onFulfilled={onCurrentStepChange} key={3} />,
    <MainInfoForm onFulfilled={onCurrentStepChange} key={4} />,
  ];
  return MainInfos[currentStep];
};
