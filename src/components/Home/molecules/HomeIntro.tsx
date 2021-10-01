import React from "react";
import styled from "styled-components";

// *Images
import Mascota from "img/mascota.webp";
const HomeIntroSt = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  float: right;
  .introImg {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    img {
      width: 80%;
      height: auto;
      animation: invoker 2s linear 0s infinite alternate both;
      position: absolute;
      object-fit: cover;
    }
  }
  .introData {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  h2 {
    font-family: "Roboto 900";
    font-size: 2rem;
  }
  h3 {
    font-family: "Roboto 100";
    font-size: 1.2rem;
  }
  span {
    font-family: "Roboto 300";
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    /* width: calc(100% - 20rem); */
    height: 60vh;
    flex-direction: row-reverse;
    .introData {
      width: auto;
      height: 100%;
      align-items: flex-start;
      margin-left: 2rem;
    }
    h2 {
      font-size: 5rem;
    }
    h3 {
      font-size: 2rem;
    }

    .introImg {
      width: 30%;
      height: 100%;
      img {
      }
    }
  }
`;
const HomeIntro = () => {
  return (
    <HomeIntroSt id="banner">
      <div className="introImg">
        <img src={Mascota} alt="mascota" />
      </div>
      <div className="introData">
        <h2>Navi Games Cbba</h2>
        <h3>
          Un lugar tranquilo para jugar... <br />
          {/* Con tu cuenta{" "}<span>Inmortal.</span> */}
        </h3>
      </div>
    </HomeIntroSt>
  );
};

export default HomeIntro;
