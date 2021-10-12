import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationSt = styled.nav`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 2.5rem);
  grid-auto-rows: 2.5rem;
  gap: 0.5rem;
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
  return (
    <NavigationSt>
      <NavLink
        className="navLink"
        activeClassName="activeNavLink"
        to="/admin/add-product"
      >
        Add Product
      </NavLink>

      <NavLink
        className="navLink"
        activeClassName="activeNavLink"
        to="/admin/products"
      >
        Products
      </NavLink>
      <NavLink
        className="navLink"
        activeClassName="activeNavLink"
        to="/admin/cash-register"
      >
        Caja
      </NavLink>
      <NavLink
        className="navLink"
        activeClassName="activeNavLink"
        to="/admin/reports"
      >
        Reports
      </NavLink>
      <NavLink
        className="navLink"
        activeClassName="activeNavLink"
        to="/admin/charts"
      >
        Charts
      </NavLink>
      <NavLink
        className="navLink"
        activeClassName="activeNavLink"
        to="/admin/users"
      >
        Servers
      </NavLink>
      <NavLink
        className="navLink"
        // activeClassName="activeNavLink"
        to="/"
      >
        Salir
      </NavLink>
    </NavigationSt>
  );
};

export default Navigation;
