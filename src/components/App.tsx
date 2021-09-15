import React from "react";
import styled from "styled-components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// *Redux
import { useDispatch, useSelector } from "react-redux";
import { showMenu } from "redux/actions/appAction";

//* INTERFACE APP
import { StoreInterface } from "interfaces/storeTemplate";
// *Components
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Menu from "./organisms/Menu";
// *Fonts
import "fonts/fonts.css";
import FloatMenu from "./organisms/FloatMenu";

const AppSt = styled.div`
  width: 100%;
  height: 100%;
  /* background: #e4e4e4;
  display: flex;
  justify-content: center;
  align-items: center; */
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
  }
`;

function App() {
  const dispacth = useDispatch();
  const app = useSelector((store: StoreInterface) => store.app);
  const handleShowMenu = () => {
    dispacth(showMenu(!app.showMenu));
  };
  return (
    <Router>
      <AppSt id="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={Error404} />
        </Switch>
      </AppSt>
      {app.showMenu && <FloatMenu />}
    </Router>
  );
}

export default App;
