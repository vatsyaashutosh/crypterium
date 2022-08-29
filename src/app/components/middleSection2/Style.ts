import styled from "styled-components";
import bb from "../../../assets/images/backgroundImage.png";
import bb2 from "../../../assets/images/sectoin_bg_3.png";

export const MS2Container = styled.div`
  height: 500px;
  width: 100%;
  background: url(${bb});
`;
interface I_Props {
  color?: string;
  textAlign?: string;
}
export const MS2H5 = styled.h5<I_Props>`
  font-size: 16px;
  font-family: sans-serif;

  padding-top: 150px;
  color: ${(props) => (props.color === "black" ? "#888a8b" : "white")};
  padding-right: 30px;
  text-align: ${(props) => (props.textAlign === "left" ? "left" : "center")};
  font-weight: 100;
  @media screen and (max-width: 800px) {
    padding-top: 0;
  }
`;
export const MS2H2 = styled.h2<I_Props>`
  font-size: 40px;

  font-family: sans-serif;
  color: ${(props) => (props.color === "black" ? "#404040" : "white")};
  text-align: ${(props) => (props.textAlign === "left" ? "left" : "center")};
`;
export const MS2H21 = styled(MS2H2)`
  font-size: 45px;
  margin: 0;
  text-align: left;
`;
export const HeadingDiv = styled.div``;
export const MS2Para = styled.p`
  color: white;
  text-align: left;
  font-size: 18px;
  margin: 0;
`;
export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  width: 80%;
  margin: auto;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;
export const DoughnutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 1200px;
  height: 100vh;
  margin: auto;
  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(1, 1fr);
  }
  background: url(${bb2});
  width: 100%;
  margin-top: 200px;
`;
export const DoughnutElements = styled.div`
  margin-top: 200px;
`;
export const H5MS2 = styled.h5`
  font-size: 20px;
  text-align: left;
  color: #404040;
`;
export const DoughnutImg = styled.img`
  width: 100%;
`;
export const TextDiv = styled.div`
  font-size: 18px;
  color: #888a8b;
  font-weight: 600;
`;
