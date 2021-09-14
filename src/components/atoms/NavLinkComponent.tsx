import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
// *Icons
import InformationIcon from "icons/InformationIcon";
const NavLinkSt = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  .navLi {
    width: 100%;
    height: 100%;
    color: #ffffff;
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0 1rem;
    font-family: "Roboto 300", sans-serif;
    font-size: 0.8rem;
    font-weight: 300;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      background: #464646 !important;
    }
    .menuLogo {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
    }
    .sysIcon {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.5rem;
    }
  }
  .selected {
    background: #2c2c2c;
  }
`;
interface Props {
  title: string;
  target: string;
}
const NavLinkComponent = (props: Props) => {
  return (
    <NavLinkSt>
      <NavLink
        activeClassName="selected"
        className="navLi"
        to={props.target}
        // onClick={handleShowMenu}
      >
        <InformationIcon className="sysIcon" />
        <span>{props.title}</span>
      </NavLink>
    </NavLinkSt>
  );
};

export default NavLinkComponent;
