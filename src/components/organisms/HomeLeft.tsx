import React from "react";
import styled from "styled-components";
const HomeMenuSt = styled.div`
  background: #070707;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .date {
    color: #929292;
    font-family: "Roboto 300";
    font-size: .8rem;
    position: absolute;
    bottom: 1rem;
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    display: flex;
  }
`;
const HomeMenu = () => {
  const date = new Date().getFullYear();
  return (
    <HomeMenuSt>
      <span className="date">Navi Games Cbba 2013 - {date}</span>
    </HomeMenuSt>
  );
};

export default HomeMenu;
