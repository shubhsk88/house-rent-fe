import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {
    const intialState={ username:"",password:""}
 
};

export default Login;
