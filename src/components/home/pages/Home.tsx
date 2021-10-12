import styled from "styled-components";
// *Components
import HomeMenu from "components/home/organisms/HomeLeft";
import HomePage from "components/home/organisms/HomeRight";
// import { Switch, Route } from "react-router-dom";

// *Redux
// import { useSelector } from "react-redux";
//* INTERFACE APP
// import { StoreInterface } from "interfaces/storeTemplate";
// *Components
// import RightWindow from "components/organisms/RightWindow";
// import EmptyWindow from "components/organisms/EmptyWindow";

const HomeSt = styled.div`
  width: 100%;
  /* max-width: 1920px; */
  height: 100%;
  background: #e4e4e4;

  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 100%;
  }
`;

const Home = () => {
  // const app = useSelector((store: StoreInterface) => store.app);

  return (
    <HomeSt id="home">
      <HomeMenu />
      <HomePage />
      <div></div>
    </HomeSt>
  );
};

export default Home;
