import React from "react";
import {
  MainHeading,
  MiddleButton,
  MiddleContainer,
  MiddleContainer0,
  MiddlePara,
  ProgressImage,
} from "./Style";
import progress from "../../../assets/images/progressbar.png";
import { Header } from "../header/Header";

export const MiddleSection = () => {
  return (
    <MiddleContainer0>
      <Header />
      <MiddleContainer>
        <MainHeading>Crowdsale is open!</MainHeading>
        <ProgressImage src={progress} />
        <MiddlePara>
          Service that allows to verify users and to prevent fraud. It is based
          on blockchain technology as a tool for protecting and validating
          personal data of Internet users.
        </MiddlePara>
        <MiddleButton color="green">Get White Papper </MiddleButton>
        <MiddleButton color="blue">Onepagger </MiddleButton>
      </MiddleContainer>
    </MiddleContainer0>
  );
};
