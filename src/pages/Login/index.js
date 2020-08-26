import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { Button, Label, HyperLink, Input } from '../../components/common';
import { publicFetch } from '../../utils';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../../actions';
import StyledLogin from './style';
const LoginSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  password: Yup.string().required('Password is required'),
});

const Login = () => {
  const intialState = { username: '', password: '' };
  const dispatch = useDispatch();
  const onLogin = async (credential) => {
    try {
      const { data } = await publicFetch.post('/login', credential);
      if (data.token) {
        console.log(data);
        dispatch(fetchUser(data));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledLogin>
      <div>
        <h1 className="header-title">Login </h1>
        <p>Hello There,Welcome back</p>
        <p>
          Not a user sign up here? <HyperLink to="/signup" text="Signup" />{' '}
        </p>
        <Formik
          initialValues={intialState}
          validationSchema={LoginSchema}
          onSubmit={(values) => onLogin(values)}
        >
          <Form>
            <div className="mt-8 mb-4">
              <div className="mb-1">
                <Label text="Username" />
              </div>
              <Input
                type="text"
                name="username"
                placeholder="Enter your username"
              />
            </div>
            <div className="my-4">
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
    </StyledLogin>
  );
};

export default Login;
