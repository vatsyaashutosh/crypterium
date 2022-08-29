import React from "react";
import {
  DoughnutContainer,
  DoughnutElements,
  DoughnutImg,
  GridDiv,
  H5MS2,
  HeadingDiv,
  MS2Container,
  MS2H2,
  MS2H21,
  MS2H5,
  MS2Para,
  TextDiv,
} from "./Style";
import doughnut from "../../../assets/images/donought.png";

export const MiddleSection2 = () => {
  return (
    <MS2Container>
      <MS2H5>BENEFITS</MS2H5>
      <MS2H2>Facts in digits</MS2H2>
      <GridDiv>
        <HeadingDiv>
          <MS2H21>$20.0M</MS2H21>
          <MS2Para>The amount of finance in the system</MS2Para>
        </HeadingDiv>
        <HeadingDiv>
          <MS2H21>25.000</MS2H21>
          <MS2Para>Active users</MS2Para>
        </HeadingDiv>
        <HeadingDiv>
          <MS2H21>32</MS2H21>
          <MS2Para>Supported countries</MS2Para>
        </HeadingDiv>
      </GridDiv>
      <DoughnutContainer>
        <DoughnutElements>
          <MS2H5 textAlign="left" color="black">
            SOME FACTS
          </MS2H5>
          <MS2H2 textAlign="left" color="black">
            Initial Coin Offering
          </MS2H2>
          <H5MS2>Amount of tokens 42 000 000:</H5MS2>
          <TextDiv>
            80% ICO <br />
            15% KYC team <br />
            5% Operation cost
          </TextDiv>
        </DoughnutElements>
        <DoughnutElements>
          <DoughnutImg src={doughnut} />
        </DoughnutElements>
      </DoughnutContainer>
    </MS2Container>
  );
};
