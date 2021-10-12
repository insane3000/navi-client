import HomeProduct from "components/home/atoms/HomeProduct";
import React from "react";
import styled from "styled-components";
import { Products } from "json/products";
const HomePointsSt = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 80vw;
  grid-auto-rows: 100vw;
  gap: 1rem;
  justify-content: center;
  align-content: center;

  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    grid-template-columns: 23% 23% 23% 23%;
    grid-auto-rows: 23rem;
    gap: 1rem;
  }
`;
const HomePoints = () => {
  return (
    <HomePointsSt>
      {Products.map((i) => (
        <HomeProduct
          key={i.title}
          img={i.img}
          title={i.title}
          description={i.description}
          price={i.price}
        />
      ))}
    </HomePointsSt>
  );
};

export default HomePoints;
