import React from "react";
import styled from "styled-components";
// *Components
import HomeIntro from "components/home/molecules/HomeIntro";
import HomePoints from "components/home/molecules/HomePoints";
import HomeTitleComponent from "components/home/atoms/HomeTitleComponent";
import HomeLocation from "components/home/molecules/HomeLocation";
import HomeGames from "components/home/molecules/HomeGames";
import HomePromo from "components/home/molecules/HomePromo";
const HomePageSt = styled.div`
  background: #e4e4e4;
  /* overflow-x: hidden; */
  overflow-y: scroll;
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
  }
`;
const HomePage = () => {
  return (
    <HomePageSt>
      <HomeIntro />
      <HomeTitleComponent
        title="CANJEA TUS PUNTOS!"
        bgTitle="#ff0040"
        color="white"
        line01="Por cada carga de 20Bs, el sistema te regala 4 puntos."
        line02="Esos puntos los puedes cambiar por crédito para seguir jugando o tambien los puedes cambiar por premios!"
      />
      <HomePoints />
      <HomeTitleComponent
        title="JUEGOS ACTUALIZADOS"
        bgTitle="#ff006a"
        color="white"
        line01="A continuación te mostramos los juegos más populares de Navi Games Cbba."
        line02="Si alguno no está actualizado, con solo notificar al que atiende tu juego estará actualizado en cuestión de minutos."
      />
      <HomeGames img={""} />
      <HomeTitleComponent
        title="NUESTRAS PROMOCIONES"
        bgTitle="#0099ff"
        color="white"
        line01="No tienes que perderte de nuestras promociones!"
        line02="A continuación te mostramos algunas..."
      />
      <HomePromo />
      <HomeTitleComponent
        title="NUESTRA UBICACIÓN"
        bgTitle="#ffbb00"
        color="black"
        line01="Calle Jordan entre 16 de julio y antezana Nº723 acera norte. Planta baja del instituto INAP."
        line02="Abrimos de 7:30 am a 10:00 pm. Y lechu los fines de semana... :D "
      />
      <HomeLocation />
    </HomePageSt>
  );
};

export default HomePage;
