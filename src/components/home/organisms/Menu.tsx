import React from "react";
import styled from "styled-components";
// *Images
import NaviLogo from "img/logo-navi.png";
// *Icons
import InformationIcon from "icons/InformationIcon";
import FacebookIcon from "icons/FacebookIcon";

const MenuSt = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: #070707;

  .naviLogo {
    width: 15rem;
    height: 15rem;
  }
  .wifiTitle {
    font-family: "Roboto 100";
    font-size: 2rem;
    width: 15rem;
    color: white;
    margin-bottom: 0.5rem;
  }
  .wifiSection {
    font-family: "Roboto 100";
    font-size: 2rem;
    width: 80%;
    height: 3rem;
    background: #121213;
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: start;
    align-items: center;
    border: 0.0625rem solid #1f1f1f;
    border-radius: 0%.2rem;
    .sysIcon {
      color: white;
      width: 2rem;
      height: 2rem;
      font-family: 2rem;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
    .miniIcon {
      color: red;
    }
    .text {
      width: 12rem;
      height: 3rem;
      font-family: "Roboto 300";
      font-size: 1.2rem;
      display: flex;
      justify-content: start;
      align-items: center;
      color: white;
      text-decoration: none;
    }
    .miniText {
      font-size: 0.8rem;
      color: red;
    }
  }
  .noBg {
    background: none;
    border: none;
  }
  .date {
    color: #929292;
    font-family: "Roboto 300";
    font-size: 0.8rem;
    position: absolute;
    bottom: 1rem;
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
  }
`;
const Menu = () => {
  const date = new Date().getFullYear();

  return (
    <MenuSt>
      <img className="naviLogo" src={NaviLogo} alt="logotipo navi" />
      <h2 className="wifiTitle">Wi - Fi</h2>
      <span className="wifiSection ">
        <InformationIcon className="sysIcon" />{" "}
        <p className="text">Natus Vincere</p>
      </span>
      <span className="wifiSection ">
        <InformationIcon className="sysIcon" />{" "}
        <p className="text">relax3000</p>
      </span>
      <span className="wifiSection noBg">
        <InformationIcon className="sysIcon miniIcon" />
        <p className="text miniText">
          Recuerda que la constraseña es renovada aleatoriamente.
        </p>
      </span>
      <a href="https://www.facebook.com/NaviGamesCbba"></a>
      <span className="wifiSection noBg">
        <FacebookIcon className="sysIcon" />
        <a className="text " href="https://www.facebook.com/NaviGamesCbba">
          Facebook
        </a>
      </span>
      <span className="date">Navi Games Cbba 2013 - {date}</span>
    </MenuSt>
  );
};

export default Menu;
