import React from "react";
import styled from "styled-components";
const ErrorSt = styled.div`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  h1 {
    font-family: "Roboto 900", sans-serif;
    font-weight: 900;
    font-size: 4rem;
  }
  h2 {
    font-family: "Roboto 900", sans-serif;
    font-weight: 900;
    font-size: 2rem;
  }
  span {
    font-family: "Roboto 900", sans-serif;
    font-weight: 900;
    font-size: 1rem;
    margin-top: 0.5rem;
    color: white;
  }
`;
const Error404 = () => {
  return (
    <ErrorSt>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <span>La pagina que quieres buscar, no esta disponible...</span>
    </ErrorSt>
  );
};

export default Error404;
