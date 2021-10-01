import React from "react";
import styled from "styled-components";
// import { NavLink } from "react-router-dom";
// *Icons
import CloseIcon from "icons/CloseIcon";
import InformationIcon from "icons/InformationIcon";

// *Images
import NaviLogo from "img/logo-navi.png";
import NaviFb from "img/logo-fb.png";
// *Redux
import { useDispatch, useSelector } from "react-redux";
import { showMenu } from "redux/actions/appAction";
//* INTERFACE APP
import { StoreInterface } from "interfaces/storeTemplate";
import NavLinkComponent from "components/Home/atoms/NavLinkComponent";
import { NavLink } from "react-router-dom";
// import { section } from "react-router-dom";
const FloatMenuSt = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  .menuBgBlur {
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    cursor: pointer;
    background: #000000b2;
  }
  .navigation {
    width: 20rem;
    height: 100%;
    background: #070707;
    position: absolute;
    left: 0;
    display: grid;
    grid-template-columns: 80%;
    grid-template-rows: 15rem repeat(7, 2.5rem);
    animation: alert 0.3s ease;
    justify-content: center;
    align-content: flex-start;
    @keyframes alert {
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(0%);
      }
    }
    .closeIcon {
      background: #ffffff;
      width: 2.5rem;
      height: 2.5rem;
      position: absolute;
      right: -3rem;
      top: 1rem;
      color: black;
      padding: 0.5rem;
      border-radius: 100%;
      cursor: pointer;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    .naviLogo {
      width: 15rem;
      height: 15rem;
      /* background: red; */
      justify-self: center;
      align-self: center;
      object-fit: cover;
    }
    /* .navLi {
      width: 100%;
      height: 100%;
      color: #ffffff;
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 0 1rem;
      font-family: "Roboto 300", sans-serif;
      font-size: 0.8rem;
      font-weight: 300;
      text-decoration: none;
      cursor: pointer;
      &:hover {
        background: #464646 !important;
      }
      .menuLogo {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.5rem;
      }
      .sysIcon {
        width: 1.5rem;
        height: 1.5rem;
        margin-right: 0.5rem;
      }
    }
    .selected {
      background: #2c2c2c;
    } */
  }
`;
const FacebookIconSt = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  cursor: pointer;
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  .sysImgFb {
    height: 100%;
    width: 100%;
    font-size: 5rem;
    /* object-fit: cover; */
  }
`;
// interface Props {
//   handleShowMenu:  => void;
// }
const FloatMenu = () => {
  const dispatch = useDispatch();
  const app = useSelector((store: StoreInterface) => store.app);

  const handleShowMenu = (): void => {
    dispatch(showMenu(!app.showMenu));
  };

  return (
    <FloatMenuSt>
      <div className="menuBgBlur" onClick={handleShowMenu}></div>
      <div className="navigation">
        <CloseIcon className="closeIcon" onClick={handleShowMenu} />
        <img className="naviLogo" src={NaviLogo} alt="logotipo navi" />
        {/* <NavLink
          activeClassName="selected"
          className="navLi"
          to="/home"
          // onClick={handleShowMenu}
        >
          <InformationIcon className="sysIcon" />
          <span>Home</span>
        </NavLink> */}
        <NavLinkComponent target="/home" title="home" />
        <NavLinkComponent target="/canjea-puntos" title="Canjea tus Puntos" />
        <NavLinkComponent target="/juegos" title="Juegos Actualizados" />
        <NavLinkComponent target="/promos" title="Promociones" />
        <NavLinkComponent target="/ubicacion" title="Ubicacion" />
        <FacebookIconSt href="https://www.facebook.com/NaviGamesCbba">
          <img className="sysImgFb" src={NaviFb} alt="logo facebook" />
        </FacebookIconSt>
      </div>
    </FloatMenuSt>
  );
};

export default FloatMenu;
