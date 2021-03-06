import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SignUpForm } from '../components/auth/SignUpForm';
import {
  makeSelectSignUpError,
  makeSelectSignUpLoader
} from '../store/selectors/SignUpSelector';
import { signUp } from '../store/actions/SignUpActions';
import withIsAuth from '../utils/hoc/withIsAuth';

const SignUp = () => {
  const dispatch = useDispatch();

  const signUpError = useSelector(makeSelectSignUpError());
  const isLoading = useSelector(makeSelectSignUpLoader());

  const handleSignUp = useCallback(data => dispatch(signUp(data)), [dispatch]);

  return (
    <div>
      Sign Up Page
      <SignUpForm
        onSubmit={handleSignUp}
        signUpErrors={signUpError}
        isLoading={isLoading}
      />
    </div>
  );
};

const ComponentWrapper = withIsAuth(SignUp);
ComponentWrapper.hideHeader = true;

export default ComponentWrapper;
