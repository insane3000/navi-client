import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { StoreInterface } from "interfaces/storeTemplate";
import { Link, useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
// *Axios
import { URI } from "config/axios";
// *Icons
import CloseIcon from "icons/CloseIcon";
import Spinner from "./Spinner";
import { loginServer } from "redux/actions/appAction";

const EditPcSt = styled.form`
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
    text-transform: uppercase;
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
      text-transform: uppercase;
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
interface UserIT {
  [key: string]: string | number;
  _id: string;
  user: string;
  oldPassword: string;
  newPassword: string;
  confirmation: string;
}
const userTemplate = {
  _id: "",
  user: "",
  oldPassword: "",
  newPassword: "",
  confirmation: "",
};
interface Params {
  id: string;
}
const EditPc = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const params = useParams<Params>();
  const app = useSelector((store: StoreInterface) => store.app);
  const [state, setState] = useState<UserIT>(userTemplate);
  const [spinner, setSpinner] = useState(false);
  const [errorUser, setErrorUser] = useState(false);

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
      .get(`${URI}/profile/${app.login.user}`, {
        headers: {
          authorization: `Bearer ${app.login.token}`,
        },
      })
      .then(function (response: any) {
        setState({
          ...state,
          user: response.data.user,
          _id: response.data._id,
          oldPassword: "",
          newPassword: "",
          confirmation: "",
        });
        // console.log(response.data);
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
      .put(`${URI}/profile/${params.id}`, state, {
        headers: {
          authorization: `Bearer ${app.login.token}`,
        },
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          // setState(userTemplate);
          fetchData();
        }
        localStorage.setItem("token", "");
        localStorage.setItem("user", "");
        dispatch(loginServer("", ""));
        history.push(`/admin/login`);
      })
      .catch(function (error) {
        setSpinner(false);
        error.response.status === 400 ? setErrorUser(true) : console.log(error);
      });
    // history.push(`/admin/maintenance`);
  };
  return (
    <EditPcSt onSubmit={handleSubmit}>
      <h2 className="titleAddProducts">{state.user}</h2>
      <div className="containerPc">
        <section className="cell">
          <span className="subtitle">Usuario:</span>
          <input
            className="inputValue"
            type="text"
            name="user"
            // placeholder="Nombre."
            onChange={handleChange}
            value={state.user}
            onFocus={(e) => e.target.select()}
            readOnly
            style={{
              cursor: "not-allowed",
              // userSelect: "none",
              // msUserSelect: "none",
            }}
            //required
          />
        </section>
        <section className="cell">
          <span className="subtitle">Contraseña antigua:</span>
          <input
            className="inputValue"
            type="password"
            name="oldPassword"
            // placeholder="Contraseña antigua."
            onChange={handleChange}
            value={state.oldPassword}
            onFocus={(e) => e.target.select()}
            minLength={4}
            required
          />
        </section>
        <section className="cell">
          <span className="subtitle">Contraseña nueva:</span>
          <input
            className="inputValue"
            type="password"
            name="newPassword"
            // placeholder="Contraseña."
            onChange={handleChange}
            value={state.newPassword}
            onFocus={(e) => e.target.select()}
            minLength={4}
            required
            style={
              state.newPassword.length === 0
                ? { border: "0.0625rem solid #5100ff" }
                : state.newPassword === state.confirmation
                ? { border: "0.0625rem solid lime" }
                : { border: "0.0625rem solid red" }
            }
          />
        </section>
        <section className="cell">
          <span className="subtitle">Repite la contraseña:</span>
          <input
            className="inputValue"
            type="password"
            name="confirmation"
            // placeholder="Repite la contraseña."
            onChange={handleChange}
            value={state.confirmation}
            onFocus={(e) => e.target.select()}
            minLength={4}
            required
            style={
              state.newPassword.length === 0
                ? { border: "0.0625rem solid #5100ff" }
                : state.newPassword === state.confirmation
                ? { border: "0.0625rem solid lime" }
                : { border: "0.0625rem solid red" }
            }
          />
        </section>
      </div>
      {errorUser && (
        <span className="alert">La antigua contraseña es inválida.</span>
      )}
      {state.newPassword.length < 4 ? (
        <span className="alert">
          La contraseña debe tener minimo 4 caracteres.
        </span>
      ) : null}
      <button className="btnSubmit" type="submit">
        Guardar
      </button>
      <Link className="close" to="/admin/maintenance">
        <CloseIcon />
      </Link>
      {spinner && <Spinner />}
    </EditPcSt>
  );
};

export default EditPc;
