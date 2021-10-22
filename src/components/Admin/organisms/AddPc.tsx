import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useSelector } from "react-redux";
import { StoreInterface } from "interfaces/storeTemplate";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router";
// *Axios
import { URI } from "config/axios";

const AddPcSt = styled.form`
  width: 100%;
  height: 100%;
  color: white;
  background: red;

  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    background: #0e0d0d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Roboto 300";
    font-size: 2rem;
    position: relative;
    border-right: 0.0625rem solid #333333;

    .close {
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 2rem;
      height: 2rem;
      text-decoration: none;
      color: white;
      font-size: 2rem;
    }
    .titleAddProducts {
      width: 80%;
      height: 3rem;
      margin-bottom: 0.5rem;
      color: white;
      font-family: "Roboto 700";
      font-size: 1.5rem;
      text-align: center;
      line-height: 3rem;
      text-transform: uppercase;
      /* background: red; */
    }
    .inputValue {
      background: #050505;
      width: 20rem;
      height: 3rem;
      margin-bottom: 1rem;
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
    .btnSubmit {
      background: #4400ff;
      width: 20rem;
      height: 3rem;
      margin-bottom: 0.5rem;
      outline: none;
      border-style: none;
      padding: 0 1rem;
      color: #ffffff;
      font-family: "Roboto 300";
      font-size: 1rem;
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
const Addpc = (e: React.FormEvent<HTMLFormElement>) => {
  const history = useHistory();
  const app = useSelector((store: StoreInterface) => store.app);
  const [addPc, setAddPc] = useState<PcIT>(pcTemplate);
  const [maintenanceDate, setMaintenanceDate] = useState(
    `${new Date(Date.now() - 1000 * 60 * 60 * 4)
      .toISOString()
      .substring(0, 11)}00:00`
  );
  const [headSetDate, setHeadSetDate] = useState(
    `${new Date(Date.now() - 1000 * 60 * 60 * 4)
      .toISOString()
      .substring(0, 11)}00:00`
  );
  const [keyboardDate, setKeyboardDate] = useState(
    `${new Date(Date.now() - 1000 * 60 * 60 * 4)
      .toISOString()
      .substring(0, 11)}00:00`
  );
  const [mouseDate, setMouseDate] = useState(
    `${new Date(Date.now() - 1000 * 60 * 60 * 4)
      .toISOString()
      .substring(0, 11)}00:00`
  );
  // addPc.maintenanceDate = maintenanceDate
  console.log(addPc);
  // !Handle Set date
  const handleMaintenanceDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaintenanceDate(e.target.value);
  };
  // !Handle Set Headset
  const handleHeadSetDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHeadSetDate(e.target.value);
  };
  // !Handle Set Keyboard
  const handleKeyboardDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyboardDate(e.target.value);
  };
  // !Handle Set Mouse
  const handleMouseDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMouseDate(e.target.value);
  };
  // !Handle Change
  const handleAddProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddPc({
      ...addPc,
      [name]: value,
    });
  };

  if (app.login.user === "") {
    history.push(`/admin`);
    window.location.reload();
  }
  // !Handle Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios
      .post(`${URI}/products`, addPc, {
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
    setAddPc(pcTemplate);
    // props.fetchData();
  };
  return (
    <AddPcSt onSubmit={handleSubmit}>
      <h2 className="titleAddProducts">Agregar Pc</h2>
      <input
        className="inputValue"
        type="text"
        name="name"
        placeholder="Nombre del pc."
        onChange={handleAddProducts}
        value={addPc.name}
        onFocus={(e) => e.target.select()}
        required
      />

      <input
        className="inputValue date"
        type="datetime-local"
        name="maintenanceDate"
        placeholder="Mantenimiento."
        onChange={handleMaintenanceDate}
        value={maintenanceDate}
        onFocus={(e) => e.target.select()}
        required
      />
      <input
        className="inputValue date"
        type="datetime-local"
        name="maintenanceDate"
        placeholder="Mantenimiento."
        onChange={handleHeadSetDate}
        value={headSetDate}
        onFocus={(e) => e.target.select()}
        required
      />
      <input
        className="inputValue date"
        type="datetime-local"
        name="maintenanceDate"
        placeholder="Mantenimiento."
        onChange={handleKeyboardDate}
        value={keyboardDate}
        onFocus={(e) => e.target.select()}
        required
      />
      <input
        className="inputValue date"
        type="datetime-local"
        name="maintenanceDate"
        placeholder="Mantenimiento."
        onChange={handleMouseDate}
        value={mouseDate}
        onFocus={(e) => e.target.select()}
        required
      />
      <input
        className="inputValue"
        type="text"
        name="headset"
        placeholder="Cambio de audifonos."
        onChange={handleAddProducts}
        value={addPc.headset}
        onFocus={(e) => e.target.select()}
        required
      />
      <input
        className="inputValue"
        type="text"
        name="keyboard"
        placeholder="Cambio de teclado."
        onChange={handleAddProducts}
        value={addPc.keyboard}
        onFocus={(e) => e.target.select()}
        required
      />
      <input
        className="inputValue"
        type="text"
        name="mouse"
        placeholder="Cambio de mouse."
        onChange={handleAddProducts}
        value={addPc.mouse}
        onFocus={(e) => e.target.select()}
        required
      />
      <input
        className="inputValue"
        type="text"
        name="cpu"
        placeholder="Cpu."
        onChange={handleAddProducts}
        value={addPc.cpu}
        onFocus={(e) => e.target.select()}
        required
      />
      <input
        className="inputValue"
        type="text"
        name="ram"
        placeholder="Ram."
        onChange={handleAddProducts}
        value={addPc.ram}
        onFocus={(e) => e.target.select()}
        required
      />
      <input
        className="inputValue"
        type="text"
        name="mobo"
        placeholder="Motherboard."
        onChange={handleAddProducts}
        value={addPc.mobo}
        onFocus={(e) => e.target.select()}
        required
      />
      <input
        className="inputValue"
        type="text"
        name="power"
        placeholder="Power."
        onChange={handleAddProducts}
        value={addPc.power}
        onFocus={(e) => e.target.select()}
        required
      />
      <input
        className="inputValue"
        type="text"
        name="gpu"
        placeholder="Gpu."
        onChange={handleAddProducts}
        value={addPc.gpu}
        onFocus={(e) => e.target.select()}
        required
      />
      <input
        className="inputValue"
        type="text"
        name="case"
        placeholder="Case."
        onChange={handleAddProducts}
        value={addPc.case}
        onFocus={(e) => e.target.select()}
        required
      />

      <button className="btnSubmit" type="submit">
        Guardar
      </button>
    </AddPcSt>
  );
};

export default Addpc;
