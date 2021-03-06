import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import { StoreInterface } from "interfaces/storeTemplate";
// import { Link } from "react-router-dom";
// *Axios
import { URI } from "config/axios";
import { Link } from "react-router-dom";
// *Icons
import CloseIcon from "icons/CloseIcon";
const AddPcSt = styled.form`
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
    font-size: 1.5rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
  }
  .containerPc {
    width: 100%;
    display: grid;
    grid-template-columns: 45% 45%;
    grid-auto-rows: 4rem;
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
        padding: 0 .5rem;
        color: white;
        font-family: "Roboto 300";
        font-size: 1rem;
        border: 0.0625rem solid #5100ff;
        border-radius: 0.3rem;
      }
      input:-webkit-autofill,
      input:-webkit-autofill:hover,
      input:-webkit-autofill:focus,
      textarea:-webkit-autofill,
      textarea:-webkit-autofill:hover,
      textarea:-webkit-autofill:focus,
      select:-webkit-autofill,
      select:-webkit-autofill:hover,
      select:-webkit-autofill:focus {
        border: 1px solid #5100ff;
        -webkit-text-fill-color: #ffffff71;
        -webkit-box-shadow: 0 0 0px 1000px #000 inset;
        box-shadow: 0 0 0px 1000px #000 inset;
        transition: background-color 5000s ease-in-out 0s;
      }
      .date {
        ::-webkit-calendar-picker-indicator {
          filter: invert(1);
        }
      }
    }
  }

  .btnSubmit {
    background: #4400ff;
    width: 15rem;
    height: 4rem;
    margin-top: 2rem;
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
      margin-bottom: 2rem;
    }
    .containerPc {
      display: grid;
      grid-template-columns: 15rem 15rem 15rem 15rem 15rem;
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
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        select:-webkit-autofill,
        select:-webkit-autofill:hover,
        select:-webkit-autofill:focus {
          border: 1px solid #5100ff;
          -webkit-text-fill-color: #ffffff71;
          -webkit-box-shadow: 0 0 0px 1000px #000 inset;
          box-shadow: 0 0 0px 1000px #000 inset;
          transition: background-color 5000s ease-in-out 0s;
        }
        .date {
          ::-webkit-calendar-picker-indicator {
            filter: invert(1);
          }
        }
      }
    }

    .btnSubmit {
      background: #4400ff;
      width: 15rem;
      height: 4rem;
      margin-top: 2rem;
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
interface PcIT {
  [key: string]: string | number;
  name: string;
  maintenanceDate: string;
  headset: string;
  keyboard: string;
  mouse: string;
  cpu: string;
  ram: string;
  mobo: string;
  power: string;
  gpu: string;
  case: string;
}
const pcTemplate = {
  name: "",
  maintenanceDate: "",
  headset: "",
  keyboard: "",
  mouse: "",
  cpu: "",
  ram: "",
  mobo: "",
  power: "",
  gpu: "",
  case: "",
};
const AddPc = () => {
  const app = useSelector((store: StoreInterface) => store.app);
  const [state, setState] = useState<PcIT>(pcTemplate);
  // console.log(state);

  // !Handle Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      [name]: value,
    });
  };

  // !Handle Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
    await axios
      .post(`${URI}/computer`, state, {
        headers: {
          authorization: `Bearer ${app.login.token}`,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setState(pcTemplate);
  };
  return (
    <AddPcSt onSubmit={handleSubmit}>
      <h2 className="titleAddProducts">Agregar Pc</h2>
      <div className="containerPc">
        <section className="cell">
          <span className="subtitle">Nombre:</span>
          <input
            className="inputValue"
            type="text"
            name="name"
            placeholder="Nombre del pc."
            onChange={handleChange}
            value={state.name}
            onFocus={(e) => e.target.select()}
            //required
          />
        </section>
        <section className="cell">
          <span className="subtitle">Ultimo mantenimiento:</span>
          <input
            className="inputValue date"
            type="datetime-local"
            name="maintenanceDate"
            placeholder="Mantenimiento."
            onChange={handleChange}
            value={state.maintenanceDate}
            onFocus={(e) => e.target.select()}
            //required
          />
        </section>
        <section className="cell">
          <span className="subtitle">Cambio de Audifono:</span>
          <input
            className="inputValue date"
            type="datetime-local"
            name="headset"
            placeholder="Mantenimiento."
            onChange={handleChange}
            value={state.headset}
            onFocus={(e) => e.target.select()}
            //required
          />
        </section>
        <section className="cell">
          <span className="subtitle">Cambio de Teclado:</span>
          <input
            className="inputValue date"
            type="datetime-local"
            name="keyboard"
            placeholder="Mantenimiento."
            onChange={handleChange}
            value={state.keyboard}
            onFocus={(e) => e.target.select()}
            //required
          />
        </section>
        <section className="cell">
          <span className="subtitle">Cambio de Mouse:</span>
          <input
            className="inputValue date"
            type="datetime-local"
            name="mouse"
            placeholder="Mantenimiento."
            onChange={handleChange}
            value={state.mouse}
            onFocus={(e) => e.target.select()}
            //required
          />
        </section>
        <section className="cell">
          <span className="subtitle">Cpu:</span>
          <input
            className="inputValue"
            type="text"
            name="cpu"
            placeholder="Cpu."
            onChange={handleChange}
            value={state.cpu}
            onFocus={(e) => e.target.select()}
            //required
          />
        </section>
        <section className="cell">
          <span className="subtitle">Ram:</span>
          <input
            className="inputValue"
            type="text"
            name="ram"
            placeholder="Ram."
            onChange={handleChange}
            value={state.ram}
            onFocus={(e) => e.target.select()}
            //required
          />
        </section>
        <section className="cell">
          <span className="subtitle">Motherboard:</span>
          <input
            className="inputValue"
            type="text"
            name="mobo"
            placeholder="Motherboard."
            onChange={handleChange}
            value={state.mobo}
            onFocus={(e) => e.target.select()}
            //required
          />
        </section>
        <section className="cell">
          <span className="subtitle">Fuente de poder:</span>
          <input
            className="inputValue"
            type="text"
            name="power"
            placeholder="Power."
            onChange={handleChange}
            value={state.power}
            onFocus={(e) => e.target.select()}
            //required
          />
        </section>
        <section className="cell">
          <span className="subtitle">Tarjeta de video:</span>
          <input
            className="inputValue"
            type="text"
            name="gpu"
            placeholder="Gpu."
            onChange={handleChange}
            value={state.gpu}
            onFocus={(e) => e.target.select()}
            //required
          />
        </section>
        <section className="cell">
          <span className="subtitle">Case:</span>
          <input
            className="inputValue"
            type="text"
            name="case"
            placeholder="Case."
            onChange={handleChange}
            value={state.case}
            onFocus={(e) => e.target.select()}
            //required
          />
        </section>
      </div>
      <button className="btnSubmit" type="submit">
        Guardar
      </button>
      <Link className="close" to="/admin/maintenance">
        <CloseIcon />
      </Link>
    </AddPcSt>
  );
};

export default AddPc;
