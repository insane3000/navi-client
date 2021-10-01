import styled from "styled-components";
// *Redux
import { useDispatch, useSelector } from "react-redux";
import { showMenu } from "redux/actions/appAction";

//* INTERFACE APP
import { StoreInterface } from "interfaces/storeTemplate";

const HomeSt = styled.div`
  width: 100%;
  /* max-width: 1920px; */
  height: 100%;
  background: #e4e4e4;
  position: relative;
  .sysIconHamburguer {
    background: #ffffff;
    position: fixed;
    top: 1rem;
    left: 1rem;
    width: 3rem;
    height: 3rem;
    color: black;
    padding: 0.5rem;
    border-radius: 0.2rem;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  }
  // !Estilos para DESKTOP
  @media only screen and (min-width: 568px) {
    display: grid;
    grid-template-columns: 20% 80%;
    grid-template-rows: 100%;
    .sysIconHamburguer {
      display: none;
    }
  }
`;

const Home = () => {
  const dispatch = useDispatch();
  const app = useSelector((store: StoreInterface) => store.app);
  const handleShowMenu = () => {
    dispatch(showMenu(!app.showMenu));
  };

  return (
    <HomeSt id="admin">
      <h1>admin</h1>
    </HomeSt>
  );
};

export default Home;
