import styled from "styled-components";
// *Components
import HomeMenu from "components/home/organisms/HomeLeft";
import HomePage from "components/home/organisms/HomeRight";
import { useDispatch, useSelector } from "react-redux";
import { StoreInterface } from "interfaces/storeTemplate";
import FloatMenu from "../organisms/FloatMenu";
import { showMenu } from "redux/actions/appAction";
// import { Switch, Route } from "react-router-dom";

// *Redux
// import { useSelector } from "react-redux";
//* INTERFACE APP
// import { StoreInterface } from "interfaces/storeTemplate";
// *Components
// import RightWindow from "components/organisms/RightWindow";
// import EmptyWindow from "components/organisms/EmptyWindow";
// *ICons
import MenuIcon from "icons/MenuIcon";
const HomeSt = styled.div`
  width: 100%;
  height: 100%;
  background: #e4e4e4;
  position: relative;
  overflow: hidden;
  .hamburguer {
    width: 3rem;
    height: 3rem;
    background: #ffffff;
    position: fixed;
    top: 1rem;
    left: 1rem;
    padding: 0.4rem;
    color: black;
    border-radius: 0.2rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    cursor: pointer;
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 100%;
    .hamburguer {
      display: none;
    }
  }
`;

const Home = () => {
  const dispatch = useDispatch();

  const app = useSelector((store: StoreInterface) => store.app);
  const handleShowMenu = (): void => {
    dispatch(showMenu(!app.showMenu));
  };
  return (
    <HomeSt id="home">
      <HomeMenu />
      <HomePage />
      <MenuIcon className="hamburguer" onClick={handleShowMenu} />
      {app.showMenu && <FloatMenu />}
    </HomeSt>
  );
};

export default Home;
