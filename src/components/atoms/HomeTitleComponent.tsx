import React from "react";
import styled from "styled-components";
interface PropsSt {
  bg: string;
  color: string;
}
const HomeTitleComponentSt = styled.div<PropsSt>`
  width: 100%;
  height: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex;

  .title {
    background: ${(props) => props.bg};
    width: auto;
    height: auto;
    padding: 1rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.color};
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: 1rem;
    font-family: "Roboto 900";
    font-size: 6vw;
    text-transform: uppercase;
    border-radius: 0.2rem;
  }

  .line {
    width: 95%;
    margin-left: 1rem;
    margin-bottom: 1rem;
    font-family: "Roboto 300";
    font-weight: 300;
    color: #000000;
    font-size: 1.3rem;
    line-height: 1.3rem;
  }

  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    align-items: flex-start;
    .title {
      padding: 1rem 2rem;
      font-size: 3rem;
    }
    .line {
      font-size: 2rem;
      line-height: 2rem;
    }
  }
`;
interface Props {
  title: string;
  bgTitle: string;
  color: string;
  line01: string;
  line02: string;
}
const HomeTitleComponent = (props: Props) => {
  return (
    <HomeTitleComponentSt bg={props.bgTitle} color={props.color}>
      <h2 className="title">{props.title}</h2>
      <p className="line">{props.line01}</p>
      <p className="line">{props.line02}</p>
    </HomeTitleComponentSt>
  );
};

export default HomeTitleComponent;
