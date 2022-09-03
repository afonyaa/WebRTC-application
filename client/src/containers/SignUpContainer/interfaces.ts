export interface SignUpForm {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
  level: string;
  country: string;
  password: string;
  passwordConfirm: string;
}

export interface FormProps {
  onFulfilled: () => void;
}

export interface FormControlProps {
  currentStep: number;
  onCurrentStepChange: () => void;
}
