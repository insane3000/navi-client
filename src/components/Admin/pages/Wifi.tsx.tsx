import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { StoreInterface } from "interfaces/storeTemplate";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
// *Axios
import { URI } from "config/axios";
// *Icons
import Spinner from "./Spinner";
import { loginServer } from "redux/actions/appAction";

const WifiSt = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #0e0d0d;
  position: relative;
  color: white;
  .close {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: white;
    font-size: 10rem;
  }
  .titleAddProducts {
    font-family: "Roboto 900";
    font-size: 2rem;
    /* text-transform: uppercase; */
    margin-bottom: 1rem;
  }
  .containerPc {
    width: 100%;
    display: grid;
    grid-template-columns: 80%;
    grid-auto-rows: 5rem;
    gap: 0.5rem;
    justify-content: center;
    align-content: center;
    .cell {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .subtitle {
        width: 100%;
        color: #5d5d5d;
        text-align: left;
        font-family: "Roboto 300";
        font-size: 1rem;
      }
      .inputValue {
        background: #050505;
        width: 100%;
        height: 3rem;
        /* margin-bottom: 1rem; */
        outline: none;
        border-style: none;
        padding: 0 0.5rem;
        color: white;
        font-family: "Roboto 300";
        font-size: 1rem;
        border: 0.0625rem solid #5100ff;
        border-radius: 0.3rem;
      }
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      .date {
        ::-webkit-calendar-picker-indicator {
          filter: invert(1);
        }
      }
    }
  }
  .alert {
    width: 80%;
    color: red;
    font-family: "Roboto 300";
    font-size: 1rem;
    margin-top: 0.5rem;
  }
  .btnSubmit {
    background: #4400ff;
    width: 15rem;
    height: 4rem;
    margin-top: 1rem;
    outline: none;
    border-style: none;
    padding: 0 1rem;
    color: #ffffff;
    font-family: "Roboto 300";
    font-size: 1.5rem;
    cursor: pointer;
    border-radius: 0.3rem;
  }

  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #0e0d0d;
    position: relative;
    .close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 4rem;
      height: 4rem;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      color: white;
      font-size: 10rem;
      /* background: red; */
    }
    .titleAddProducts {
      font-family: "Roboto 900";
      font-size: 3rem;
      /* text-transform: uppercase; */
      margin-bottom: 1rem;
    }
    .containerPc {
      width: 31rem;
      /* background: red; */
      display: grid;
      grid-template-columns: 15rem 15rem;
      grid-auto-rows: 5rem;
      gap: 0.5rem;
      justify-content: center;
      align-content: center;

      .cell {
        /* background: red; */
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .subtitle {
          width: 100%;
          color: #6d6d6d;
          text-align: left;
          font-family: "Roboto 300";
          font-size: 0.8rem;
        }
        .inputValue {
          background: #050505;
          width: 100%;
          height: 3rem;
          /* margin-bottom: 1rem; */
          outline: none;
          border-style: none;
          padding: 0 1rem;
          color: white;
          font-family: "Roboto 300";
          font-size: 1rem;
          border: 0.0625rem solid #5100ff;
          border-radius: 0.3rem;
        }
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        .date {
          ::-webkit-calendar-picker-indicator {
            filter: invert(1);
          }
        }
      }
    }
    .alert {
      width: 30rem;
      color: red;
      font-family: "Roboto 300";
      font-size: 1rem;
    }
    .btnSubmit {
      background: #4400ff;
      width: 15rem;
      height: 4rem;
      margin-top: 1rem;
      outline: none;
      border-style: none;
      padding: 0 1rem;
      color: #ffffff;
      font-family: "Roboto 300";
      font-size: 1.5rem;
      cursor: pointer;
      border-radius: 0.3rem;
    }
  }
`;

const Wifi = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const app = useSelector((store: StoreInterface) => store.app);
  const [state, setState] = useState({
    network: "",
    password: "",
  });
  const [spinner, setSpinner] = useState(false);

  // !Handle Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };
  const fetchData = async () => {
    axios
      .get(`${URI}/wifi/62c22119fdee23ecb1982e79`)
      .then(function (response: any) {
        setState(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [app.login.user, app.login.token]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setSpinner(true);
    e.preventDefault();
    await axios
      .put(`${URI}/wifi/62c22119fdee23ecb1982e79`, state, {
        headers: {
          authorization: `Bearer ${app.login.token}`,
        },
      })
      .then((response: any) => {
        response.status === 200 && setSpinner(false);
        setState(response.data);
      })
      .catch(function (error) {
        setSpinner(false);
        localStorage.setItem("token", "");
        localStorage.setItem("user", "");
        dispatch(loginServer("", ""));
        history.push(`/admin/login`);
      });
  };
  return (
    <WifiSt onSubmit={handleSubmit}>
      <h2 className="titleAddProducts">Wi - Fi</h2>
      <div className="containerPc">
        <section className="cell">
          <span className="subtitle">Red:</span>
          <input
            className="inputValue"
            type="text"
            name="network"
            onChange={handleChange}
            value={state.network}
            required
            readOnly
            style={{
              cursor: "not-allowed",
            }}
          />
        </section>
        <section className="cell">
          <span className="subtitle">Contraseña:</span>
          <input
            className="inputValue"
            type="text"
            name="password"
            onChange={handleChange}
            value={state.password}
            required
          />
        </section>
      </div>

      <button className="btnSubmit" type="submit">
        Guardar
      </button>

      {spinner && <Spinner />}
    </WifiSt>
  );
};

export default Wifi;
