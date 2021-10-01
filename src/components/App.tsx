import React, { Suspense, lazy } from "react";
import styled from "styled-components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
// *Components
import Error404 from "./Error404";
import Admin from "components/Admin/pages/Admin";
// import Spinner from "./Home/atoms/Spinner";
import Home from "components/Home/pages/Home";
// *Fonts
import "fonts/fonts.css";
// // *Lazy loading
// const Home = lazy(() => import("./Home/pages/Home"));
// *!Styles
const AppSt = styled.div`
  width: 100%;
  height: 100%;
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
  }
`;

function App() {
  return (
    <Router>
      <AppSt id="app">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/admin" component={Admin} />
          <Route component={Error404} />
        </Switch>
      </AppSt>
    </Router>
  );
}

export default App;
