import React from "react";
import styled from "styled-components";
import HomeMenu from "components/Home/molecules/HomeMenu";
const MenuLeftSt = styled.div`
  display: none;

  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    display: flex;
    width: 20rem;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const HomeLeft = () => {
  return (
    <MenuLeftSt>
      <HomeMenu />
    </MenuLeftSt>
  );
};

export default HomeLeft;
