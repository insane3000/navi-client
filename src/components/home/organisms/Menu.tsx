import React, { useEffect, useState } from "react";
import styled from "styled-components";
// *Images
import NaviLogo from "img/logo-navi.png";
// *Icons
import AlertIcon from "icons/AlertIcon";
import WifiIcon from "icons/WifiIcon";
import LockIcon from "icons/LockIcon";
import FacebookIcon from "icons/FacebookIcon";
import UserIcon from "icons/UserIcon";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { StoreInterface } from "interfaces/storeTemplate";
// *Axios
import { URI } from "config/axios";
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
    border-radius: 0.2rem;
    text-decoration: none;
    .sysIcon {
      color: #ffffff;
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
      font-size: 1rem;
      display: flex;
      justify-content: start;
      align-items: center;
      color: #ffffff;
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
  .noBgHover {
    border-radius: 0rem;
    margin-bottom: 0rem;
    .sysIcon {
      color: #9e9e9e;
    }
    .text {
      color: #9e9e9e;
    }
    &:hover {
      background: #161616;
      .sysIcon {
        color: #ffffff;
      }
      .text {
        color: #ffffff;
      }
    }
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
  const app = useSelector((store: StoreInterface) => store.app);
  const [state, setState] = useState({
    network: "",
    password: "",
  });
  const fetchData = async () => {
    axios
      .get(`${URI}/wifi/62c22119fdee23ecb1982e79`)
      .then(function (response: any) {
        setState(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app.login.user, app.login.token]);

  return (
    <MenuSt>
      <img className="naviLogo" src={NaviLogo} alt="logotipo navi" />
      <h2 className="wifiTitle">Wi - Fi</h2>
      <span className="wifiSection ">
        <WifiIcon className="sysIcon" /> <p className="text">{state.network}</p>
      </span>
      <span className="wifiSection ">
        <LockIcon className="sysIcon" /> <p className="text">{state.password}</p>
      </span>
      <span className="wifiSection noBg">
        <AlertIcon className="sysIcon miniIcon" />
        <p className="text miniText">Recuerda que la constraseña es renovada aleatoriamente.</p>
      </span>
      <span className="wifiSection noBg noBgHover">
        <FacebookIcon className="sysIcon" />
        <a className="text" href="https://www.facebook.com/NaviGamesCbba">
          Facebook
        </a>
      </span>
      <Link className="wifiSection noBg noBgHover" to="/admin">
        <UserIcon className="sysIcon" />
        <span className="text "> Ingresar</span>
      </Link>

      <span className="date">Navi Games Cbba 2013 - {date}</span>
    </MenuSt>
  );
};

export default Menu;
