import React from "react";
import styled from "styled-components";
import Menu from "./Menu";
const HomeMenuSt = styled.div`
  background: #070707;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    display: flex;
  }
`;
const HomeMenu = () => {
  return (
    <HomeMenuSt>
      <Menu />
    </HomeMenuSt>
  );
};

export default HomeMenu;
