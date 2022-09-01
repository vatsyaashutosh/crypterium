import React from "react";
import {
  A,
  Br,
  LoginButton,
  LoginContainer,
  LoginDiv,
  LoginForm,
  LoginForm1,
  LoginH1,
  LoginInput,
  LoginLogo,
  LoginPara,
} from "./Style";
import Logo from "../../../assets/images/site_logo_2.png";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <LoginContainer>
      <LoginDiv>
        <Link to="/">
          <LoginLogo src={Logo} />
        </Link>
        <LoginForm>
          <LoginForm1>
            <LoginH1>Sign In</LoginH1>
            <LoginInput type="email" placeholder="Email" />
            <LoginInput type="password" placeholder="Password" />
            <Br />
            <A>I forgot my password</A>
            <LoginButton>Submit</LoginButton>
            <LoginPara>
              <A>Sign Up</A> If you don't have an account
            </LoginPara>
          </LoginForm1>
        </LoginForm>
      </LoginDiv>
    </LoginContainer>
  );
};
