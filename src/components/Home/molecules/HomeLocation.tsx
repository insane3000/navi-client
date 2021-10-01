import React from "react";
import styled from "styled-components";
const HomeLocationSt = styled.div`
  width: 100%;
  height: 100vh;
  .locationMap {
    width: 100%;
    height: 100%;
    border-style: none;
  }
`;
const HomeLocation = () => {
  return (
    <HomeLocationSt>
      <iframe
        className="locationMap"
        title="mapa"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15229.448610247093!2d-66.1514648!3d-17.3943994!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x718e0fb972b7017e!2s%5BNavi%20Games%20Dota%202%5D!5e0!3m2!1ses-419!2sbo!4v1609808792320!5m2!1ses-419!2sbo"
        width="600"
        height="450"
        aria-hidden="false"
        loading="lazy"
      ></iframe>
    </HomeLocationSt>
  );
};

export default HomeLocation;
