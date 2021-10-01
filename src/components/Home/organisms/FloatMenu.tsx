import React from "react";
import styled from "styled-components";
// *Icons
import CloseIcon from "icons/CloseIcon";
// *Redux
import { useDispatch, useSelector } from "react-redux";
import { showMenu } from "redux/actions/appAction";
//* INTERFACE APP
import { StoreInterface } from "interfaces/storeTemplate";
// *Components
import HomeMenu from "components/Home/molecules/HomeMenu";
const FloatMenuSt = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  .bgDark {
    width: 100%;
    height: 100%;
    /* backdrop-filter: blur(5px); */
    cursor: pointer;
    background: #000000b2;
    position: relative;

    .closeIcon {
      background: #ffffff;
      width: 2.5rem;
      height: 2.5rem;
      position: absolute;
      right: 1rem;
      top: 1rem;
      color: black;
      padding: 0.5rem;
      border-radius: 100%;
      cursor: pointer;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
  }
  .menuLeft {
    position: absolute;
    left: 0;
    width: 80%;
    height: 100%;
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    .bgDark {
      .closeIcon {
        left: 21rem;
      }
    }
    .menuLeft {
      width: 20rem;
    }
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
      <div className="bgDark" onClick={handleShowMenu}>
        <CloseIcon className="closeIcon" />
      </div>
      <div className="menuLeft">
        <HomeMenu />
      </div>
    </FloatMenuSt>
  );
};

export default FloatMenu;
