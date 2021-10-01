import React from "react";
import styled from "styled-components";

const HomeProductSt = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 0.3rem;
  overflow: hidden;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  .price {
    padding: 0.4rem 0.5rem;
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    border-radius: 0.2rem;
    background: #ff004c;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    color: white;
    font-family: "Roboto 900";
    font-size: 1rem;
  }
  .imgProduct {
    width: 100%;
    height: 80%;
    object-fit: cover;
  }
  .data {
    width: 100%;
    height: 20%;

    .title {
      font-family: "Roboto 900";
      font-size: 1.3rem;
      padding: 0 0.5rem;
      margin-bottom: 0.2rem;
      text-align: center;
    }
    .description {
      font-family: "Roboto 100";
      font-size: 0.8rem;
      padding: 0 0.5rem;
    }
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    .price {
    }
    .imgProduct {
    }
    .data {
      .title {
      }
      .description {
        font-size: 0.7rem;
      }
    }
  }
`;
interface Props {
  img: string;
  title: string;
  description: string;
  price: number;
}
const HomeProduct = (props: Props) => {
  return (
    <HomeProductSt>
      <img
        className="imgProduct"
        src={props.img}
        alt="product image"
        loading="lazy"
      />
      <div className="data">
        <h2 className="title">{props.title}</h2>
        <h3 className="description">{props.description}</h3>
      </div>
      <span className="price">{props.price} Puntos</span>
    </HomeProductSt>
  );
};

export default HomeProduct;
