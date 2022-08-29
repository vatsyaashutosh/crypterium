import styled from "styled-components";
import bb from "../../../assets/images/backgroundImage.png";
export const MiddleContainer0 = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bb});
`;
export const MiddleContainer = styled.div`
  max-width: 800px;
  width: 100%;
  margin: auto;
  padding: 50px 0;
  text-align: center;
`;
export const MainHeading = styled.h1`
  font-size: 70px;
  text-align: center;
  font-family: sans-serif;
  @media screen and (max-width: 670px) {
    font-size: 45px;
  }
  color: white;
`;
export const MiddlePara = styled.p`
  color: white;
  text-align: center;
  font-size: 20px;
`;
interface I_Props {
  color: string;
}
export const MiddleButton = styled.button<I_Props>`
  background-color: ${(props) =>
    props.color === "green" ? "#43c1a8" : "#00acfe"};
  color: white;
  padding: 20px 30px;
  margin: 20px 10px 0 0;
  font-size: 16px;
  border-radius: 50px;
  outline: none;
  border: none;
  &:hover {
    background-color: ${(props) =>
      props.color === "green" ? "#5df5d7" : "#5dc4f5"};
    cursor: pointer;
  }
`;
export const ProgressImage = styled.img`
  width: 100%;
`;
