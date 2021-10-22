import { StoreInterface } from "interfaces/storeTemplate";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router";
// *Icons
import UserIconLight from "icons/UserIconLight";
import MaintenanceIcon from "icons/MaintenanceIcon";
import AddProductIcon from "icons/AddProductIcon";
import ProductsIcon from "icons/ProductsIcon";
import ReportsIcon from "icons/ReportsIcon";
import CloudIcon from "icons/CloudIcon";
import ChartsIcon from "icons/ChartIcon";
import ServersIcon from "icons/ServersIcon";
import LogoutIcon from "icons/LogoutIcon";
import LoginIcon from "icons/LoginIcon";
import { loginServer } from "redux/actions/appAction";
const NavigationSt = styled.nav`
  width: 100%;
  height: 100%;
  display: grid;
  /* grid-template-columns: repeat(auto-fit, 2.5rem); */
  grid-template-columns: 2.5rem 2.5rem 2.5rem 2.5rem 2.5rem 2.5rem 2.5rem 2.5rem 2.5rem 2.5rem;
  grid-auto-rows: 2.5rem;
  gap: 0.2rem;
  justify-content: start;
  align-content: center;
  background: #0c0c0c;
  border-bottom: 0.0625rem solid #333333;
  overflow-y: scroll;
  padding: 0 0.5rem;
  .navLink {
    background: #222222;
    border-radius: 0.3rem;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    /* font-family: "Roboto 300";
    font-size: 0.5rem;
    text-align: center; */
    .sysIcon {
      width: 1.5rem;
      height: 1.5rem;
    }
    .text {
    }
    .none {
      display: none;
    }
  }
  .activeNavLink {
    background: #6200ff;
  }
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    display: grid;
    grid-template-columns: 5rem;
    grid-auto-rows: 5rem;
    gap: 0.5rem;
    justify-content: center;
    align-content: flex-start;
    background: #0c0c0c;
    border-right: 0.0625rem solid #333333;
    overflow-y: scroll;
    padding: 1rem 0;

    .navLink {
      width: 100%;
      height: 100%;
      background: #222222;
      border-radius: 0.3rem;
      text-decoration: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #a8a8a8;

      .sysIcon {
        width: 3rem;
        height: 3rem;
      }
      .text {
        margin-top: 0.2rem;
        font-family: "Roboto 300";
        font-size: 0.6rem;
      }
      .none {
        display: flex;
      }
      :hover {
        background: #6200ffe6;
        color: white;
      }
    }
    .activeNavLink {
      background: #6200ff;
      color: white;
    }
  }
`;
const Navigation = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const app = useSelector((store: StoreInterface) => store.app);
  const reloadPage = (e: any) => {
    dispatch(loginServer("", ""));
    localStorage.setItem("token", "");
    localStorage.setItem("user", "");
    history.push(`admin/login`);
  };
  return (
    <NavigationSt>
      {app.login.user !== "" ? (
        <NavLink
          className="navLink"
          activeClassName="activeNavLink"
          to="/admin/user"
        >
          <UserIconLight className="sysIcon" />
          <span className="text none">User</span>
        </NavLink>
      ) : null}
      {app.login.user !== "" ? (
        <NavLink
          className="navLink"
          activeClassName="activeNavLink"
          to="/admin/maintenance"
        >
          <MaintenanceIcon className="sysIcon" />
          <span className="text none">Mantenimiento</span>
        </NavLink>
      ) : null}
      {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
        <NavLink
          className="navLink"
          activeClassName="activeNavLink"
          to="/admin/add-product"
        >
          <AddProductIcon className="sysIcon" />
          <span className="text none">Add Product</span>
        </NavLink>
      ) : null}
      {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
        <NavLink
          className="navLink"
          activeClassName="activeNavLink"
          to="/admin/products"
        >
          <ProductsIcon className="sysIcon" />
          <span className="text none">Products</span>
        </NavLink>
      ) : null}

      {app.login.user !== "" ? (
        <NavLink
          className="navLink"
          activeClassName="activeNavLink"
          to="/admin/reports"
        >
          <ReportsIcon className="sysIcon" />
          <span className="text none">Reportes</span>
        </NavLink>
      ) : null}

      {app.login.user !== "" ? (
        <NavLink
          className="navLink"
          activeClassName="activeNavLink"
          to="/admin/cash-register"
        >
          <CloudIcon className="sysIcon" />
          <span className="text none">Caja</span>
        </NavLink>
      ) : null}
      {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
        <NavLink
          className="navLink"
          activeClassName="activeNavLink"
          to="/admin/charts"
        >
          <ChartsIcon className="sysIcon" />
          <span className="text none">Charts 01</span>
        </NavLink>
      ) : null}
      {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
        <NavLink
          className="navLink"
          activeClassName="activeNavLink"
          to="/admin/charts02"
        >
          <ChartsIcon className="sysIcon" />
          <span className="text none">Charts 02</span>
        </NavLink>
      ) : null}
      {app.login.user !== "" ? (
        <NavLink
          className="navLink"
          activeClassName="activeNavLink"
          to="/admin/servers"
        >
          <ServersIcon className="sysIcon" />
          <span className="text none">Servers</span>
        </NavLink>
      ) : null}
      {app.login.user === "" ? (
        <NavLink
          className="navLink"
          activeClassName="activeNavLink"
          to="/admin/login"
        >
          <LoginIcon className="sysIcon" />
          <span className="text none">Entrar</span>
        </NavLink>
      ) : (
        <NavLink
          className="navLink"
          activeClassName="activeNavLink"
          to="/admin/login"
          onClick={reloadPage}
        >
          <LogoutIcon className="sysIcon" />
          <span className="text none">Salir</span>
        </NavLink>
      )}
    </NavigationSt>
  );
};

export default Navigation;
