import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
// *Interface
import { CashRegisterIT } from "interfaces/Cashregister";
// import { useHistory } from "react-router";
import { Link } from "react-router-dom";
//* Redux
import { StoreInterface } from "interfaces/storeTemplate";
import { useSelector } from "react-redux";
// *Axios
import { URI } from "config/axios";
const ReportsSt = styled.div`
  width: 100%;
  height: 100%;

  .table {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: 2rem;
    row-gap: 0.2rem;
    background: #0c0c0c;
    overflow-y: scroll;
    border-right: 0.0625rem solid #333333;
    .tRow {
      display: grid;
      grid-template-columns: calc(25% - 1rem) 15% 15% 15% 15% 15%;
      grid-template-rows: 100%;
      column-gap: 0.2rem;
      justify-content: center;
      align-content: center;
      /* border-bottom: 0.0625rem solid #222222; */
      &:hover {
        background: #2f2f2f;
        .cell {
          background: #2f2f2f;
        }
      }
      .cell {
        background: #141414;

        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.3rem;
        text-transform: capitalize;
        font-family: "Roboto 300";
        font-size: 0.5rem;
        color: white;
        padding: 0 0.5rem;
        position: relative;
        overflow: hidden;
        text-align: center;
        /* .modified {
            position: absolute;
            bottom: 0;
            font-family: "Roboto 300";
            font-size: 0.5rem;
            color: red;
          } */
      }
      .head {
        background: #000000;
        font-family: "Roboto 900";
        /* border-radius: 0; */
      }
      .none {
        display: none;
      }

      .action {
        background: #6200ff;
        color: #ffffff;
        cursor: pointer;
        font-family: "Roboto 900";
        text-decoration: none;
        /* transition: 0.1s; */
        &:hover {
          /* transition: 0.1s; */
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
  /* background: black; */
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    width: 100%;
    height: 100%;
    position: relative;
    .table {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-columns: 100%;
      grid-auto-rows: 2rem;
      row-gap: 0.2rem;
      background: #0c0c0c;
      overflow-y: scroll;
      border-right: 0.0625rem solid #333333;
      position: relative;
      .tRow {
        display: grid;
        grid-template-columns: calc(20% - 2rem) 15% 10% 10% 10% 10% 10% 5% 5% 5%;
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
          color: white;
          padding: 0 0.5rem;
          position: relative;
          /* .modified {
            position: absolute;
            bottom: 0;
            font-family: "Roboto 300";
            font-size: 0.5rem;
            color: red;
          } */
        }
        .head {
          background: #000000;
          font-family: "Roboto 900";
          /* border-radius: 0; */
        }
        .none {
          display: flex;
        }

        .action {
          background: #6200ff;
          color: #ffffff;
          cursor: pointer;
          font-family: "Roboto 900";
          text-decoration: none;
          /* transition: 0.1s; */
          &:hover {
            /* transition: 0.1s; */
            background: #ffffff;
            color: #000000;
          }
        }
      }
      .tHead {
        position: sticky;
        top: 0;
        left: 0;
        background: #0c0c0c;
      }
    }
  }
`;
type StateIT = [CashRegisterIT];
const Reports = () => {
  const history = useHistory();
  const app = useSelector((store: StoreInterface) => store.app);

  const [state, setState] = useState<StateIT>();
  // console.log(state);
  // console.log(history);

  state?.sort(function (a: any, b: any) {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  // console.log(sort);
  const handleDelete = (
    e: React.MouseEvent<HTMLElement, MouseEvent>,
    id: any
  ) => {
    // console.log(e.target);
    axios
      .delete(`${URI}/cash-register/${id}`, {
        headers: {
          authorization: `Bearer ${app.login.token}`,
        },
      })
      .then(() => fetchData());
  };
  const fetchData = () => {
    axios
      .get(`${URI}/cash-register`, {
        headers: {
          authorization: `Bearer ${app.login.token}`,
        },
      })
      .then(function (response: any) {
        setState(response.data);
      })
      .catch(function (error) {
        console.log(error);
        history.push(`/admin/login`);
      });
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  return (
    <ReportsSt>
      <div className="table">
        <div className="tRow tHead">
          <section className="cell head">Fecha de creacion</section>
          <section className="cell head">Server</section>
          <section className="cell head none">Ventas Totales</section>
          <section className="cell head none">Gastos totales</section>
          <section className="cell head none">Pancafe</section>
          <section className="cell head none">Efectivo</section>
          <section className="cell head">Balance</section>
          <section className="cell head">Ver</section>
          <section className="cell head">Editar</section>
          <section className="cell head">Borrar</section>
        </div>

        {state?.map((i) => (
          <div className="tRow" key={i._id}>
            <section
              className="cell"
              style={
                i.createdAt !== i.updatedAt
                  ? { color: "#ff0000" }
                  : { color: "#ffffff" }
              }
              title={new Date(i.updatedAt).toLocaleDateString("es-ES", options)}
            >
              {new Date(i.createdAt).toLocaleDateString("es-ES", options)}
            </section>

            <section className="cell">{i.dashboard.server}</section>
            <section className="cell none">{i.dashboard.totalSales}</section>
            <section className="cell none">{i.dashboard.totalExpenses}</section>
            <section className="cell none">{i.dashboard.pancafe}</section>
            <section className="cell none">{i.dashboard.totalCash}</section>
            <section className="cell">{i.dashboard.balance.toFixed(2)}</section>
            <Link className="cell action" to={`/admin/watch/${i._id}`}>
              Ver
            </Link>
            {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
              <Link className="cell action" to={`/admin/check/${i._id}`}>
                Editar
              </Link>
            ) : (
              <span className="cell">-</span>
            )}

            {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
              <section
                className="cell action"
                onClick={(e) => handleDelete(e, i._id)}
              >
                Borrar
              </section>
            ) : (
              <span className="cell">-</span>
            )}
          </div>
        ))}
      </div>
    </ReportsSt>
  );
};

export default Reports;
