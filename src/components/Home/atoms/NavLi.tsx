import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

// *Redux
import { useDispatch, useSelector } from "react-redux";
import { showMenu } from "redux/actions/appAction";

//* INTERFACE APP
import { StoreInterface } from "interfaces/storeTemplate";

const NavLiSt = styled.p`
  width: 15rem;
  height: 2.5rem;
  /* background: red; */
  /* margin-bottom: 0.5rem; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    background: #1d1d1d;
    .sysIconWifi {
      color: #ffffff;
    }
    .dataWifi {
      color: #ffffff;
    }
  }
  .sysIconWifi {
    /* background: #ff0000; */
    width: 2.3rem;
    height: 2.3rem;
    color: #4d4d4d;
    padding: 0.5rem;
  }
  .dataWifi {
    /* background: blue; */
    width: 12rem;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    font-family: "Roboto 300";
    font-size: 1.1rem;
    color: #4d4d4d;
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
  }
`;
interface Props {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  data: string;
  to: string;
  targetBlanck: string;
}
const NavLi = (props: Props) => {
  const dispacth = useDispatch();
  const app = useSelector((store: StoreInterface) => store.app);
  const handleShowMenu = () => {
    dispacth(showMenu(!app.showMenu));
  };
  return (
    <NavLiSt
      // href={props.to}
      // target={props.targetBlanck}
      onClick={handleShowMenu}
    >
      <props.icon className="sysIconWifi" />
      {/* <span className="dataWifi">{props.data}</span> */}
      <Link
        activeClass="active"
        className="dataWifi"
        to={props.to}
        spy={true}
        smooth={true}
        offset={-70}
        duration={100}
        onClick={handleShowMenu}
      >
        {props.data}
      </Link>
    </NavLiSt>
  );
};

export default NavLi;
