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
export const DropDownIcon1 = styled.img`
  width: 10px;
  height: 10px;
`;
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
  cursor: pointer;
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
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: white;
  display: flex;
  align-items: center;
  max-height: 100vh;
  z-index: 1;
  max-width: 100vw;
  border: 1px solid red;
  justify-content: center;
`;
export const ModalContainer = styled.div`
  width: 100%;
  max-width: 100%;
  height: 100vh;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
export const Cross = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  top: 20px;
  right: 20px;
  color: black;
  font-size: 40px;
  font-weight: 600;
  margin: 0;
  cursor: pointer;
  background-color: white;
`;

export const HeaderLogo2 = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 175px;
  height: 42px;
  cursor: pointer;
`;
export const NavbarContainer = styled.div`
  max-width: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-top: 300px;
`;
export const NavbarItems = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
`;
export const NavbarSpan = styled.span`
  color: #555;
  font-size: 18px;

  &:hover {
    border-bottom: 3px solid #43c1a8;
  }
`;
export const NavbarElementContainer = styled.div`
  display: flex;
  margin-top: 100px;
  width: 200px;
  justify-content: space-between;
`;
export const NavbarElement = styled.div``;
export const Anchor3 = styled(Anchor2)`
  color: black;
`;
export const NavbarUl = styled.ul`
  list-style-type: none;
`;
export const NavbarLi = styled.li`
  color: #555;
  font-size: 18px;
  margin-bottom: 10px;
  cursor: pointer;
`;
