import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Button, Label, HyperLink, Input } from '../../components/common';
import { publicFetch } from '../../utils';
const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {
  const intialState = { username: '', password: '' };

  const onLogin = async (credential) => {
    try {
      const { data } = await publicFetch.post('/login', credential);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div>Login </div>
      <p>
        Not a user sign up here? <HyperLink to="/signup" text="Signup" />{' '}
      </p>
      <Formik
        initialValues={intialState}
        validationSchema={LoginSchema}
        onSubmit={(values) => onLogin(values)}
      >
        <Form>
          <div>
            <div className="mb-1">
              <Label text="Username" />
            </div>
            <Input
              type="text"
              name="username"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <div className="mb-1">
              <Label text="Password" />
            </div>
            <Input
              type="password"
              name="password"
              placeholder="Enter your password"
            />
          </div>
          <Button type="submit" text="Login" />
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
