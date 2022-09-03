import * as yup from 'yup';

export const getUserSchema = () => {
  return yup.object().shape({
    firstname: yup.string().required(),
    surname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(5),
    confirmPassword: yup.string().oneOf([yup.ref('password'), null]),
  });
};
