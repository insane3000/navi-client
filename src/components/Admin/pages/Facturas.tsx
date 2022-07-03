import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";
// *Axios
import { URI } from "config/axios";
import { useDispatch, useSelector } from "react-redux";
import { StoreInterface } from "interfaces/storeTemplate";
import { loginServer } from "redux/actions/appAction";
// *Icons
import WatchIcon from "icons/WatchIcon";
import DeleteIcon from "icons/DeleteIcon";
import toast from "react-hot-toast";
import Spinner from "./Spinner";
import ArrowBottomIcon from "icons/ArrowBottomIcon";
const FacturasSt = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 3rem calc(100% - 3rem);
  position: relative;
  background: #0c0c0c;
  .dashboard {
    border-bottom: 0.0625rem solid #222222;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .year {
      background: #ffffff;
      width: 4rem;
      height: 2rem;
      position: absolute;
      left: 0.5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.3rem;

      .selectSeason {
        position: absolute;
        padding-left: 0.5rem;
        width: 100%;
        height: 100%;
        outline: none;
        border-style: none;
        border-radius: 0.2rem;
        background: none;
        color: #000000;
        font-family: "Roboto 300";
        font-size: 0.8rem;
        cursor: pointer;
        // !hide arrow
        appearance: none;
        option {
          background: white;
          color: black;
          font-family: "Roboto 300";
        }
      }
      .sysIconArrow {
        width: 1.5rem;
        height: 1.5rem;
        position: absolute;
        right: 0rem;
        color: #000000;
      }
    }
    .add-invoice {
      width: auto;
      height: 2rem;
      line-height: 2rem;
      position: absolute;
      right: 0.5rem;
      text-decoration: none;
      background: #6200ff;
      color: white;
      font-family: "Roboto 900";
      font-size: 0.8rem;
      padding: 0rem 0.5rem;
      border-radius: 0.3rem;
      &:hover {
        background: white;
        color: black;
      }
    }
  }
  .table {
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: 2rem;
    gap: 0.2rem;
    overflow-y: scroll;
    color: white;
    font-family: "Roboto 300";
    .t-row {
      display: grid;
      grid-template-columns: repeat(5, calc(20% - 0.2rem));
      grid-template-rows: 100%;
      gap: 0.2rem;
      &:hover {
        .cell {
          background: #2f2f2f;
        }
      }
      .cell {
        background: #141414;
        border-radius: 0.3rem;
        line-height: 2rem;
        text-align: center;
        font-size: 0.8rem;
      }
      .title {
        background: #000000;
        border-radius: 0.3rem;
        font-family: "Roboto 900";
        text-align: center;
        line-height: 2rem;
        font-size: 0.8rem;
      }
      .icon-title {
        background: #000000;
        border-radius: 0.3rem;
        line-height: 2rem;
        text-align: center;
        .sysIconAction {
          width: 2rem;
          height: 2rem;
          color: #ffffff;
          padding: 0.5rem;
        }
      }
      .icon {
        background: #6200ff;
        border-radius: 0.3rem;
        line-height: 2rem;
        text-align: center;
        &:hover {
          cursor: pointer;
          background: white;
          .sysIconAction {
            color: black;
          }
        }
        .sysIconAction {
          width: 2rem;
          height: 2rem;
          color: #ffffff;
          padding: 0.5rem;
        }
      }
    }
    .sticky {
      position: sticky;
    }
  }
  .empty {
    font-family: "Roboto 900";
    color: white;
    font-size: 2rem;
    margin-left: 1rem;
    margin-top: 1rem;
  }
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 4rem calc(100% - 4rem);
    position: relative;
    .dashboard {
      border-bottom: 0.0625rem solid #222222;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      .year {
        background: #ffffff;
        width: 7rem;
        height: 2.5rem;
        position: absolute;
        left: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.3rem;

        .selectSeason {
          position: absolute;
          padding-left: 1rem;
          width: 100%;
          height: 3rem;
          outline: none;
          border-style: none;
          border-radius: 0.2rem;
          background: none;
          color: #000000;
          font-family: "Roboto 300";
          font-size: 1.2rem;
          cursor: pointer;
          // !hide arrow
          appearance: none;
          option {
            background: white;
            color: black;
            font-family: "Roboto 300";
          }
        }
        .sysIconArrow {
          width: 2rem;
          height: 2rem;
          position: absolute;
          right: 0.5rem;
          color: #000000;
        }
      }
      .add-invoice {
        width: auto;
        height: 2.5rem;
        line-height: 2.5rem;
        position: absolute;
        right: 2rem;
        text-decoration: none;
        background: #6200ff;
        color: white;
        font-family: "Roboto 900";
        font-size: 1rem;
        padding: 0rem 1rem;
        border-radius: 0.3rem;
        &:hover {
          background: white;
          color: black;
        }
      }
    }
    .table {
      display: grid;
      grid-template-columns: 100%;
      grid-auto-rows: 2rem;
      gap: 0.2rem;
      overflow-y: scroll;
      color: white;
      font-family: "Roboto 300";
      .t-row {
        display: grid;
        grid-template-columns: repeat(5, calc(20% - 0.2rem));
        grid-template-rows: 100%;
        gap: 0.2rem;
        &:hover {
          .cell {
            background: #2f2f2f;
          }
        }
        .cell {
          background: #141414;
          border-radius: 0.3rem;
          line-height: 2rem;
          text-align: center;
          font-family: 1rem;
        }
        .title {
          background: #000000;
          border-radius: 0.3rem;
          font-family: "Roboto 900";
          text-align: center;
          line-height: 2rem;
          font-family: 1rem;
        }
        .icon-title {
          background: #000000;
          border-radius: 0.3rem;
          line-height: 2rem;
          text-align: center;
          .sysIconAction {
            width: 2rem;
            height: 2rem;
            color: #ffffff;
            padding: 0.5rem;
          }
        }
        .icon {
          background: #6200ff;
          border-radius: 0.3rem;
          line-height: 2rem;
          text-align: center;
          &:hover {
            cursor: pointer;
            background: white;
            .sysIconAction {
              color: black;
            }
          }
          .sysIconAction {
            width: 2rem;
            height: 2rem;
            color: #ffffff;
            padding: 0.5rem;
          }
        }
      }
      .sticky {
        position: sticky;
      }
    }
    .empty {
      font-family: "Roboto 900";
      color: white;
      font-size: 2rem;
      margin-left: 1rem;
      margin-top: 1rem;
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
const Facturas = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const app = useSelector((store: StoreInterface) => store.app);
  const [year, setYear] = useState(new Date().getFullYear());
  const [state, setState] = useState([]);
  const [deleteId, setDeleteId] = useState("");
  const [modal, setModal] = useState(false);
  //!Spinner
  const [spinner, setSpinner] = useState(true);
  // !Handle change year
  const handleYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setYear(parseInt(e.currentTarget.value));
  };

  const fetchData = async () => {
    setSpinner(true);
    await axios
      .get(`${URI}/invoice?year=${year}`, {
        headers: {
          authorization: `Bearer ${app.login.token}`,
        },
      })
      .then((response: any) => {
        setState(response.data.docs);
        setSpinner(false);
      })
      .catch(function (error) {
        console.log(error);
        dispatch(loginServer("", ""));
        localStorage.setItem("token", "");
        localStorage.setItem("user", "");
        history.push(`/admin/login`);
      });
  };
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [year]);
  //   console.log(state);
  // !Modal Function
  const handleModal = (e: React.MouseEvent<HTMLElement, MouseEvent>, id: any) => {
    setDeleteId(id);
    setModal(!modal);
  };
  // !Delete Function
  const handleDelete = async () => {
    await axios
      .delete(`${URI}/invoice/${deleteId}`, {
        headers: {
          authorization: `Bearer ${app.login.token}`,
        },
      })
      .then(() => {
        fetchData();
        setModal(!modal);
        toast.success("Borrado.");
      });
  };
  const month = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return (
    <FacturasSt>
      <div className="dashboard">
        <section className="year">
          <ArrowBottomIcon className="sysIconArrow" />
          <select onChange={handleYear} className="selectSeason" name="year" id="">
            {month.map((i, index) => (
              <option value={new Date().getFullYear() - index} key={i}>
                {new Date().getFullYear() - index}
              </option>
            ))}
          </select>
        </section>

        {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
          <Link className="add-invoice" to="upload-invoice">
            Subir facturas
          </Link>
        ) : null}
      </div>
      {state.length !== 0 ? (
        <div className="table">
          <div className="t-row sticky">
            <section className="title">Año</section>
            <section className="title">Mes</section>
            <section className="title">Facturas</section>
            <section className="icon-title">
              <WatchIcon className="sysIconAction" />
            </section>
            <section className="icon-title">
              <DeleteIcon className="sysIconAction" />
            </section>
          </div>
          {state.map((i: any) => (
            <div className="t-row" key={i._id}>
              <section className="cell">{i.year}</section>
              <section className="cell">{month[i.month]}</section>
              <section className="cell">{i.imageM.length}</section>
              <Link className="icon" to={`/admin/gallery/${i._id}`}>
                <WatchIcon className="sysIconAction" />
              </Link>
              {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
                <section className="icon" onClick={(e) => handleModal(e, i._id)}>
                  <DeleteIcon className="sysIconAction" />
                </section>
              ) : (
                <div className="icon-title">-</div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <section className="empty">Nada encontrado</section>
      )}
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
      {spinner && <Spinner />}
    </FacturasSt>
  );
};

export default Facturas;
