import React from "react";
import styled from "styled-components";
// import { Games } from "json/games";
const HomeGamesSt = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 90vw;
  grid-auto-rows: 120vw;
  gap: 1rem;
  justify-content: center;
  align-content: center;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  }

  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    grid-template-columns: 23% 23% 23% 23%;
    grid-auto-rows: 25rem;
    gap: 1rem;
  }
`;
interface Props {
  img: string;
}
const HomeGames = (props: Props) => {
  return (
    <HomeGamesSt>
      {/* {Games.map((i) => (
        <img
          key={i.title}
          src={i.img}
          title={i.title}
          alt={i.title}
          loading="lazy"
        />
      ))} */}
    </HomeGamesSt>
  );
};

export default HomeGames;
