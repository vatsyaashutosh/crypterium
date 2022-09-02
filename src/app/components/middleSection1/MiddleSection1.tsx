import logo1 from "../../../assets/images/a.png";
import logo2 from "../../../assets/images/b.png";
import logo3 from "../../../assets/images/c.png";
import logo4 from "../../../assets/images/d.png";
import logo5 from "../../../assets/images/e.png";
import bg2 from "../../../assets/images/bg2.png";
import yt from "../../../assets/images/yt.png";
import g1 from "../../../assets/images/1_1.png";
import g2 from "../../../assets/images/2_1.png";
import g3 from "../../../assets/images/3_1.png";
import g4 from "../../../assets/images/4_1.png";
import g5 from "../../../assets/images/5_1.png";
import g6 from "../../../assets/images/6_1.png";

import {
  AbsoluteDiv,
  FlexContainer,
  FlexContainerItems,
  GridContainer,
  GridElement,
  GridImg,
  GridPara,
  H2,
  H3,
  H5,
  LogoDiv,
  LogoImg,
  MidButton,
  MiddleContainer1,
  MidImage,
  MidImage2,
  MidPara,
  RelativeDiv,
  Span1,
} from "./Style";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";

export const MiddleSection1 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <MiddleContainer1>
      <LogoDiv>
        <LogoImg src={logo1} />
        <LogoImg src={logo2} />
        <LogoImg src={logo3} />
        <LogoImg src={logo4} />
        <LogoImg src={logo5} />
      </LogoDiv>
      <FlexContainer>
        <FlexContainerItems data="fade-right" value={470}>
          <H5>OUR MISSION</H5>
          <H2>Crypterium is the Best Ceowdsale Service!</H2>
          <MidButton>Buy Tokens</MidButton>
        </FlexContainerItems>
        <FlexContainerItems data="fade-down" value={700}>
          <MidPara>
            JavaScript is also used in environments that aren’t web-based, such
            as PDF documents, site-specific browsers, and desktop widgets.
          </MidPara>
          <MidPara>
            Newer and faster JavaScript virtual machines (VMs) and platforms
            built upon them have also increased the popularity of JavaScript for
            server-side web applications. On the client side, JavaScript has
            been traditionally implemented as an interpreted language, but more
            recent browsers perform just-in-time compilation.
          </MidPara>
        </FlexContainerItems>
      </FlexContainer>
      <RelativeDiv data="fade-up">
        <MidImage src={bg2} />
        <AbsoluteDiv>
          <MidImage2 src={yt} />
          <Span1>Video</Span1>
        </AbsoluteDiv>
      </RelativeDiv>
      <H5>MEET THE PRODUCT</H5>
      <H2>Beautiful, functional and nearly ready to launch</H2>
      <GridContainer>
        <GridElement data="fade-up">
          <GridImg src={g1} />
          <H3>Mobile App</H3>
          <GridPara>
            Hoki lamprey Japanese eel; loach catfish deep sea bonefish
            long-finned pike finback cat shark gunnel. Shiner eel cod striped
            bass
          </GridPara>
        </GridElement>
        <GridElement data="fade-up">
          <GridImg src={g2} />
          <H3>Insurance Protection</H3>
          <GridPara>
            ack California flyingfish Devario walleye french angelfish red
            snapper; ghoul: sea raven. Barreleye slipmouth yellowfin grouper
          </GridPara>
        </GridElement>
        <GridElement data="fade-up">
          <GridImg src={g3} />
          <H3>Secure Storage</H3>
          <GridPara>
            Whitebait Pacific viperfish, grideye boafish Canthigaster rostrata
            brook lamprey, rock cod Billfish, brook lamprey collared
          </GridPara>
        </GridElement>
        <GridElement data="fade-up">
          <GridImg src={g4} />
          <H3>Exchange Service</H3>
          <GridPara>
            Yellow moray, Reedfish sergeant major. Blue-redstripe danio kappy
            Sevan trout crocodile icefish collared carpetshark.
          </GridPara>
        </GridElement>
        <GridElement data="fade-up">
          <GridImg src={g5} />
          <H3>Credit Card Use</H3>
          <GridPara>
            Weatherfish dragon goby mullet Bengal danio long-whiskered catfish
            gray mullet boga prickly shark banjo catfish.
          </GridPara>
        </GridElement>
        <GridElement data="fade-up">
          <GridImg src={g6} />
          <H3>Multycurrency Wallet</H3>
          <GridPara>
            Dolly Varden trout sturgeon, morwong houndshark. Mooneye bobtail
            snipe eel bichir slimy sculpin armorhead catfish
          </GridPara>
        </GridElement>
      </GridContainer>
    </MiddleContainer1>
  );
};
