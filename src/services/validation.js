import * as Yup from 'yup';

// Login validation
export const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Not a valid email').required('Email can\'t be empty'),
    password: Yup.string().min(7, 'Password too Short!').max(20, 'Password too Long!').required('Password missing')
});

// Sign up validation
export const SignupSchema = Yup.object().shape({
    fullname: Yup.string().min(3, 'Name should be at least 3 characters').required('First Name Required'),
    mobile: Yup.number().min(7, 'Name should be at least 8 characters').required('Last Name Required'),
    email: Yup.string().required('email Required').email("Welp, that's not an email"),
    password: Yup.string()
      .min(7, 'Password must have more than 7 characters!')
      .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .max(20, 'Password too Long!')
      .required('Password missing')
  });

// Payment Validation
export const PaymentSchema = Yup.object().shape({
    amount: Yup.number().min(2, 'Amount should be at least 2 numbers').required('Amount is required'),
    phone: Yup.number().min(7, 'Phone should be at least 8 numbers').required('Phone number Required')
})