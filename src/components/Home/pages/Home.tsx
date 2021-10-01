import styled from "styled-components";
// *Components
import Main from "components/Home/organisms/Main";
import FloatMenu from "components/Home/organisms/FloatMenu";

// import { Switch, Route } from "react-router-dom";

// *Redux
import { useDispatch, useSelector } from "react-redux";
import { showMenu } from "redux/actions/appAction";

//* INTERFACE APP
import { StoreInterface } from "interfaces/storeTemplate";

const HomeSt = styled.div`
  width: 100%;
  /* min-height: 100vh; */

  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
  }
`;

const Home = () => {
  const app = useSelector((store: StoreInterface) => store.app);

  return (
    <HomeSt id="home">
      <Main />
      {app.showMenu && <FloatMenu />}
    </HomeSt>
  );
};

export default Home;
