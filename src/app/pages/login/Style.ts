import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #fafbfb;
  align-items: center;
  justify-content: center;
`;
export const LoginDiv = styled.div`
  text-align: center;
`;
export const LoginH1 = styled.h1`
  text-align: center;
  color: #404040;
  font-size: 30px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
export const LoginInput = styled.input`
  width: 85%;
  padding: 18px 20px;
  font-size: 18px;
  margin: 10px 0;
  border-radius: 50px;
  border: 1px solid #ededed;
`;
export const LoginLogo = styled.img`
  width: 205px;

  margin-bottom: 30px;
`;
export const LoginForm = styled.div`
  display: flex;
  max-width: 400px;
  border: 1px solid lightgray;
  background-color: white;
  width: 100%;
  font-size: 18px;
  flex-direction: column;
`;

export const LoginForm1 = styled.div`
  padding: 30px;
  text-align: left;
`;
export const A = styled.a`
  color: #43c1a8;
  margin: 30px 0;
  display: inline-block;

  text-decoration: underline;
  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;
export const LoginButton = styled.button`
  background-color: #43c1a8;
  color: white;
  font-size: 18px;
  padding: 20px 43%;
  display: block;
  margin: 25px 0;
  transition: 0.3s ease-in-out;
  &:hover {
    background-color: #59e3c7;
    cursor: pointer;
  }
  border: none;
  border-radius: 50px;
`;
export const LoginPara = styled.p`
  color: #888a8b;
  text-align: center;
`;
