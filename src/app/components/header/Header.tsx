import React, { useState } from "react";
import {
  Anchor1,
  Anchor2,
  DropDownIcon,
  FlagLogo,
  HamburgerDiv,
  HamburgerSpan,
  HeaderLogo,
  HeaderMainDiv,
  HeaderSpan,
  HeaderSubDiv,
  HeaderSubDivElements,
  Li,
  Ul,
} from "./Style";
import { Link } from "react-router-dom";
import { data, data2 } from "./api";
import logo from "../../../assets/images/site_logo.png";
import flagLogo1 from "../../../assets/images/1.png";
import dropDown from "../../../assets/images/downArrow.svg";

type Props = {};

export const Header = (props: Props) => {
  const [toggle, setToggle] = useState(false);
  const [toggle1, setToggle1] = useState(false);

  return (
    <HeaderMainDiv>
      <HeaderSubDiv>
        <HeaderSubDivElements display={true}>
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
        <HamburgerDiv>
          <HamburgerSpan></HamburgerSpan>
          <HamburgerSpan></HamburgerSpan>
          <HamburgerSpan></HamburgerSpan>
        </HamburgerDiv>
      </HeaderSubDiv>
    </HeaderMainDiv>
  );
};
