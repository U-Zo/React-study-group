import React from 'react';
import styled from 'styled-components';

const LoginTemplate = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: #ddd;
  align-items: center;
  justify-content: center;
`;

const LoginFormBlock = styled.div`
  width: 300px;
  background-color: #fff;
  border-radius: 10px;
  overflow: none;
`;

const LoginFormHeader = styled.div`
  height: 75px;
  width: 100%;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  align-items: center;
`;

const StyledForm = styled.form`
  width: 100%;
  padding: 2rem;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #adb5bd;
  padding-bottom: 0.5rem;
  outline: none;
  width: 100%;
  &:focus {
    border-bottom: 1px solid #0eafaf;
  }
  & + & {
    margin-top: 1rem;
  }
`;

const StyledButton = styled.button`
  width: 100%;
  outline: none;
  border: none;
  font-size: 1rem;
  padding: 0.25rem 1rem;
  color: #fff;
  cursor: pointer;
  background-color: #0eafaf;
  margin-top: 1rem;
  border-radius: 10px;
  font-weight: bold;

  &:hover {
    background-color: #14caca;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  text-align: center;
  font-size: 0.875rem;
  margin-top: 1rem;
`;

const LoginForm = ({ onSubmit, onChange, loginForm, error }) => {
  return (
    <LoginTemplate>
      <LoginFormBlock>
        <LoginFormHeader>LOGIN</LoginFormHeader>
        <StyledForm onSubmit={onSubmit}>
          <StyledInput
            type="email"
            name="email"
            placeholder="이메일"
            onChange={onChange}
            value={loginForm.value}
          />
          <StyledInput
            type="password"
            name="password"
            placeholder="비밀번호"
            onChange={onChange}
            value={loginForm.value}
          />
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <StyledButton>LOGIN</StyledButton>
        </StyledForm>
      </LoginFormBlock>
    </LoginTemplate>
  );
};

export default LoginForm;
