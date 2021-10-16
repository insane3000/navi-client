import { StoreInterface } from "interfaces/storeTemplate";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router";

const NavigationSt = styled.nav`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 2.5rem);
  grid-auto-rows: 2.5rem;
  gap: 0.2rem;
  justify-content: center;
  align-content: center;
  background: #0c0c0c;
  border-bottom: 0.0625rem solid #333333;
  .navLink {
    background: #222222;
    border-radius: 0.3rem;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Roboto 300";
    font-size: 0.5rem;
    text-align: center;
  }
  .activeNavLink {
    background: #6200ff;
  }
  @media only screen and (min-width: 568px) {
    display: grid;
    grid-template-columns: 5rem;
    grid-auto-rows: 5rem;
    gap: 0.5rem;
    justify-content: center;
    align-content: center;
    background: #0c0c0c;
    border-right: 0.0625rem solid #333333;
    .navLink {
      width: 100%;
      height: 100%;
      background: #222222;
      border-radius: 0.3rem;
      text-decoration: none;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
      font-family: "Roboto 300";
      font-size: 0.7rem;
    }
    .activeNavLink {
      background: #6200ff;
    }
  }
`;
const Navigation = () => {
  const history = useHistory();
  const app = useSelector((store: StoreInterface) => store.app);
  const reloadPage = (e: any) => {
    history.push(`/admin`);
    window.location.reload();
  };
  return (
    <NavigationSt>
      {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
        <NavLink
          className="navLink"
          activeClassName="activeNavLink"
          to="/admin/add-product"
        >
          Add Product
        </NavLink>
      ) : null}
      {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
        <NavLink
          className="navLink"
          activeClassName="activeNavLink"
          to="/admin/products"
        >
          Products
        </NavLink>
      ) : null}

      {app.login.user !== "" ? (
        <NavLink
          className="navLink"
          activeClassName="activeNavLink"
          to="/admin/reports"
        >
          Reportes
        </NavLink>
      ) : null}

      {app.login.user !== "" ? (
        <NavLink
          className="navLink"
          activeClassName="activeNavLink"
          to="/admin/cash-register"
        >
          Caja
        </NavLink>
      ) : null}
      {app.login.user !== "" ? (
        <NavLink
          className="navLink"
          activeClassName="activeNavLink"
          to="/admin/charts"
        >
          Charts 01
        </NavLink>
      ) : null}
      {app.login.user !== "" ? (
        <NavLink
          className="navLink"
          activeClassName="activeNavLink"
          to="/admin/charts02"
        >
          Charts 02
        </NavLink>
      ) : null}
      {app.login.user !== "" ? (
        <NavLink
          className="navLink"
          activeClassName="activeNavLink"
          to="/admin/users"
        >
          Servers
        </NavLink>
      ) : null}
      {app.login.user === "" ? (
        <NavLink
          className="navLink"
          activeClassName="activeNavLink"
          to="/admin/login"
        >
          Entrar
        </NavLink>
      ) : (
        <NavLink
          className="navLink"
          activeClassName="activeNavLink"
          to="/admin/login"
          onClick={reloadPage}
        >
          Salir
        </NavLink>
      )}
    </NavigationSt>
  );
};

export default Navigation;
