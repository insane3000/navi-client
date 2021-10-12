import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
// import { Link } from "react-router-dom";

// *Icons
// import CloseIcon from "icons/CloseIcon";
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
interface ProductIT {
  [key: string]: string | number;
  //_id: string;
  name: string;
  cost: number;
  price: number;
  previousServer: number;
  load: number;
  currentServer: number;
  sales: number;
  cash: number;
}
const productTemplate = {
  //_id: "",
  name: "",
  cost: 0,
  price: 0,
  previousServer: 0,
  load: 0,
  currentServer: 0,
  sales: 0,
  cash: 0,
};
// interface Props {
//   fetchData: () => Promise<void>;
// }
const AddProducts = () => {
  const [addProducts, setAddProducts] = useState<ProductIT>(productTemplate);
  // console.log(addProducts);
  const handleAddProducts = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    setAddProducts({
      ...addProducts,
      [name]: type === "text" ? value : parseFloat(value),
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios
      .post("http://192.168.0.148:5000/products", addProducts)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    setAddProducts(productTemplate);
    // props.fetchData();
  };

  return (
    <AddProductsSt onSubmit={handleSubmit}>
      {/* <Link className="close" to="/admin/products">
        <CloseIcon />
      </Link> */}
      <h2 className="titleAddProducts">Agregar Productos</h2>
      <input
        className="inputValue"
        type="text"
        name="name"
        placeholder="Nombre del producto."
        onChange={handleAddProducts}
        value={addProducts.name}
        onFocus={(e) => e.target.select()}
        required
      />
      <input
        className="inputValue"
        type="number"
        name="cost"
        placeholder="Costo."
        onChange={handleAddProducts}
        value={addProducts.cost === 0 ? "" : addProducts.cost}
        onFocus={(e) => e.target.select()}
        required
      />
      <input
        className="inputValue"
        type="number"
        name="price"
        placeholder="Precio."
        onChange={handleAddProducts}
        value={addProducts.price === 0 ? "" : addProducts.price}
        onFocus={(e) => e.target.select()}
        required
        step="0.1"
      />
      {/* <input
        className="inputValue"
        type="number"
        name="stock"
        placeholder="Stock."
        onChange={handleAddProducts}
        value={addProducts.stock === 0 ? "" : addProducts.stock}
        onFocus={(e) => e.target.select()}

        // required
      /> */}
      <button className="btnSubmit" type="submit">
        Guardar
      </button>
    </AddProductsSt>
  );
};

export default AddProducts;
