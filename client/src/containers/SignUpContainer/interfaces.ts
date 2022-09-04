export interface SignUpForm {
  // Main info
  firstName: string | null;
  lastName: string | null;
  age: string | null;
  country: string | null;
  // Credentials info
  nickname: string | null;
  email: string | null;
  password: string | null;
  passwordConfirm: string | null;
}

export interface FormProps {
  onFulfilled: () => void;
}

export interface FormControlProps {}
