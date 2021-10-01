import React from "react";
import styled from "styled-components";
const HomeWifiSt = styled.div`
  background: #1b1b1b;
  width: 15rem;
  height: 3rem;
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .sysIconWifi {
    /* background: #ff0000; */
    width: 2.5rem;
    height: 2.5rem;
    color: white;
    padding: 0.5rem;
  }
  .dataWifi {
    /* background: blue; */
    width: 12rem;
    height: 3rem;
    display: flex;
    justify-content: start;
    align-items: center;
    font-family: "Roboto 300";
    font-size: 1.2rem;
    color: white;
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
  }
`;
interface Props {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  data: string;
  color: string;
  fontSize: string;
  bg: string;
  
}

const HomeWifi = (props: Props) => {
  return (
    <HomeWifiSt style={{ background: `${props.bg}` }}>
      <props.icon className="sysIconWifi" style={{ color: `${props.color}` }} />
      <span
        className="dataWifi"
        style={{ color: `${props.color}`, fontSize: `${props.fontSize}` }}
      >
        {props.data}
      </span>
    </HomeWifiSt>
  );
};

export default HomeWifi;
