import styled from "styled-components";
import imgMobile1 from "img/movies/imgMobile1.webp";
import imgMobile2 from "img/movies/imgMobile2.webp";
import imgMobile3 from "img/movies/imgMobile3.webp";
const HomeMoviesSt = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  grid-template-columns: 100vw;
  grid-auto-rows: auto;
  gap: 0.5rem;
  justify-content: center;
  align-content: center;
  overflow: hidden;
  .img-movie {
    width: 90%;
    height: 90%;
    object-fit: cover;
    background: #141414;
    justify-self: center;
    align-self: center;
    border: 0.625rem solid white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: 0.1s;
  }

  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: auto;
    gap: 0.0625rem;

    .img-movie {
      width: 90%;
      height: 90%;
      object-fit: cover;
      background: #141414;
      justify-self: center;
      align-self: center;
      border: 0.625rem solid white;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      transition: 0.1s;
    }
  }
`;
const HomePoints = () => {
  const imgMobile = [imgMobile1, imgMobile2, imgMobile3];
  return (
    <HomeMoviesSt>
      {imgMobile.map((i) => (
        <img className="img-movie" src={i} alt="" key={i} />
      ))}
    </HomeMoviesSt>
  );
};

export default HomePoints;
