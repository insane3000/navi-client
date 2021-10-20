import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
// *Redux
// import { useSelector } from "react-redux";
// import { showMenu } from "redux/actions/appAction";
//* INTERFACE APP
// import { StoreInterface } from "interfaces/storeTemplate";
import {
  // cashRegisterTemplate,
  // cashRegisterBasic,
  CashRegisterIT,
  cashRegisterTemplate,
} from "interfaces/Cashregister";
// *Icons
// import BackupIcon from "icons/BackupIcon";
import axios from "axios";
import { StoreInterface } from "interfaces/storeTemplate";
import { useSelector } from "react-redux";
// import CashRegister from "../pages/CashRegister";
// *Axios
import { URI } from "config/axios";
import Spinner from "./Spinner";
const CashRegisterMainSt = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 7rem calc(100% - 7rem);
  background: #0f0f0f;
  font-family: "Roboto 300";
  font-size: 2rem;
  color: white;
  position: relative;
  .SalesAndExpenses {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 50% 50%;
    border-bottom: 0.0625rem solid #333333;
    .expenses {
      background: #0c0c0c;
      font-family: "Roboto 100";
      font-size: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 15% 85%;
    background: #0f0f0f;
    font-family: "Roboto 300";
    font-size: 2rem;
    color: white;

    .SalesAndExpenses {
      display: grid;
      grid-template-columns: 60% 40%;
      grid-template-rows: 100%;
      border-bottom: 0.0625rem solid #333333;
      .expenses {
        background: #0c0c0c;
        font-family: "Roboto 100";
        font-size: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
// ?Sector Dashboard
const DashboardSt = styled.form`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 24% 24% 24% 24%;
  grid-auto-rows: 3rem;
  gap: 0.2rem;
  justify-content: center;
  align-content: center;
  border-bottom: 0.0625rem solid #333333;
  overflow: hidden;
  .cellDashboard {
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 40% 60%;
    background: #161616;
    overflow: hidden;
    border-radius: 0.3rem;
    .cellDashboardTitle {
      text-align: center;
      text-transform: capitalize;
      font-family: "Roboto 300";
      font-size: 0.6rem;
      justify-self: center;
      align-self: flex-end;
      color: #727272;
    }
    .cellDashboardInput {
      height: 1.5rem;
      justify-self: center;
      align-self: flex-start;
      border-radius: 0.3rem;
      border-style: none;
      outline: none;
      padding: 0 0.5rem;
      text-align: center;
      /* background: #050505; */
      font-family: "Roboto 900";
      font-size: 0.6rem;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .select {
      background: none;
      /* width: 100%; */
      font-size: 0.6rem;
      text-align: start;
      text-transform: capitalize;

      option {
        background: #ffffff;
        color: black;
        font-size: 0.6rem;
      }
    }
    .date {
      font-size: 0.6rem;
      text-transform: capitalize;
      width: 100%;
    }
    .number {
      background: #050505;
      width: 80%;
    }
    .button {
      background: #ffffff;
      color: black;
      font-size: 0.6rem;
      width: 80%;
      cursor: pointer;
      /* text-shadow: 0px 0px 1px rgba(0, 0, 0, 0.8); */
      padding: 0.5rem;

      &:active {
        background: #230075;
        position: relative;
        top: 0.1875rem;
      }
    }
  }

  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    display: grid;
    grid-template-columns: calc(20% - 3rem) 15% 10% 10% 10% 10% 15% 10%;
    grid-template-rows: 100%;
    gap: 0.2rem;
    justify-content: center;
    align-content: center;
    border-bottom: 0.0625rem solid #333333;
    .cellDashboard {
      display: grid;
      grid-template-columns: 100%;
      grid-template-rows: 40% 60%;
      /* background: red; */
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
      }
      .number {
        background: #050505;
      }
      .button {
        background: #ffffff;
        color: black;
        font-size: 1.5rem;
        width: 100%;
        cursor: pointer;
        /* text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.8); */

        &:active {
          background: #230075;
          position: relative;
          top: 0.1875rem;
        }
      }
    }
  }
`;
// ?sector productos
const SalesSt = styled.div`
  width: 100%;
  height: 100%;
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
    grid-template-columns: 20% 10% 20% 10% 20% calc(20% - 1rem);
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
      font-size: 0.7rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.3rem;
      text-transform: capitalize;
      font-family: "Roboto 300";
      color: white;
      padding: 0 0.5rem;
      text-align: center;
    }
    .head {
      background: #000000;
      font-family: "Roboto 900";
      /* border-radius: 0; */
    }
    .number {
      outline: none;
      border-style: none;
      text-align: center;
      background: #222222;
    }
    .text {
      display: flex;
      justify-content: start;
      align-items: center;
    }
    .none {
      display: none;
    }
  }
  .tHead {
    position: sticky;
    top: 0;
    background: #0c0c0c;
  }
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
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
      grid-template-columns: calc(20% - 1.7rem) 15% 15% 15% 15% 10% 10%;
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
      .number {
        outline: none;
        border-style: none;
        text-align: center;
        background: #222222;
      }
      .text {
        display: flex;
        justify-content: start;
        align-items: center;
      }
      .none {
        display: flex;
      }
    }
    .tHead {
      position: sticky;
      top: 0;
      background: #0c0c0c;
    }
  }
`;
// ?sector expenses
const ExpensesSt = styled.div`
  width: 100%;
  height: 100%;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: 2rem;
  row-gap: 0.2rem;
  background: #0c0c0c;
  overflow-y: scroll;
  /* border-right: 0.0625rem solid #333333; */
  .tRow {
    display: grid;
    grid-template-columns: 20% 60% calc(20% - 0.4rem);
    grid-template-rows: 100%;
    column-gap: 0.2rem;
    justify-content: center;
    align-content: center;
    /* &:hover {
        background: #2f2f2f;
        .cell {
          background: #2f2f2f;
        }
      } */
    .cell {
      background: #141414;
      font-size: 0.7rem;
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
    .title {
      display: flex;
      justify-content: start;
      align-items: center;
      text-align: left;
      font-family: "Roboto 700";
    }
    .number {
      outline: none;
      border-style: none;
      text-align: center;
      background: #222222;
    }
    .text {
      display: flex;
      justify-content: start;
      align-items: center;
      text-align: left;
      text-transform: none;
    }
  }
  .tHead {
    position: sticky;
    top: 0;
    background: #0c0c0c;
  }
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 100%;
    grid-auto-rows: 2rem;
    row-gap: 0.2rem;
    background: #0c0c0c;
    overflow-y: scroll;
    /* border-right: 0.0625rem solid #333333; */
    .tRow {
      display: grid;
      grid-template-columns: 15% 70% calc(15% - 0.9rem);
      grid-template-rows: 100%;
      column-gap: 0.2rem;
      justify-content: center;
      align-content: center;
      /* &:hover {
        background: #2f2f2f;
        .cell {
          background: #2f2f2f;
        }
      } */
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
      .title {
        display: flex;
        justify-content: start;
        align-items: center;
        text-align: left;
        font-family: "Roboto 700";
      }
      .number {
        outline: none;
        border-style: none;
        text-align: center;
        background: #222222;
      }
      .text {
        display: flex;
        justify-content: start;
        align-items: center;
        text-align: left;
        text-transform: none;
      }
    }
    .tHead {
      position: sticky;
      top: 0;
      background: #0c0c0c;
    }
  }
`;

const CashRegisterMain = () => {
  const app = useSelector((store: StoreInterface) => store.app);
  // console.log(app);
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };
  const [state, setState] = useState<CashRegisterIT>(cashRegisterTemplate);
  //console.log(state);
  // !Calculamos las ventas y el dinero de las ventas
  state.sales.map((i) => {
    i.sales = i.load + i.previousServer - i.currentServer;
    i.profit = i.sales * (i.price - i.cost);
    i.cash = i.sales * i.price;
    return i;
  });
  // // !Calculamos las ganancias
  // state.sales.map((i) => {
  //   i.profit = i.sales * (i.price - i.cost);
  //   return i;
  // });
  // !Sacamos el resultado de las ventas totales
  if (state.sales.length > 0) {
    state.dashboard.totalSales = state.sales
      .map((i) => i.cash)
      .reduce((i, c) => i + c);
  }
  // !Sacamos el resultado de los gastos totales
  state.dashboard.totalExpenses = state.expenses
    .map((i) => i.expense)
    .reduce((i, c) => i + c);
  // !Sacamos el Total balance
  state.dashboard.balance =
    state.dashboard.totalCash -
    (state.dashboard.totalSales +
      state.dashboard.pancafe -
      state.dashboard.totalExpenses);
  // !Function for get values and set on state
  const handleChangeSales = (
    e: React.ChangeEvent<HTMLInputElement>,
    identifier: string
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({
      ...state,
      sales: state.sales.map((i) => {
        if (i.name === identifier) {
          i[name] = value === "" ? 0 : parseInt(value);
        }
        return i;
      }),
    });
  };
  const handleChangeExpenses = (
    e: React.ChangeEvent<HTMLInputElement>,
    identifier: string
  ) => {
    const name = e.target.name;
    const value = e.target.value;
    const type = e.target.type;
    // console.log(value);
    setState({
      ...state,
      expenses: state.expenses.map((i) => {
        if (i.name === identifier) {
          i[name] =
            type === "text" ? value : value === "" ? 0 : parseFloat(value);
        }
        return i;
      }),
    });
  };
  const handleChangeDashboard = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    identifier: string
  ) => {
    const value = e.target.value;
    const type = e.target.type;
    // console.log(value, type);
    setState({
      ...state,
      dashboard: {
        ...state.dashboard,
        [identifier]:
          type === "select-one" ? value : value === "" ? 0 : parseFloat(value),
      },
    });
  };

  // !Function submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios
      .post(`${URI}/cash-register`, state, {
        headers: {
          authorization: `Bearer ${app.login.token}`,
        },
      })
      .then(function () {
        fetchProducts();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const cashRegisterReset = {
    createdAt: "",
    updatedAt: "",
    lastRecord: "",

    dashboard: {
      //_id: "",
      date: "",
      server: "ninguno",
      totalSales: 0,
      totalExpenses: 0,
      pancafe: 0,
      totalCash: 0,
      balance: 0,
    },
    sales: [
      {
        //_id: "",
        name: "producto01",
        cost: 0,
        price: 0,
        previousServer: 0,
        load: 0,
        currentServer: 0,
        sales: 0,
        cash: 0,
      },
    ],
    expenses: [
      {
        //_id: "",
        name: "gasto01",
        detail: "",
        expense: 0,
      },
      {
        //_id: "",
        name: "gasto02",
        detail: "",
        expense: 0,
      },
      {
        //_id: "",
        name: "gasto03",
        detail: "",
        expense: 0,
      },
      {
        //_id: "",
        name: "gasto04",
        detail: "",
        expense: 0,
      },
      {
        //_id: "",
        name: "gasto05",
        detail: "",
        expense: 0,
      },
      {
        //_id: "",
        name: "gasto06",
        detail: "",
        expense: 0,
      },
      {
        //_id: "",
        name: "gasto07",
        detail: "",
        expense: 0,
      },
      {
        //_id: "",
        name: "gasto08",
        detail: "",
        expense: 0,
      },
      {
        //_id: "",
        name: "gasto09",
        detail: "",
        expense: 0,
      },
      {
        //_id: "",
        name: "gasto10",
        detail: "",
        expense: 0,
      },
      {
        //_id: "",
        name: "gasto11",
        detail: "",
        expense: 0,
      },
      {
        //_id: "",
        name: "gasto12",
        detail: "",
        expense: 0,
      },
      {
        //_id: "",
        name: "gasto13",
        detail: "",
        expense: 0,
      },
      {
        //_id: "",
        name: "drako",
        detail: "",
        expense: 0,
      },
      {
        //_id: "",
        name: "jhasmy",
        detail: "",
        expense: 0,
      },
      {
        //_id: "",
        name: "zero",
        detail: "",
        expense: 0,
      },
      {
        //_id: "",
        name: "perro",
        detail: "",
        expense: 0,
      },
    ],
  };

  // !Set state whit data from redux
  const fetchProducts = useCallback(async () => {
    const fetchData = async (id: string) => {
      await axios
        .get(`${URI}/cash-register/${id}`, {
          headers: {
            authorization: `Bearer ${app.login.token}`,
          },
        })
        .then(function (response: any) {
          // console.log(response.data);
          // console.log(response.data);
          if (response.data) {
            letSales = letSales.map((i: any) => {
              if (response.data.sales.find((e: any) => e.name === i.name)) {
                if (
                  response.data.sales.find((e: any) => e.name === i.name)
                    .name === i.name
                ) {
                  i.previousServer = response.data.sales.find(
                    (e: any) => e.name === i.name
                  ).currentServer;
                }
              }
              return i;
            });
          }
          setState({
            ...state,
            sales: letSales,
            // login: { ...state.login, user: app.login.user },
            dashboard: cashRegisterReset.dashboard,
            expenses: cashRegisterReset.expenses,
            lastRecord: id,
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    };
    let letSales: any = [];
    // let id: "";

    await axios
      .get(`${URI}/products`, {
        headers: {
          authorization: `Bearer ${app.login.token}`,
        },
      })
      .then(function (response: any) {
        letSales = response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
    // ! Ogteniendo id del anterior registro
    await axios
      .get(`${URI}/cash-register-one`, {
        headers: {
          authorization: `Bearer ${app.login.token}`,
        },
      })
      .then(function (response: any) {
        // id = response.data[0]._id;
        fetchData(response.data[0]._id);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [
    state,
    cashRegisterReset.dashboard,
    cashRegisterReset.expenses,
    app.login.token,
  ]);

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log(state);
  return (
    <CashRegisterMainSt id="cash-register-main">
      <DashboardSt onSubmit={handleSubmit}>
        <section className="cellDashboard">
          <span className="cellDashboardTitle">fecha</span>
          <section className="cellDashboardInput date">
            {today.toLocaleDateString("es-ES", options)}
          </section>
        </section>
        <section className="cellDashboard">
          <span className="cellDashboardTitle">server</span>
          <select
            className="cellDashboardInput select"
            name="server"
            value={state.dashboard.server}
            onChange={(e) => handleChangeDashboard(e, e.target.name)}
          >
            <option value="ninguno">Ninguno</option>
            <option value="drako">drako</option>
            <option value="jhasmy">jhasmy</option>
            <option value="zero">zero</option>
            <option value="perro">perro</option>
            <option value="server dia">Server dia</option>
            <option value="server noche">Server noche</option>
          </select>
        </section>
        <section className="cellDashboard">
          <span className="cellDashboardTitle">ventas totales</span>
          <section className="cellDashboardInput">
            {state.dashboard.totalSales}
          </section>
        </section>
        <section className="cellDashboard">
          <span className="cellDashboardTitle">gastos totales</span>
          <section className="cellDashboardInput">
            {state.dashboard.totalExpenses}
          </section>
        </section>
        <section className="cellDashboard">
          <span className="cellDashboardTitle">pancafe</span>
          <input
            className="cellDashboardInput number"
            type="number"
            placeholder="0"
            onFocus={(e) => e.target.select()}
            // required
            name="pancafe"
            value={state.dashboard.pancafe === 0 ? "" : state.dashboard.pancafe}
            onChange={(e) => handleChangeDashboard(e, e.target.name)}
            step="0.1"
          />
        </section>
        <section className="cellDashboard">
          <span className="cellDashboardTitle">efectivo</span>
          <input
            className="cellDashboardInput number"
            type="number"
            placeholder="0"
            onFocus={(e) => e.target.select()}
            required
            name="totalCash"
            value={
              state.dashboard.totalCash === 0 ? "" : state.dashboard.totalCash
            }
            onChange={(e) => handleChangeDashboard(e, e.target.name)}
            step="0.1"
          />
        </section>
        <section className="cellDashboard">
          <span className="cellDashboardTitle">balance</span>
          <section
            className="cellDashboardInput"
            style={
              state.dashboard.balance < 0 ? { color: "red" } : { color: "lime" }
            }
          >
            {state.dashboard.balance.toFixed(2)}
          </section>
        </section>

        <section className="cellDashboard">
          <span className="cellDashboardTitle"></span>
          <button
            className="cellDashboardInput button"
            type="submit"
            style={
              state.dashboard.server === "ninguno" ||
              state.dashboard.totalCash === 0
                ? {
                    cursor: "not-allowed",
                    background: "#0c0b0b",
                    color: "white",
                  }
                : {
                    cursor: "pointer",
                    background: "#5900ff",
                    color: "#ffffff",
                  }
            }
            disabled={state.dashboard.server === "ninguno" ? true : false}
          >
            Guardar
          </button>
        </section>
      </DashboardSt>
      <div className="SalesAndExpenses">
        <SalesSt>
          <div className="tRow tHead">
            <section className="cell head ">Nombre</section>
            <section className="cell head">Precio</section>
            <section className="cell head">Server anterior</section>
            <section className="cell head">Carga</section>
            <section className="cell head">Server Actual</section>
            <section className="cell head ">Ventas</section>
            {/* <section className="cell head ">Ganancias</section> */}
            <section className="cell head none">Efectivo</section>
          </div>

          {state.sales.map((i) => (
            <div className="tRow" key={i.name}>
              <section className="cell text">{i.name}</section>
              <section className="cell">{i.price === 0 ? "" : i.price}</section>
              <section className="cell">
                {i.previousServer === 0 ? "" : i.previousServer}
              </section>
              <input
                className="cell number"
                type="number"
                name="load"
                value={i.load}
                onFocus={(e) => e.target.select()}
                onChange={(e) => handleChangeSales(e, i.name)}
                step="0.1"
                tabIndex={1}
                style={i.load > 0 ? { color: "#ffbb00" } : { color: "white" }}
                // placeholder="0"
              />
              <input
                className="cell number"
                type="number"
                name="currentServer"
                value={i.currentServer}
                onFocus={(e) => e.target.select()}
                onChange={(e) => handleChangeSales(e, i.name)}
                step="0.1"
                tabIndex={2}
                // placeholder="0"
              />
              <section
                className="cell"
                style={i.sales < 0 ? { color: "red" } : { color: "lime" }}
              >
                {i.sales === 0 ? "" : i.sales}
              </section>
              {/* <section className="cell none">
                {i.profit === 0 ? "" : i.profit.toFixed(2)}
              </section> */}
              <section className="cell none">
                {i.cash === 0 ? "" : i.cash}
              </section>
            </div>
          ))}
        </SalesSt>
        <ExpensesSt>
          <div className="tRow tHead">
            <section className="cell head">Nombre</section>
            <section className="cell head">Detalle</section>
            <section className="cell head">Gasto</section>
          </div>

          {state?.expenses.map((i) => (
            <div className="tRow" key={i.name}>
              <section
                className="cell title"
                style={
                  i.name === "drako"
                    ? { background: "#7209b7" }
                    : i.name === "jhasmy"
                    ? { background: "#560bad" }
                    : i.name === "zero"
                    ? { background: "#480ca8" }
                    : i.name === "perro"
                    ? { background: "#3a0ca3" }
                    : { background: "#141414" }
                }
              >
                {i.name}
              </section>
              <input
                className="cell number text"
                type="text"
                name="detail"
                value={i.detail}
                // onFocus={(e) => e.target.select()}
                onChange={(e) => handleChangeExpenses(e, i.name)}
              />
              <input
                className="cell number"
                type="number"
                name="expense"
                value={i.expense}
                onFocus={(e) => e.target.select()}
                onChange={(e) => handleChangeExpenses(e, i.name)}
                step="0.1"
              />
            </div>
          ))}
        </ExpensesSt>
        {state.sales.length === 1 ? <Spinner /> : null}
      </div>
    </CashRegisterMainSt>
  );
};

export default CashRegisterMain;
