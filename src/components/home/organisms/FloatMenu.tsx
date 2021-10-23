import React from "react";
import styled from "styled-components";
// import { NavLink } from "react-router-dom";
// *Icons
import CloseIcon from "icons/CloseIcon";
// import InformationIcon from "icons/InformationIcon";

// *Images
// import NaviLogo from "img/logo-navi.png";
// import NaviFb from "img/logo-fb.png";
// *Redux
import { useDispatch, useSelector } from "react-redux";
import { showMenu } from "redux/actions/appAction";
//* INTERFACE APP
import { StoreInterface } from "interfaces/storeTemplate";
// import NavLinkComponent from "components/home/atoms/NavLinkComponent";
import Menu from "./Menu";
// import { NavLink } from "react-router-dom";
// import { section } from "react-router-dom";
const FloatMenuSt = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  .closeIcon {
    background: #ffffff;
    width: 2.5rem;
    height: 2.5rem;
    position: absolute;
    left: 84%;
    top: 1rem;
    color: black;
    padding: 0.2rem;
    border-radius: 100%;
    cursor: pointer;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
  .menuBgBlur {
    width: 100%;
    height: 100%;
    backdrop-filter: blur(5px);
    cursor: pointer;
    background: #000000b2;
  }
  .navigation {
    width: 80%;
    height: 100%;
    background: red;
    position: absolute;
    left: 0;
    top: 0;
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    display: none;
  }
`;

const FloatMenu = () => {
  const dispatch = useDispatch();
  const app = useSelector((store: StoreInterface) => store.app);

  const handleShowMenu = (): void => {
    dispatch(showMenu(!app.showMenu));
  };

  return (
    <FloatMenuSt>
      <div className="menuBgBlur" onClick={handleShowMenu}></div>
      <CloseIcon className="closeIcon" onClick={handleShowMenu} />
      <div className="navigation">
        <Menu />
      </div>
    </FloatMenuSt>
  );
};

export default FloatMenu;
