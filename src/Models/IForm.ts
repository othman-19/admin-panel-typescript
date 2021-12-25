export interface FormValues {
  email: string;
  password: string;
}

export interface ForgotEmail {
  email: string;
}

export interface resetPassword {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface MyFormProps {
  initialEmail?: string;
  initialPassword?: string;
}

export interface OtherProps {
    title?: string;
}
