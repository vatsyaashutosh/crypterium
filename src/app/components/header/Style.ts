import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderMainDiv = styled.div`
  display: flex;
  width: 100%;
  margin: auto;
  justify-content: space-between;
  /* border: 1px solid red; */
  box-sizing: border-box;
  padding: 30px 40px 0;
  background-color: #001121;
`;
interface I_Props {
  displayy?: string;
}
export const HeaderSubDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const DropDownIcon = styled.img``;
export const HeaderSubDivElements = styled.div<I_Props>`
  padding: 20px;
  position: relative;
  @media screen and (max-width: 1150px) {
    display: ${(props) => (props.displayy === "flex" ? "flex" : "none")};
  }
`;
export const HeaderLogo = styled.img`
  width: 175px;
  height: 42px;
  cursor: pointer;
`;
export const HeaderSpan = styled.span`
  color: white;
  font-size: 18px;
  font-weight: 400;
  padding: 0 0 4px 0;

  transition: 0.1s ease-out;
  &:hover {
    border-bottom: 3px solid white;
    cursor: pointer;
  }
`;
export const Anchor1 = styled(Link)`
  background-color: #10cb6c;
  text-decoration: none;
  font-size: 14px;
  padding: 10px 30px;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #43c1a8;
  }
`;
export const Anchor2 = styled.a`
  color: white;
  text-decoration: underline;
  font-size: 14px;
  &:hover {
    text-decoration: none;
    cursor: pointer;
  }
`;
export const FlagLogo = styled.img`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
export const Ul = styled.ul`
  position: absolute;
  background-color: #303030;
  list-style-type: none;
  top: 35px;

  width: 200px;
`;
export const Li = styled.li`
  color: white;
  padding: 12px;
  transition: 0.2s ease-in;
  &:hover {
    opacity: 0.4;
    cursor: pointer;
  }
`;
export const HamburgerDiv = styled.div`
  display: none;
  @media screen and (max-width: 1150px) {
    display: block;
  }
`;
export const HamburgerSpan = styled.div`
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
`;
