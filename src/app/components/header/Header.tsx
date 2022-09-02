import React, { useState } from "react";
import {
  Anchor1,
  Anchor2,
  Anchor3,
  Cross,
  DropDownIcon,
  DropDownIcon1,
  FlagLogo,
  HamburgerDiv,
  HamburgerSpan,
  HeaderLogo,
  HeaderLogo2,
  HeaderMainDiv,
  HeaderSpan,
  HeaderSubDiv,
  HeaderSubDivElements,
  Li,
  ModalBackground,
  ModalContainer,
  NavbarContainer,
  NavbarElement,
  NavbarElementContainer,
  NavbarItems,
  NavbarLi,
  NavbarSpan,
  NavbarUl,
  Ul,
} from "./Style";
import { data, data2 } from "./api";
import logo from "../../../assets/images/site_logo.png";
import logo2 from "../../../assets/images/site_logo_2.png";
import flagLogo1 from "../../../assets/images/1.png";
import dropDown from "../../../assets/images/downArrow.svg";
import downArrow from "../../../assets/images/down-arrow.png";

type Props = {};

export const Header = (props: Props) => {
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);
  const [toggleForHamburger, setToggleForHamburger] = useState(false);
  const [toggleForConcordant, setToggleForConcordant] = useState(false);
  const [toggleForConcordant1, setToggleForConcordant1] = useState(false);

  return (
    <HeaderMainDiv>
      <HeaderSubDiv>
        <HeaderSubDivElements displayy="flex">
          <HeaderLogo src={logo} />
        </HeaderSubDivElements>
      </HeaderSubDiv>
      <HeaderSubDiv>
        <HeaderSubDivElements>
          <HeaderSpan
            onMouseLeave={() => setToggle(!toggle)}
            onMouseEnter={() => setToggle(!toggle)}
          >
            Home{" "}
          </HeaderSpan>
          {<DropDownIcon src={dropDown} />}
          {toggle && (
            <Ul
              onMouseLeave={() => setToggle(false)}
              onMouseEnter={() => setToggle(true)}
            >
              {data.map((ele, i) => (
                <Li key={i}>{ele}</Li>
              ))}
            </Ul>
          )}
        </HeaderSubDivElements>

        <HeaderSubDivElements>
          <HeaderSpan
            onMouseLeave={() => setToggle1(!toggle1)}
            onMouseEnter={() => setToggle1(!toggle1)}
          >
            Pages
          </HeaderSpan>
          {<DropDownIcon src={dropDown} />}
          {toggle1 && (
            <Ul
              onMouseLeave={() => setToggle1(false)}
              onMouseEnter={() => setToggle1(true)}
            >
              {data2.map((ele, i) => (
                <Li key={i}>{ele}</Li>
              ))}
            </Ul>
          )}
        </HeaderSubDivElements>

        <HeaderSubDivElements>
          <HeaderSpan>White Pappers</HeaderSpan>
        </HeaderSubDivElements>
        <HeaderSubDivElements>
          <HeaderSpan>FAQ's</HeaderSpan>
        </HeaderSubDivElements>
        <HeaderSubDivElements>
          <HeaderSpan>Support</HeaderSpan>
        </HeaderSubDivElements>
      </HeaderSubDiv>
      <HeaderSubDiv>
        <HeaderSubDivElements>
          <Anchor1 to="login">Login</Anchor1>
        </HeaderSubDivElements>
        <HeaderSubDivElements>
          <Anchor2>Sign up</Anchor2>
        </HeaderSubDivElements>
        <HeaderSubDivElements>
          <FlagLogo src={flagLogo1} />
        </HeaderSubDivElements>
        <HamburgerDiv
          onClick={() => setToggleForHamburger(!toggleForHamburger)}
        >
          <HamburgerSpan></HamburgerSpan>
          <HamburgerSpan></HamburgerSpan>
          <HamburgerSpan></HamburgerSpan>
        </HamburgerDiv>
        {toggleForHamburger && (
          <ModalBackground>
            <ModalContainer>
              <Cross onClick={() => setToggleForHamburger(!toggleForHamburger)}>
                x
              </Cross>
              <HeaderLogo2 src={logo2} />
              <NavbarContainer>
                <NavbarItems
                  onClick={() => {
                    setToggleForConcordant(!toggleForConcordant);
                    setToggleForConcordant1(false);
                  }}
                >
                  {" "}
                  {<NavbarSpan>Home</NavbarSpan>}{" "}
                  <DropDownIcon1 src={downArrow} />{" "}
                </NavbarItems>
                {toggleForConcordant && (
                  <NavbarUl>
                    {data.map((ele, i) => (
                      <NavbarLi key={i}>{ele}</NavbarLi>
                    ))}
                  </NavbarUl>
                )}
                <NavbarItems
                  onClick={() => {
                    setToggleForConcordant1(!toggleForConcordant1);
                    setToggleForConcordant(false);
                  }}
                >
                  {" "}
                  {<NavbarSpan>Pages</NavbarSpan>}{" "}
                  <DropDownIcon1 src={downArrow} />
                </NavbarItems>
                {toggleForConcordant1 && (
                  <NavbarUl>
                    {data2.map((ele, i) => (
                      <NavbarLi key={i}>{ele}</NavbarLi>
                    ))}
                  </NavbarUl>
                )}
                <NavbarItems>
                  {" "}
                  {<NavbarSpan>White Papper</NavbarSpan>}{" "}
                </NavbarItems>
                <NavbarItems> {<NavbarSpan>FAQ's</NavbarSpan>} </NavbarItems>
                <NavbarItems> {<NavbarSpan>Support</NavbarSpan>} </NavbarItems>
                <NavbarElementContainer>
                  <NavbarElement>
                    <Anchor1 to="login">Login</Anchor1>
                  </NavbarElement>
                  <NavbarElement>
                    <Anchor3>Sign up</Anchor3>
                  </NavbarElement>
                  <NavbarElement>
                    <FlagLogo src={flagLogo1} />
                  </NavbarElement>
                </NavbarElementContainer>
              </NavbarContainer>
            </ModalContainer>
          </ModalBackground>
        )}
      </HeaderSubDiv>
    </HeaderMainDiv>
  );
};
