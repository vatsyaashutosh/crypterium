import styled from "styled-components";

export const LogoDiv = styled.div`
  width: 90%;
  margin: auto;
  background-color: #002339;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  transform: translate(0, -50%);
`;
export const MiddleContainer1 = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  text-align: center;
  /* border: 1px solid red; */
`;
export const LogoImg = styled.img`
  height: 120px;
`;
export const FlexContainer = styled.div`
  display: flex;
  max-width: 1300px;
  width: 100%;
  margin: auto;

  justify-content: space-between;
  text-align: left;
  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
  }
`;
interface I_Props {
  value: number;
}
export const FlexContainerItems = styled.div<I_Props>`
  max-width: ${(props) => props.value}px;
  width: 100%;
`;
export const H5 = styled.h5`
  color: #888a8b;
  font-size: 16px;

  font-weight: 100;
  margin-bottom: 0;
`;
export const H2 = styled.h2`
  font-size: 40px;
  margin: auto;
  max-width: 600px;
  width: 100%;
  color: #404040;
  margin-top: 20px;
  margin-bottom: 25px;
`;
export const MidButton = styled.button`
  padding: 20px 50px;
  font-size: 16px;
  border-radius: 50px;
  background-color: transparent;
  color: #333333;
  border-left: 2px solid green;
  border-top: 2px solid green;
  border-right: 2px solid blue;
  border-bottom: 2px solid blue;
  transition: 0.25s ease-in;
  &:hover {
    background-color: #43c1a8;
    color: white;
    border: none;
    cursor: pointer;
  }
`;
export const MidPara = styled.p`
  color: #888a8b;
  font-size: 18px;
  margin-bottom: 25px;
  margin-top: 25px;
`;
export const MidImage = styled.img`
  max-width: 628px;
  width: 100%;
  margin-bottom: 100px;
`;

export const MidImage2 = styled.img`
  width: 100px;
  height: 100px;
  opacity: 0.7;
`;
export const AbsoluteDiv = styled.div`
  position: absolute;
  top: 33%;
  left: 49%;
`;
export const RelativeDiv = styled.div`
  position: relative;
`;
export const Span1 = styled.p`
  font-size: 20px;
  margin: 0;
`;
export const GridImg = styled.img`
  max-width: 60px;
  max-height: 60px;
  width: 100%;
`;
export const GridContainer = styled.div`
  display: grid;
  width: 80vw;

  margin: 50px auto;
  gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  text-align: left;
  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const GridElement = styled.div``;
export const GridPara = styled.p`
  font-size: 18px;
  color: #888a8b;
`;
export const H3 = styled.h3`
  font-size: 30px;
`;
