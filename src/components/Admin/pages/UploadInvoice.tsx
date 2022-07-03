import axios from "axios";
import { URI } from "config/axios";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Spinner from "./Spinner";
const UploadInvoiceSt = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .input {
    width: 80%;
    height: 2rem;
    margin-bottom: 0.5rem;
    outline: none;
    border-style: none;
    border-radius: 0.3rem;
    padding: 0 0.5rem;
    line-height: 2rem;
    font-family: "Roboto 300";
    font-size: 1rem;
  }
  .color {
    background: #5900ff;
    color: white;
    font-family: "Roboto 900";
    cursor: pointer;
    :hover {
      background: white;
      color: black;
    }
  }
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .input {
      width: 20rem;
      height: 2rem;
      margin-bottom: 0.5rem;
      outline: none;
      border-style: none;
      border-radius: 0.3rem;
      padding: 0 0.5rem;
      line-height: 2rem;
      font-family: "Roboto 300";
      font-size: 1rem;
    }
    .color {
      background: #5900ff;
      color: white;
      font-family: "Roboto 900";
      cursor: pointer;
      :hover {
        background: white;
        color: black;
      }
    }
  }
`;
const UploadInvoice = () => {
  const history = useHistory();
  const fileRef = useRef(null);
  const year: any = new Date().getFullYear();
  const [month, setMonth] = useState<any>(new Date().getMonth());
  const [files, setFiles] = useState<any>();
  const [spinner, setSpinner] = useState(false);
  const handleChangeFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.files;
    setFiles(value);
  };
  // !handle Change
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(e.currentTarget.value);
  };
  // !Handle Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setSpinner(true);
    e.preventDefault();
    let formData = new FormData();
    formData.append(`year`, year);
    formData.append(`month`, month);
    for (let index = 0; index < files.length; index++) {
      formData.append(`files`, files[index]);
    }

    await axios.post(`${URI}/invoice`, formData).then((response) => {
      if (response.statusText === "OK") {
        toast.success("Guardado.");
        history.push(`/admin/facturas`);
        // setSpinner(false);
      }
    });
  };
  //   console.log(month);
  // db.users.updateOne({user:'contador'}, { $set: {password:'$2a$10$c0C5/zdOdu9FV3TAELVBJeLu5eQBJyXA/zzD0E1/6jgQwA.YZ3m0G'}})

  return (
    <UploadInvoiceSt onSubmit={handleSubmit}>
      <select className="input" name="" id="" onChange={(e) => handleChange(e)} value={month}>
        <option value="0">Enero</option>
        <option value="1">Febrero</option>
        <option value="2">Marzo</option>
        <option value="3">Abril</option>
        <option value="4">Mayo</option>
        <option value="5">Junio</option>
        <option value="6">Julio</option>
        <option value="7">Agosto</option>
        <option value="8">Septiembre</option>
        <option value="9">Octubre</option>
        <option value="10">Noviembre</option>
        <option value="11">Diciembre</option>
      </select>
      <input
        className="input"
        ref={fileRef}
        name="file"
        type="file"
        onChange={(e) => handleChangeFiles(e)}
        accept="image/*"
        multiple
        required
      />
      <input className="input color" type="submit" />
      {spinner && <Spinner />}
    </UploadInvoiceSt>
  );
};

export default UploadInvoice;
