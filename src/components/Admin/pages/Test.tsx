import React from "react";
import styled from "styled-components";
import axios from "axios";
// *Icons
import { StoreInterface } from "interfaces/storeTemplate";
import { useSelector } from "react-redux";
const UpdateProductsSt = styled.form`
  width: 100%;
  height: 100%;
  display: none;
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    width: 25rem;
    height: 30rem;
    background: #0e0d0d;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Roboto 300";
    font-size: 2rem;
    position: relative;
    .linkToProducts {
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
    }
    .inputValue {
      background: #000000;
      width: 80%;
      height: 3rem;
      margin-bottom: 0.5rem;
      outline: none;
      border-style: none;
      padding: 0 1rem;
      color: white;
      font-family: "Roboto 300";
      font-size: 1rem;
    }
    .btnSubmit {
      background: #2a2a2a;
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
    }
  }
`;

const UpdateProducts = () => {
  const app = useSelector((store: StoreInterface) => store.app);

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   // console.log(`${app.login.token}`)
  //   e.preventDefault();
  //   axios
  //     .get(`${URI}/profile`, {
  //       headers: {
  //         authorization: `Bearer ${app.login.token}`,
  //         id: app.login.user,
  //       },
  //     })
  //     .then(function (response: any) {
  //       // console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };
  return (
    <UpdateProductsSt >
      <button type="submit">GET</button>
      {/* <span>{app.login.token}</span> */}
    </UpdateProductsSt>
  );
};

export default UpdateProducts;
