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
import Spinner from "./Spinner";
// *icons
import DeleteIcon from "icons/DeleteIcon";
import WatchIcon from "icons/WatchIcon";
import EditIcon from "icons/EditIcon";
const ReportsSt = styled.div`
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
    .tRow {
      display: grid;
      grid-template-columns: calc(30% - 1.6rem) 10% 10% 10% 10% 10% 10% 10%;
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
        font-size: 0.6rem;
        color: white;
        padding: 0 0.5rem;
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
        display: flex;
        justify-content: center;
        align-items: center;
        .sysIcon {
          width: 100;
          height: 100%;
          justify-self: center;
          align-self: center;
          font-size: 1rem;
        }
        .text {
          width: 60%;
          height: 100%;
          display: flex;
          justify-content: start;
          align-items: center;
        }
        .noneText {
          display: none;
        }
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
      /* position: relative; */
      .tRow {
        display: grid;
        grid-template-columns: calc(20% - 2rem) 15% 10% 10% 7.5% 7.5% 7.5% 7.5% 7.5% 7.5%;
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
          /* position: relative; */
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
          display: flex;
          justify-content: center;
          align-items: center;
          .sysIcon {
            width: 40%;
            height: 60%;
            justify-self: center;
            align-self: center;
            font-size: 1rem;
          }
          .text {
            width: 60%;
            height: 100%;
            display: flex;
            justify-content: start;
            align-items: center;
          }
          .noneText {
            display: flex;
          }
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
type StateIT = [CashRegisterIT];
const Reports = () => {
  const history = useHistory();
  const app = useSelector((store: StoreInterface) => store.app);

  const [state, setState] = useState<StateIT>();
  const [deleteId, setDeleteId] = useState("");
  const [modal, setModal] = useState(false);
  // console.log(deleteId);
  // console.log(state);

  state?.sort(function (a: any, b: any) {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
  // console.log(sort);
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
      .delete(`${URI}/cash-register/${deleteId}`, {
        headers: {
          authorization: `Bearer ${app.login.token}`,
        },
      })
      .then(() => {
        fetchData();
        setModal(!modal);
      });
  };

  const fetchData = () => {
    axios
      .get(`${URI}/reports`, {
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
          <section className="cell head">Fecha</section>
          <section className="cell head">Server</section>
          <section className="cell head none">Ventas</section>
          <section className="cell head ">Gastos</section>
          <section className="cell head none">Pancafe</section>
          <section className="cell head ">Efectivo</section>
          <section className="cell head">Balance</section>
          <section className="cell head">
            <WatchIcon className="sysIcon" />
            <span className="text noneText">Ver</span>
          </section>
          <section className="cell head">
            <EditIcon className="sysIcon" />
            <span className="text noneText">Editar</span>
          </section>
          <section className="cell head">
            <DeleteIcon className="sysIcon" />
            <span className="text noneText">Borrar</span>
          </section>
        </div>

        {state?.map((i) => (
          <div className="tRow" key={i._id}>
            <section
              className="cell"
              style={
                i.createdAt !== i.updatedAt
                  ? { color: "#00ffaa" }
                  : { color: "#ffffff" }
              }
              title={new Date(i.updatedAt).toLocaleDateString("es-ES", options)}
            >
              {new Date(i.date).toLocaleDateString("es-ES", options)}
            </section>

            <section className="cell">{i.dashboard.server}</section>
            <section className="cell none">{i.dashboard.totalSales}</section>
            <section className="cell ">
              {i.dashboard.totalExpenses.toFixed(2)}
            </section>
            <section className="cell none">{i.dashboard.pancafe}</section>
            <section className="cell " style={{ color: "#00ffaa" }}>
              {i.dashboard.totalCash}
            </section>
            <section
              className="cell"
              style={
                i.dashboard.balance < 0
                  ? { color: "red" }
                  : i.dashboard.balance > 0
                  ? { color: "lime" }
                  : { color: "#a3a3a3" }
              }
            >
              {i.dashboard.balance === 0 ? (
                <span
                  style={{
                    color: "orange",
                    fontFamily: "#ff9d00"
                  }}
                >
                  Perfect !
                </span>
              ) : (
                i.dashboard.balance.toFixed(2)
              )}
            </section>
            <Link className="cell head action" to={`/admin/watch/${i._id}`}>
              <WatchIcon className="sysIcon" />
              <span className="text noneText">Ver</span>
            </Link>
            {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
              <Link className="cell  head action" to={`/admin/check/${i._id}`}>
                <EditIcon className="sysIcon" />
                <span className="text noneText">Editar</span>
              </Link>
            ) : (
              <span className="cell">-</span>
            )}

            {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
              <section
                className="cell head action"
                onClick={(e) => handleModal(e, i._id)}
              >
                <DeleteIcon className="sysIcon" />
                <span className="text noneText">Borrar</span>
              </section>
            ) : (
              <span className="cell">-</span>
            )}
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
      {!state && <Spinner />}
    </ReportsSt>
  );
};

export default Reports;
