import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LoginForm from '../../components/auth/LoginForm';
import { changeField, login } from '../../modules/auth';

const LoginContainer = () => {
  const { loginForm, auth, authError } = useSelector(({ auth }) => ({
    loginForm: auth.loginForm,
    auth: auth.auth,
    authError: auth.authError,
  }));

  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(
      changeField({
        name,
        value,
      })
    );
  };

  const onSubmit = (e) => {
    const { email, password } = loginForm;
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  useEffect(() => {
    if (authError) {
      console.log('오류 발생');
      setError('이메일 인증이 필요합니다.');
    }
  }, [authError]);

  return (
    <LoginForm
      onSubmit={onSubmit}
      onChange={onChange}
      loginForm={loginForm}
      error={error}
    />
  );
};

export default withRouter(LoginContainer);
