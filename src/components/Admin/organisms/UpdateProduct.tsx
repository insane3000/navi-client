import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
// *Icons
import CloseIcon from "icons/CloseIcon";
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
interface ProductIT {
  name: string;
  cost: number;
  price: number;
  stock: number;
}
const productTemplate = {
  name: "",
  cost: 0,
  price: 0,
  stock: 0,
};
interface Params {
  id: string;
}
const UpdateProducts = () => {
  const params = useParams<Params>();
  const history = useHistory();
  // console.log(params);
  const [product, setProduct] = useState<ProductIT>(productTemplate);
  // console.log(addProducts);
  const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    setProduct({
      ...product,
      [name]: type === "text" ? value : parseFloat(value),
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(`http://192.168.0.148:5000/products/${params.id}`)
        .then(function (response:any) {
          setProduct(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    fetchData();
  }, [params.id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios
      .put(`http://192.168.0.148:5000/products/${params.id}`, product)
      .then((response) => console.log(response))
      .catch(function (error) {
        console.log(error);
      });
    history.push(`/admin/products`);
  };
  return (
    <UpdateProductsSt onSubmit={handleSubmit}>
      <Link className="linkToProducts" to="/admin/products">
        <CloseIcon />
      </Link>
      <h2 className="titleAddProducts">Modificar Producto</h2>
      <input
        className="inputValue"
        type="text"
        name="name"
        placeholder="Nombre del producto."
        onChange={handleChage}
        value={product.name}
        onFocus={(e) => e.target.select()}
        required
      />
      <input
        className="inputValue"
        type="number"
        name="cost"
        placeholder="Costo."
        onChange={handleChage}
        value={product.cost}
        onFocus={(e) => e.target.select()}
        required
      />
      <input
        className="inputValue"
        type="number"
        name="price"
        placeholder="Precio."
        onChange={handleChage}
        value={product.price}
        onFocus={(e) => e.target.select()}
        required
        step="0.1"
      />
      {/* <input
        className="inputValue"
        type="number"
        name="stock"
        placeholder="Stock."
        onChange={handleChage}
        value={product.stock}
        onFocus={(e) => e.target.select()}

        // required
      /> */}
      <button className="btnSubmit" type="submit">
        Guardar
      </button>
    </UpdateProductsSt>
  );
};

export default UpdateProducts;
