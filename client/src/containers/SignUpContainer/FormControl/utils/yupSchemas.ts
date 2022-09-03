import * as yup from 'yup';

export const mainInfoSchema = yup.object().shape({
  firstName: yup.string().required('This field is required'),
  lastName: yup.string().required('This field is required'),
  age: yup
    .number()
    .max(100, 'Age must be less than 100')
    .min(12, 'Age must be greater than 12')
    .required('This field is required')
    .typeError('Please, put a valid number'),
});
