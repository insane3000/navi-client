import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
// *Axios
import { URI } from "config/axios";
import { useDispatch, useSelector } from "react-redux";
import { StoreInterface } from "interfaces/storeTemplate";
import Spinner from "./Spinner";
import ArrowLeftIcon from "icons/ArrowLeftIcon";
import { loginServer } from "redux/actions/appAction";
const FacturasSt = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 3rem calc(100% - 3rem);
  position: relative;
  .dashboard {
    display: flex;
    justify-content: start;
    align-items: center;
    position: relative;
    color: white;
    .sysIconArrowBack {
      width: 2rem;
      height: 2rem;
      color: white;
      margin-left: 0rem;
      cursor: pointer;
      /* background: red; */
    }
    .month {
      font-family: "Roboto 900";
      font-size: 1rem;
      margin-left: 0rem;
    }
    .year {
      font-family: "Roboto 300";
      font-size: 1rem;
      margin-left: 0.5rem;
    }
  }
  .gallery {
    display: grid;
    grid-template-columns: repeat(3, calc(33% - 0.2rem));
    grid-auto-rows: 10rem;
    gap: 0.2rem;
    justify-content: center;
    align-content: flex-start;
    overflow-y: scroll;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .empty {
    font-family: "Roboto 900";
    color: white;
    font-size: 3rem;
  }
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 4rem calc(100% - 4rem);
    position: relative;
    .dashboard {
      /* border-bottom: 0.0625rem solid #222222; */
      display: flex;
      justify-content: start;
      align-items: center;
      position: relative;
      color: white;
      .sysIconArrowBack {
        width: 4rem;
        height: 4rem;
        color: white;
        margin-left: 1rem;
        cursor: pointer;
      }
      .month {
        font-family: "Roboto 900";
        font-size: 2.5rem;
        margin-left: 0.5rem;
      }
      .year {
        font-family: "Roboto 300";
        font-size: 2.5rem;
        margin-left: 1rem;
      }
    }
    .gallery {
      display: grid;
      grid-template-columns: repeat(8, calc(12.5% - 0.2rem));
      grid-auto-rows: 14rem;
      gap: 0.2rem;
      justify-content: center;
      align-content: flex-start;
      overflow-y: scroll;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .empty {
      font-family: "Roboto 900";
      color: white;
      font-size: 3rem;
    }
  }
`;
const stateTemplate = {
  id: "",
  year: "",
  month: "",
  imageS: [],
  imageM: [],
};
const month: any = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const Facturas = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const params = useParams<any>();
  const app = useSelector((store: StoreInterface) => store.app);
  const [state, setState] = useState(stateTemplate);
  //!Spinner
  const [spinner, setSpinner] = useState(true);
  const fetchData = async () => {
    setSpinner(true);
    await axios
      .get(`${URI}/invoice/${params.id}`, {
        headers: {
          authorization: `Bearer ${app.login.token}`,
        },
      })
      .then(function (response: any) {
        setState(response.data);
        setSpinner(false);
      })
      .catch(function (error) {
        console.log(error);
        dispatch(loginServer("", ""));
        localStorage.setItem("token", "");
        localStorage.setItem("user", "");
        history.push(`/admin/login`);
      });
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //   console.log(state);
  return (
    <FacturasSt>
      <div className="dashboard">
        <ArrowLeftIcon className="sysIconArrowBack" onClick={() => history.goBack()} />
        <section className="month">{month[state.month]}</section>
        <section className="year"> {state.year}</section>
      </div>
      {state.imageS.length !== 0 ? (
        <div className="gallery">
          {state.imageS.map((i, index) => (
            <Link to={`/admin/slider?id=${params.id}&index=${index}`} key={i}>
              <img src={`${URI}/static/invoices/${i}`} alt="" />
            </Link>
          ))}
        </div>
      ) : (
        <section className="empty">Nada encontrado</section>
      )}

      {spinner && <Spinner />}
    </FacturasSt>
  );
};

export default Facturas;
