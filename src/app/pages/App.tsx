import React from "react";
import "./App.css";
import { HomePageContainer } from "./Styled";
import { Header } from "../components/header/Header";
import { MiddleSection } from "../components/middleSection/MiddleSection";
import { MiddleSection1 } from "../components/middleSection1/MiddleSection1";
import { MiddleSection2 } from "../components/middleSection2/MiddleSection2";

function App() {
  return (
    <HomePageContainer>
      <MiddleSection />
      <MiddleSection1 />
      <MiddleSection2 />
    </HomePageContainer>
  );
}

export default App;
