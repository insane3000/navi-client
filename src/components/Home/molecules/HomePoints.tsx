<<<<<<< HEAD:src/components/Home/molecules/HomePoints.tsx
import HomeProduct from "components/Home/atoms/HomeProduct";
=======
>>>>>>> parent of 9f08bfe (right finished):src/components/molecules/HomePoints.tsx
import React from "react";
import styled from "styled-components";
const HomePointsSt = styled.div`
  width: 100%;
<<<<<<< HEAD:src/components/Home/molecules/HomePoints.tsx
  height: auto;
  display: grid;
  grid-template-columns: 80vw;
  grid-auto-rows: 100vw;
  gap: 1rem;
  justify-content: center;
  align-content: center;
=======
  height: 100vh;
  background: black;
>>>>>>> parent of 9f08bfe (right finished):src/components/molecules/HomePoints.tsx
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
  }
`;
const HomePoints = () => {
  return <HomePointsSt></HomePointsSt>;
};

export default HomePoints;
