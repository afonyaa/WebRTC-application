export enum LoginState {
  SigningIn = 'SigningIn',
  SigningUp = 'SigningUp',
}

export interface LoginFormProps {
  onSubmit: (data: SignUpFormFields) => void;
}

export interface SignUpFormFields {
  firstname: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
}
