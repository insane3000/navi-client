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
const WarningSt = styled.div`
  width: 100%;
  height: 100%;
  background: #080808;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  .warningComponent {
    width: 20rem;
    height: 20rem;
    background: #131212;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 0.3rem;
    .title {
      font-family: "Roboto 100";
      font-size: 1.5rem;
      margin-bottom: 1rem;
      text-align: center;
      text-transform: uppercase;
    }
    .buttons {
      width: 20rem;
      height: 4rem;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      .btn {
        width: 6rem;
        height: 3rem;
        border-style: none;
        outline: none;
        font-family: "Roboto 300";
        font-size: 1.5rem;
        border-radius: 0.2rem;
        cursor: pointer;
        &:hover {
          background: #6200ff;
          color: white;
        }
      }
    }
  }
  @media only screen and (min-width: 568px) {
    width: 100%;
    height: 100%;
    background: #080808;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    .warningComponent {
      width: 30rem;
      height: 15rem;
      background: #131212;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 0.3rem;
      .title {
        font-family: "Roboto 100";
        font-size: 1.5rem;
        margin-bottom: 1rem;
        text-transform: uppercase;
      }
      .buttons {
        width: 25rem;
        height: 4rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        .btn {
          width: 10rem;
          height: 3rem;
          border-style: none;
          outline: none;
          font-family: "Roboto 300";
          font-size: 1.5rem;
          border-radius: 0.2rem;
          cursor: pointer;
          &:hover {
            background: #6200ff;
            color: white;
          }
        }
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
  const [deleteId, setDeleteId] = useState("");
  const [modal, setModal] = useState(false);
  // !Modal Function
  const handleModal = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    id: any
  ) => {
    setDeleteId(id);
    setModal(!modal);
  };
  // !Delete Function
  const handleDelete = async () => {
    await axios
      .delete(`${URI}/products/${deleteId}`, {
        headers: {
          authorization: `Bearer ${app.login.token}`,
        },
      })
      .then(() => {
        fetchData();
        setModal(!modal);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
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
              onClick={(e) => handleModal(e, i._id)}
            >
              borrar
            </section>
          </div>
        ))}
      </div>
      {modal && (
        <WarningSt>
          <div className="warningComponent">
            <h2 className="title">¿Estás seguro?</h2>
            <section className="buttons">
              <button className="btn" onClick={() => setModal(!modal)}>
                No
              </button>
              <button className="btn" onClick={handleDelete}>
                Si
              </button>
            </section>
          </div>
        </WarningSt>
      )}
      {!products && <Spinner />}
    </ListProductsSt>
  );
};

export default ListProducts;
