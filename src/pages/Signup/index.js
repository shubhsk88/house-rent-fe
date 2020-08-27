import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { publicFetch } from '../../utils';
import {
  Label, Input, HyperLink, Button,
} from '../../components/common';
import { fetchUser } from '../../actions';
import StyledLogin from '../Login/style';

const SignupSchema = Yup.object().shape({
  username: Yup.string().required('The username is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password should be more than 6 characters')
    .required('Password is required'),
  name: Yup.string().required('Name is required'),
});

const SignUp = () => {
  const history = useHistory();
  const [errorSign, setErrorSign] = useState('');
  const dispatch = useDispatch();
  const submitData = async value => {
    try {
      const { data } = await publicFetch.post('/users', value);
      if (data.token) {
        history.push('/');

        dispatch(fetchUser(data));
      }
    } catch (error) {
      setErrorSign(error.response.data.message);
    }
  };

  const initialValues = { name: '', username: '', password: '' };

  return (
    <StyledLogin>
      <div>
        <h2 className="header-title">Sign Up </h2>
        <p>
          Already Have an account?
          {' '}
          <HyperLink to="login" text="Login Here" />
        </p>
        <Formik
          initialValues={initialValues}
          onSubmit={values => submitData(values)}
          validationSchema={SignupSchema}
        >
          {() => (
            <Form>
              <div className="mt-8 mb-4">
                <div className="mb-1">
                  <Label text="Name" />
                </div>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="my-4">
                <div className="mb-1">
                  <Label text="Username" />
                </div>
                <Input
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                />
              </div>
              <div className="my-4">
                <div className="my-2">
                  <Label text="Password" />
                </div>
                <Input
                  name="password"
                  type="password"
                  placeholder="Enter your Pasword"
                />
              </div>
              {errorSign ? <div className="my-2 bg-red-400">{errorSign}</div> : null}
              <Button type="submit" text="Sign up" />
            </Form>
          )}
        </Formik>
      </div>
    </StyledLogin>
  );
};

export default SignUp;
