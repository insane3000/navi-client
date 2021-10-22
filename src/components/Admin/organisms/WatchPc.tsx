import React from "react";
import styled from "styled-components";

const AddPcSt = styled.nav`
  width: 100%;
  height: 100%;
  color: white;
  background: #4400ff;

  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
  }
`;
const Addpc = () => {
  return <AddPcSt>Watch pc</AddPcSt>;
};

export default Addpc;
