import React from "react";
import styled from "styled-components";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
// *Redux
// import { useSelector } from "react-redux";
// import { showMenu } from "redux/actions/appAction";

//* INTERFACE APP
// import { StoreInterface } from "interfaces/storeTemplate";
// *Components
import Home from "./home/pages/Home";
import Error404 from "./home/pages/Error404";
// import Menu from "./organisms/Menu";
// *Fonts
import "fonts/fonts.css";
// import FloatMenu from "./home/organisms/FloatMenu";
import Admin from "./Admin/Admin";

const AppSt = styled.div`
  width: 100%;
  height: 100%;
  /* background: #e4e4e4;
  display: flex;
  justify-content: center;
  align-items: center; */
  .toast {
    width: auto;
    height: 3rem;
    background: #ffffff;
    font-family: "Roboto 300";
    font-size: 1rem;
    user-select: none;
  }
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
  }
`;

function App() {
  // const dispacth = useDispatch();
  // const handleShowMenu = () => {
  //   dispacth(showMenu(!app.showMenu));
  // };
  return (
    <Router>
      <AppSt id="app">
        <Toaster
          toastOptions={{
            className: "toast",
          }}
        />
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
