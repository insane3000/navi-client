import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// *Axios
import { URI } from "config/axios";
import { useSelector } from "react-redux";
import { StoreInterface } from "interfaces/storeTemplate";
import axios from "axios";
// *icons
import DeleteIcon from "icons/DeleteIcon";
// import WatchIcon from "icons/WatchIcon";
import EditIcon from "icons/EditIcon";
import Spinner from "./Spinner";
const MaintenanceSt = styled.nav`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .addPc {
    width: 5rem;
    height: 5rem;
    background: #00000056;
    position: absolute;
    /* right: 1rem; */
    bottom: 1rem;
    border-radius: 100%;
    font-family: "Roboto 100";
    font-size: 4rem;
    color: #ffffff7f;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      background: #5500ff;
      color: #ffffff;
    }
  }
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
      grid-template-columns: 10% calc(25% - 1.6rem) 15% 15% 15% 10% 10%;
      grid-template-rows: 100%;
      column-gap: 0.2rem;
      justify-content: center;
      align-content: center;
      &:hover {
        /* background: #2f2f2f; */
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
        font-family: "Roboto 300";
        font-size: 0.7rem;
        color: white;
        padding: 0 0.5rem;
        overflow: hidden;
        text-align: center;
        .number {
          color: red;
          margin-right: 0.2rem;
          font-family: "Roboto 900";
          font-size: 1.3rem;
        }
        .text {
          color: #747474;
          font-size: 0.6rem;
        }
      }
      .head {
        background: #000000;
        font-family: "Roboto 900";
        font-size: 0.6rem;
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

  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .addPc {
      width: 5rem;
      height: 5rem;
      background: #00000056;
      position: absolute;
      /* right: 1rem; */
      bottom: 1rem;
      border-radius: 100%;
      font-family: "Roboto 100";
      font-size: 4rem;
      color: #ffffff7f;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &:hover {
        background: #5500ff;
        color: #ffffff;
      }
    }
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
        grid-template-columns: 5% calc(13% - 2.5rem) 9% 9% 9% 7.5% 7.5% 7.5% 7.5% 7.5% 7.5% 5% 5%;
        grid-template-rows: 100%;
        column-gap: 0.2rem;
        justify-content: center;
        align-content: center;
        &:hover {
          /* background: #2f2f2f; */
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
          /* text-transform: capitalize; */
          font-family: "Roboto 300";
          font-size: 0.8rem;
          color: white;
          padding: 0 0.5rem;
          overflow: hidden;
          text-align: center;
          .number {
            color: red;
            margin-right: 0.5rem;
            font-family: "Roboto 900";
            font-size: 1.5rem;
          }
          .text {
            color: #747474;
            font-size: 0.6rem;
          }
        }
        .head {
          background: #000000;
          font-family: "Roboto 900";
          font-size: 0.8rem;
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
          display: flex;
        }

        .action {
          background: #6200ff;
          color: #ffffff;
          cursor: pointer;
          font-family: "Roboto 900";
          text-decoration: none;
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
type PcIT = [
  {
    _id: string;
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
];
const Mantenimiento = () => {
  const app = useSelector((store: StoreInterface) => store.app);

  const [state, setState] = useState<PcIT>();
  const [deleteId, setDeleteId] = useState("");
  const [modal, setModal] = useState(false);

  const fetchData = async () => {
    await axios
      .get(`${URI}/computer`, {
        headers: {
          authorization: `Bearer ${app.login.token}`,
        },
      })
      .then(function (response: any) {
        setState(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // const handleUpdate = async (_id: string) => {
  //   history.push(`/admin/update-product/${_id}`);
  // };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function TimeRemaining(date: string) {
    return Math.floor(
      (Date.now() - new Date(date).getTime()) / 1000 / 60 / 60 / 24 / 30
    ).toString();
  }
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
      .delete(`${URI}/computer/${deleteId}`, {
        headers: {
          authorization: `Bearer ${app.login.token}`,
        },
      })
      .then(() => {
        fetchData();
        setModal(!modal);
      });
  };
  return (
    <MaintenanceSt>
      <div className="table">
        <div className="tRow tHead">
          <div className="cell head">Pc</div>
          <div className="cell head">Mantenimiento </div>
          <div className="cell head">Cambio Audifono</div>
          <div className="cell head">Cambio Teclado</div>
          <div className="cell head">Cambio Mouse</div>
          <div className="cell head none">Cpu</div>
          <div className="cell head none">Ram</div>
          <div className="cell head none">Mobo</div>
          <div className="cell head none">Power</div>
          <div className="cell head none">Gpu</div>
          <div className="cell head none">Case</div>
          <div className="cell head">Borrar</div>
          <div className="cell head">Editar</div>
        </div>
        {state?.map((i) => (
          <div className="tRow" key={i._id}>
            <div className="cell">{i.name}</div>
            <div className="cell">
              <span
                className="number"
                style={
                  parseInt(TimeRemaining(i.maintenanceDate)) <= 9
                    ? { color: "lime" }
                    : parseInt(TimeRemaining(i.maintenanceDate)) > 9
                    ? { color: "red" }
                    : { color: "#ffffff" }
                }
              >
                {TimeRemaining(i.maintenanceDate)}
              </span>
              <span className="text">meses</span>
            </div>
            <div className="cell">
              <span
                className="number"
                style={
                  parseInt(TimeRemaining(i.headset)) <= 9
                    ? { color: "lime" }
                    : parseInt(TimeRemaining(i.headset)) > 9
                    ? { color: "red" }
                    : { color: "#ffffff" }
                }
              >
                {TimeRemaining(i.headset)}
              </span>
              <span className="text">meses</span>
            </div>
            <div className="cell">
              <span
                className="number"
                style={
                  parseInt(TimeRemaining(i.keyboard)) <= 9
                    ? { color: "lime" }
                    : parseInt(TimeRemaining(i.keyboard)) > 9
                    ? { color: "red" }
                    : { color: "#ffffff" }
                }
              >
                {TimeRemaining(i.keyboard)}
              </span>
              <span className="text">meses</span>
            </div>
            <div className="cell">
              <span
                className="number"
                style={
                  parseInt(TimeRemaining(i.mouse)) <= 9
                    ? { color: "lime" }
                    : parseInt(TimeRemaining(i.mouse)) > 9
                    ? { color: "red" }
                    : { color: "#ffffff" }
                }
              >
                {TimeRemaining(i.mouse)}
              </span>
              <span className="text">meses</span>
            </div>
            <div className="cell none">{i.cpu}</div>
            <div className="cell none">{i.ram}</div>
            <div className="cell none">{i.mobo}</div>
            <div className="cell none">{i.power}</div>
            <div className="cell none">{i.gpu}</div>
            <div className="cell none">{i.case}</div>
            {/* <Link className="cell" to="/admin/maintenance/watch/2323">
              Ver
            </Link> */}
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
            {/* <Link className="cell" to={`/admin/maintenance/edit/${i._id}`}>
              Editar
            </Link> */}
            {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
              <Link
                className="cell  head action"
                to={`/admin/maintenance/edit/${i._id}`}
              >
                <EditIcon className="sysIcon" />
                <span className="text noneText">Editar</span>
              </Link>
            ) : (
              <span className="cell">-</span>
            )}
          </div>
        ))}
      </div>
      <Link className="addPc" to="/admin/maintenance/add-pc">
        +
      </Link>
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
    </MaintenanceSt>
  );
};

export default Mantenimiento;
