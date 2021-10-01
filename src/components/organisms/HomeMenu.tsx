import React from "react";
import styled from "styled-components";
const HomeMenuSt = styled.div`
  background: #070707;
  display: none;
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    display: flex;
  }
`;
const HomeMenu = () => {
  return <HomeMenuSt>home menu</HomeMenuSt>;
};

export default HomeMenu;
