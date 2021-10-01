import React from "react";
import styled from "styled-components";
const SpinnerSt = styled.div`
  width: 100%;
  height: 100%;
  background: #e4e4e4;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .spinner {
    width: 3rem;
    height: 3rem;
    background-color: #333;
    margin: 100px auto;
    -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
    animation: sk-rotateplane 1.2s infinite ease-in-out;
  }
  .loadingText {
    font-family: sans-serif;
    font-weight: 100;
    font-size: 1rem;
    color: #242424;
  }

  @-webkit-keyframes sk-rotateplane {
    0% {
      -webkit-transform: perspective(120px);
    }
    50% {
      -webkit-transform: perspective(120px) rotateY(180deg);
    }
    100% {
      -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
    }
  }

  @keyframes sk-rotateplane {
    0% {
      transform: perspective(120px) rotateX(0deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }
    50% {
      transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
      -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    }
    100% {
      transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
      -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
  }

  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    .spinner {
      width: 5rem;
      height: 5rem;
      background-color: #333;
      margin: 100px auto;
      -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
      animation: sk-rotateplane 1.2s infinite ease-in-out;
    }
    .loadingText {
      font-size: 2rem;
    }
  }
`;
const Spinner = () => {
  return (
    <SpinnerSt>
      <div className="spinner"></div>
      <span className="loadingText">Cargando...</span>
    </SpinnerSt>
  );
};

export default Spinner;
