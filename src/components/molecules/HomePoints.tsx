import React from "react";
import styled from "styled-components";
const HomePointsSt = styled.div`
  width: 100%;
  height: 100vh;
  background: black;
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
  }
`;
const HomePoints = () => {
  return <HomePointsSt></HomePointsSt>;
};

export default HomePoints;
