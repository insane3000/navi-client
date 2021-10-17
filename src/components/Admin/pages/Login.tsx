import React, { useState } from "react";
import styled from "styled-components";
// import axios from "axios";
// *Redux
import { useDispatch } from "react-redux";
import { loginServer } from "redux/actions/appAction";
import axios from "axios";
import { useHistory } from "react-router";
// *Axios
import { URI } from "config/axios";
//* INTERFACE APP
// import { StoreInterface } from "interfaces/storeTemplate";

const AddProductsSt = styled.form`
  width: 100%;
  height: 100%;
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
    width: 80%;
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
  .btnSubmit {
    background: #4400ff;
    width: 80%;
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
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    /* width: 20rem;
    height: 25rem; */
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
interface LoginIT {
  [key: string]: string | number;
  user: string;
  password: string;
}
const loginTemplate = {
  user: "",
  password: "",
};

const AddProducts = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const app = useSelector((store: StoreInterface) => store.app);
  const [login, setLogin] = useState<LoginIT>(loginTemplate);
  const handleAddProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin({
      ...login,
      [name]: value,
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios
      .post(`${URI}/login`, login)
      .then(function (response: any) {
        dispatch(loginServer(response.data._id, response.data.token));
        history.push(`/admin/cash-register`);
        // console.log(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
    // console.log(login);
  };
  return (
    <AddProductsSt onSubmit={handleSubmit}>
      <h2 className="titleAddProducts">Identificate</h2>
      <input
        className="inputValue"
        type="text"
        name="user"
        placeholder="Nombre de usuario."
        onChange={handleAddProducts}
        value={login.user}
        onFocus={(e) => e.target.select()}
        required
      />
      <input
        className="inputValue"
        type="password"
        name="password"
        placeholder="Contraseña."
        onChange={handleAddProducts}
        value={login.password}
        onFocus={(e) => e.target.select()}
        required
      />

      <button className="btnSubmit" type="submit">
        Entrar
      </button>
    </AddProductsSt>
  );
};

export default AddProducts;