import axios from "axios";
import { StoreInterface } from "interfaces/storeTemplate";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
// *Axios
import { URI } from "config/axios";
import Spinner from "./Spinner";
// import AddProducts from "./AddProducts";
const ListProductsSt = styled.div`
  /* width: 100%;
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 40% 60%; */
  position: relative;
  .tableData {
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: 2rem;
    row-gap: 0.2rem;
    background: #0c0c0c;
    overflow-y: scroll;
    /* padding: 0.5rem 0.5rem; */
    position: relative;
    .tRow {
      display: grid;
      grid-template-columns: calc(30% - 1.7rem) 20% 10% 10% 15% 15%;
      grid-template-rows: 100%;
      column-gap: 0.2rem;
      justify-content: center;
      align-content: center;

      &:hover {
        background: #2f2f2f;
        .cell {
          background: #2f2f2f;
        }
      }
      .cell {
        background: #141414;
        font-size: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.3rem;
        text-transform: capitalize;
        font-family: "Roboto 300";
        overflow: hidden;
        color: white;
        text-align: center;
      }
      .head {
        background: #080808;
        font-family: "Roboto 900";
        /* border-radius: 0; */
      }
      .modify {
        background: #6200ff;
        color: white;
        font-family: "Roboto 900";
        cursor: pointer;
        &:hover {
          background: #ffffff;
          color: #000000;
        }
      }
      .delete {
        background: #6200ff;
        color: white;
        font-family: "Roboto 900";
        cursor: pointer;
        &:hover {
          background: #ffffff;
          color: #000000;
        }
      }
    }
    .tHead {
      position: sticky;
      top: 0;
      background: #0c0c0c;
    }
  }
  background: #050505;
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    /* width: 100%;
    height: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 100%;
    color: white; */

    .tableData {
      display: grid;
      grid-template-columns: 100%;
      grid-auto-rows: 2rem;
      row-gap: 0.2rem;
      background: #0c0c0c;
      overflow-y: scroll;
      /* padding: 0.5rem 0.5rem; */
      position: relative;
      .tRow {
        display: grid;
        grid-template-columns: calc(20% - 1.7rem) 20% 20% 20% 10% 10%;
        grid-template-rows: 100%;
        column-gap: 0.2rem;
        justify-content: center;
        align-content: center;

        &:hover {
          background: #2f2f2f;
          .cell {
            background: #2f2f2f;
          }
        }
        .cell {
          background: #141414;
          font-size: 0.8rem;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 0.3rem;
          text-transform: capitalize;
          font-family: "Roboto 300";
        }
        .head {
          background: #080808;
          font-family: "Roboto 900";
          /* border-radius: 0; */
        }
        .modify {
          background: #6200ff;
          color: white;
          font-family: "Roboto 900";
          cursor: pointer;
          &:hover {
            background: #ffffff;
            color: #000000;
          }
        }
        .delete {
          background: #6200ff;
          color: white;
          font-family: "Roboto 900";
          cursor: pointer;
          &:hover {
            background: #ffffff;
            color: #000000;
          }
        }
      }
      .tHead {
        position: sticky;
        top: 0;
        background: #0c0c0c;
      }
    }
  }
`;

type ProductIT = [
  {
    name: string;
    cost: 0;
    price: 0;
    stock: 0;
    _id: string;
    createdAt: string;
    updatedAt: string;
  }
];
const ListProducts = () => {
  const history = useHistory();
  const app = useSelector((store: StoreInterface) => store.app);

  const [products, setProducts] = useState<ProductIT>();
  //console.log(products);
  const fetchData = async () => {
    await axios
      .get(`${URI}/products`, {
        headers: {
          authorization: `Bearer ${app.login.token}`,
        },
      })
      .then(function (response: any) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handleDelete = async (_id: string) => {
    await axios
      .delete(`${URI}/products/${_id}`, {
        headers: {
          authorization: `Bearer ${app.login.token}`,
        },
      })
      .then((response) => console.log(response))
      .catch(function (error) {
        console.log(error);
      });
    fetchData();
  };
  const handleUpdate = async (_id: string) => {
    history.push(`/admin/update-product/${_id}`);
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ListProductsSt>
      {/* <AddProductsSt>
        Agregar producto
        <Link className="linkToAddProducts" to="/admin/products/add-products">
          Agregar productos
        </Link>
      </AddProductsSt> */}
      {/* <AddProducts fetchData={fetchData} /> */}
      <div className="tableData">
        <div className="tRow tHead">
          <section className="cell head">Creado</section>
          <section className="cell head">Nombre</section>
          <section className="cell head">Costo</section>
          <section className="cell head">Precio</section>

          <section className="cell head">Editar</section>
          <section className="cell head">Borrar</section>
        </div>
        {products?.map((i) => (
          <div className="tRow" key={i._id}>
            <section
              className="cell"
              title={new Date(`${i.updatedAt}`).toLocaleString("en-US")}
            >
              {new Date(`${i.createdAt}`).toLocaleString("en-US")}
            </section>

            <section className="cell">{i.name}</section>
            <section className="cell">{i.cost}</section>
            <section className="cell">{i.price}</section>

            <section
              className="cell  modify"
              onClick={() => handleUpdate(i._id)}
            >
              editar
            </section>
            <section
              className="cell  delete"
              onClick={() => handleDelete(i._id)}
            >
              borrar
            </section>
          </div>
        ))}
      </div>
      {!products && <Spinner />}
    </ListProductsSt>
  );
};

export default ListProducts;
