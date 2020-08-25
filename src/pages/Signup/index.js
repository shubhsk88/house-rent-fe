import React, { useState } from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';

import { Label, Input, HyperLink, Button } from '../../components/common';

const SignupSchema = Yup.object().shape({
  userName: Yup.string()
    .required('The username is required')
    .min(5, 'The username is not valid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'The password should be more than 6 characters'),
  name: Yup.string().required('Name is required'),
});

const SignUp = () => {
  const [value, setValue] = useState();
  const submitData = async (value) => {
    try {
        
    } catch (error) {
      
    }
  };

  const initialValues = { name: '', username: '', password: '' };

  return (
    <div className="">
      <h2>Sign Up </h2>
      <p>
        Already Have an account? <HyperLink to="login" text="Login Here" />
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => console.log(values)}
        validationSchema={SignupSchema}
      >
        <Form>
          <div>
            <div>
              <Label text="Name" />
            </div>
            <Field
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <div>
              <Label text="Username" />
            </div>
            <Input
              name="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <div>
              <Label text="Password" />
            </div>
            <Input
              name="password"
              type="password"
              placeholder="Enter your Pasword"
            />
          </div>
          <Button type="submit" text="Sign up" />
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
