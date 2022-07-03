import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
// *Interface
import { CashRegisterIT, cashRegisterTemplate } from "interfaces/Cashregister";
import { StoreInterface } from "interfaces/storeTemplate";
import { useSelector } from "react-redux";
// *Axios
import { URI } from "config/axios";
import Spinner from "./Spinner";
const UsersSt = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 20% 80%;
  position: relative;
  .tables {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
    .balance {
      border-right: 0.0625rem solid #333333;
      .table {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 100%;
        grid-auto-rows: 2rem;
        row-gap: 0.2rem;
        background: #0c0c0c;
        overflow-y: scroll;
        .tRow {
          display: grid;
          grid-template-columns: calc(50% - 1rem) 25% 25%;
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
          }
          .head {
            background: #000000;
            font-family: "Roboto 900";
            /* border-radius: 0; */
          }

          .action {
            background: #000000;
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
    }
    .expenses {
      .table {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-columns: 100%;
        grid-auto-rows: 2rem;
        row-gap: 0.2rem;
        background: #0c0c0c;
        overflow-y: scroll;
        .tRow {
          display: grid;
          grid-template-columns: calc(25% - 1rem) 20% 20% 20% 15%;
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
            display: block;
            justify-content: center;
            align-items: center;
            border-radius: 0.3rem;
            text-transform: capitalize;
            font-family: "Roboto 300";
            color: white;
            padding: 0 0.5rem;
            // !Dots ...
            line-height: 2rem;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            text-align: center;
          }
          .head {
            background: #000000;
            font-family: "Roboto 900";
            /* border-radius: 0; */
          }

          .action {
            background: #000000;
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
    }
  }
  /* background: black; */
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 15% 85%;

    .tables {
      display: grid;
      grid-template-columns: 30% 70%;
      grid-template-rows: 100%;
      .balance {
        border-right: 0.0625rem solid #333333;
        .table {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 100%;
          grid-auto-rows: 2rem;
          row-gap: 0.2rem;
          background: #0c0c0c;
          overflow-y: scroll;
          .tRow {
            display: grid;
            grid-template-columns: calc(50% - 1rem) 25% 25%;
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
            }
            .head {
              background: #000000;
              font-family: "Roboto 900";
              /* border-radius: 0; */
            }

            .action {
              background: #000000;
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
      }
      .expenses {
        .table {
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 100%;
          grid-auto-rows: 2rem;
          row-gap: 0.2rem;
          background: #0c0c0c;
          overflow-y: scroll;
          .tRow {
            display: grid;
            grid-template-columns: calc(25% - 1rem) 10% 10% 45% 10%;
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
              display: block;
              justify-content: center;
              align-items: center;
              border-radius: 0.3rem;
              text-transform: capitalize;
              font-family: "Roboto 300";
              color: white;
              padding: 0 0.5rem;
              // !Dots ...
              line-height: 2rem;
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              text-align: center;
            }
            .head {
              background: #000000;
              font-family: "Roboto 900";
              /* border-radius: 0; */
            }

            .action {
              background: #000000;
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
      }
    }
  }
`;
// ?Sector Dashboard
const DashboardSt = styled.form`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 30% 30% 30%;
  grid-auto-rows: 3rem;
  gap: 0.5rem;
  justify-content: center;
  align-content: center;
  border-bottom: 0.0625rem solid #333333;
  /* overflow: hidden; */
  .cellDashboard {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 30% 70%;
    background: #131212;
    border-radius: 0.3rem;
    /* overflow: hidden; */
    .cellDashboardTitle {
      /* width: 100%;
      height: 30%; */
      text-align: center;
      text-transform: capitalize;
      font-family: "Roboto 300";
      font-size: 0.6rem;
      justify-self: center;
      align-self: flex-end;
      color: #727272;
    }
    .cellDashboardInput {
      width: 100%;
      height: 100%;
      /* line-height: 3rem; */
      justify-self: center;
      align-self: flex-start;
      border-radius: 0.5rem;
      border-style: none;
      outline: none;
      padding: 0 0.5rem;
      text-align: center;
      /* background: #050505; */
      font-family: "Roboto 900";
      font-size: 1rem;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .select {
      background: none;
      width: 100%;
      font-size: 1rem;
      text-align: start;
      text-transform: capitalize;

      option {
        background: #ffffff;
        color: black;
        font-size: 1.5rem;
      }
    }

    .date {
      font-size: 1rem;
      text-transform: capitalize;
      color: white;
      background: none;
      font-family: "Roboto 100";
      font-size: 0.6rem;
      ::-webkit-calendar-picker-indicator {
        filter: invert(1);
      }
    }

    .number {
      color: #ff0062;
    }
    .total {
      color: #3c00ff;
    }
  }
  .none {
    display: none;
  }

  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    display: grid;
    grid-template-columns: calc(10% - 3rem) 20% 20% 15% 10% 10% 10%;
    grid-template-rows: 100%;
    gap: 0.5rem;
    justify-content: center;
    align-content: center;
    border-bottom: 0.0625rem solid #333333;
    .cellDashboard {
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: 40% 60%;
      background: none;

      .cellDashboardTitle {
        text-align: center;
        text-transform: capitalize;
        font-family: "Roboto 300";
        font-size: 0.8rem;
        justify-self: center;
        align-self: flex-end;
        color: #727272;
      }
      .cellDashboardInput {
        width: 8rem;
        height: 3rem;
        line-height: 3rem;
        justify-self: center;
        align-self: flex-start;
        border-radius: 0.5rem;
        border-style: none;
        outline: none;
        padding: 0 0.5rem;
        text-align: center;
        /* background: #050505; */
        font-family: "Roboto 900";
        font-size: 2rem;
        color: white;
      }
      .select {
        background: none;
        width: 100%;
        font-size: 1.5rem;
        text-align: start;
        text-transform: capitalize;

        option {
          background: #ffffff;
          color: black;
          font-size: 1.5rem;
        }
      }

      .date {
        width: 100%;
        font-size: 1.5rem;
        text-transform: capitalize;
        color: white;
        background: #141414;
        font-family: "Roboto 100";
        font-size: 1.5rem;
        ::-webkit-calendar-picker-indicator {
          filter: invert(1);
        }
      }

      .number {
        color: #ff0062;
      }
      .total {
        color: #3c00ff;
      }
    }
    /* .none {
      display: flex;
    } */
  }
`;
type StateIT = [CashRegisterIT];
const Users = () => {
  const app = useSelector((store: StoreInterface) => store.app);
  const [state, setState] = useState<StateIT>([cashRegisterTemplate]);
  // console.log(state);
  const [nameState, setNameState] = useState("ninguno");

  const [initialDate, setInitialDate] = useState(
    `${new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString().substring(0, 11)}00:00`
  );

  const [endingDate, setEndingDate] = useState(
    `${new Date(Date.now() - 1000 * 60 * 60 * 4).toISOString().substring(0, 11)}23:59`
  );
  let filtered = state?.filter(
    (i) =>
      new Date(i.date).getTime() >= new Date(initialDate).getTime() &&
      new Date(i.date).getTime() <= new Date(endingDate).getTime()
  );
  let balance = filtered.filter((i) => i.dashboard.server === nameState);
  let totalBalance =
    balance.length > 0 ? balance.map((i) => i.dashboard.balance).reduce((i, c) => i + c) : 0;
  let filteredValidation =
    filtered.map((i) => i.expenses.find((e) => e.name === nameState)?.expense).length === 0
      ? [0]
      : filtered.map((i) => i.expenses.find((e) => e.name === nameState)?.expense);

  let totalExpense = nameState === "ninguno" ? 0 : filteredValidation.reduce((i: any, c) => i + c);

  const handleChangeName = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNameState(e.target.value);
  };
  const handleInitialDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInitialDate(e.target.value);
  };
  const handleEndingDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndingDate(e.target.value);
  };

  const fetchData = () => {
    axios
      .get(`${URI}/servers`, {
        headers: {
          authorization: `Bearer ${app.login.token}`,
        },
      })
      .then(function (response: any) {
        setState(response.data.docs);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };
  const year = new Date().getFullYear();
  return (
    <UsersSt>
      <DashboardSt>
        <section className="cellDashboard">
          <span className="cellDashboardTitle">Gestion</span>
          <select className="cellDashboardInput select" name="server" onChange={handleChangeName}>
            <option value={year}>{year}</option>
          </select>
        </section>

        <section className="cellDashboard">
          <span className="cellDashboardTitle">Fecha de inicio</span>
          <input
            className="cellDashboardInput date"
            type="datetime-local"
            name=""
            id=""
            onChange={handleInitialDate}
            value={initialDate}
          />
        </section>

        <section className="cellDashboard">
          <span className="cellDashboardTitle">Fecha final</span>
          <input
            className="cellDashboardInput date"
            type="datetime-local"
            name=""
            id=""
            onChange={handleEndingDate}
            value={endingDate}
          />
        </section>
        <section className="cellDashboard">
          <span className="cellDashboardTitle">Server</span>
          <select className="cellDashboardInput select" name="server" onChange={handleChangeName}>
            <option value="ninguno">ninguno</option>
            <option value="drako">drako</option>
            <option value="jhasmy">jhasmy</option>
            <option value="zero">zero</option>
            <option value="perro">perro</option>
          </select>
        </section>
        <section className="cellDashboard none">
          <span className="cellDashboardTitle">Balance</span>
          <span className="cellDashboardInput number ">{(totalBalance * -1).toFixed(2)}</span>
        </section>

        <section className="cellDashboard none">
          <span className="cellDashboardTitle">Gastos</span>
          <span className="cellDashboardInput number ">
            {totalExpense && totalExpense.toFixed(2)}
            {/* {totalExpense && totalExpense} */}
          </span>
        </section>

        <section className="cellDashboard">
          <span className="cellDashboardTitle">Suma total</span>
          <span className="cellDashboardInput total">
            {totalExpense && (totalExpense + totalBalance * -1).toFixed(2)}
          </span>
        </section>
      </DashboardSt>
      <div className="tables">
        <div className="balance">
          <div className="table">
            <div className="tRow tHead">
              <section className="cell head ">Fecha</section>
              <section className="cell head">Server</section>
              <section className="cell head">Balance</section>
            </div>

            {balance.map((i) => (
              <div className="tRow" key={i._id}>
                <section className="cell">
                  {new Date(i.date).toLocaleDateString("es-ES", options)}
                </section>
                <section className="cell">{i.dashboard.server}</section>
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
                  {i.dashboard.balance.toFixed(2)}
                </section>
              </div>
            ))}
          </div>
        </div>
        <div className="expenses">
          <div className="table">
            <div className="tRow tHead">
              <section className="cell head ">Fecha de actualizacion</section>
              <section className="cell head">Server</section>
              <section className="cell head">Name</section>
              <section className="cell head">Detalle</section>
              <section className="cell head">Gastos</section>
            </div>

            {filtered?.map((i) => (
              <div className="tRow" key={i._id}>
                <section className="cell">
                  {new Date(i.date).toLocaleDateString("es-ES", options)}
                </section>
                <section className="cell">{i.dashboard.server}</section>
                <section className="cell">
                  {i.expenses.find((e) => e.name === nameState)?.name}
                </section>
                <section className="cell">
                  {i.expenses.find((e) => e.name === nameState)?.detail}
                </section>
                <section className="cell">
                  {i.expenses.find((e) => e.name === nameState)?.expense === 0
                    ? ""
                    : i.expenses.find((e) => e.name === nameState)?.expense}
                </section>
              </div>
            ))}
          </div>
        </div>
      </div>
      {state.length === 1 ? <Spinner /> : null}{" "}
    </UsersSt>
  );
};

export default Users;
