import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import axios from "axios";
//* Redux
import { useSelector } from "react-redux";
// *Axios
import { URI } from "config/axios";
import Spinner from "./Spinner";
const ChartsSt = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .mobile {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto 300";
    font-size: 2rem;
    color: white;
  }
  .chartContainer {
    width: 100%;
    height: 100%;
    display: none;
    justify-content: center;
    align-items: center;
  }
  /* transform: rotate(90deg); */
  // !Estilos para Desktop */
  @media only screen and (min-width: 568px) {
    /* display: flex;
    justify-content: center;
    align-items: center; */
    .mobile {
      display: none;
    }
    .chartContainer {
      display: flex;
    }
  }
`;

const Charts = () => {
  const [state, setState] = useState();
  const app = useSelector((store) => store.app);
  const fetchData = () => {
    axios
      .get(`${URI}/charts-anual`, {
        headers: {
          authorization: `Bearer ${app.login.token}`,
        },
      })
      .then(function (response) {
        setState(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

 
  const optionsDate = {
    weekday: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
  };

  let charts = [];
  state?.map((i) => {
    charts = [
      ...charts,
      {
        date: new Date(i.date).toLocaleDateString("es-ES", optionsDate),
        balance: i.dashboard.totalCash,
        expenses: i.dashboard.totalExpenses,
        sales: i.dashboard.totalSales,
        pancafe: i.dashboard.pancafe,
      },
    ];
    return i;
  });
  // console.log(charts);
  const algoritm = charts.reduce((acumulador, valorActual) => {
    const elementoYaExiste = acumulador.find(
      (elemento) => elemento.date === valorActual.date
    );
    if (elementoYaExiste) {
      return acumulador.map((elemento) => {
        if (elemento.date === valorActual.date) {
          return {
            ...elemento,
            balance: elemento.balance + valorActual.balance,
            expenses: elemento.expenses + valorActual.expenses,
            sales: elemento.sales + valorActual.sales,
            pancafe: elemento.pancafe + valorActual.pancafe,
          };
        }

        return elemento;
      });
    }

    return [...acumulador, valorActual];
  }, []);
  let date = algoritm.map((i) => i.date);
  let balance = algoritm.map((i) => i.balance);
  let expenses = algoritm.map((i) => i.expenses);
  let sales = algoritm.map((i) => i.sales);
  let pancafe = algoritm.map((i) => i.pancafe);
  // console.log(sales);
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const data = {
    labels: date,
    datasets: [
      {
        label: "Cash",
        data: balance,
        fill: false,
        backgroundColor: "rgb(30, 255, 0)",
        borderColor: "rgb(30, 255, 0)",
        // yAxisID: "y-axis-1",
      },
      {
        label: "Gastos",
        data: expenses,
        fill: false,
        backgroundColor: "rgb(255, 0, 0)",
        borderColor: "rgb(255, 0, 0)",
        // yAxisID: "y-axis-1",
      },
      {
        label: "Ventas",
        data: sales,
        fill: false,
        backgroundColor: "rgb(255, 187, 0)",
        borderColor: "rgb(255, 187, 0)",
        // yAxisID: "y-axis-1",
      },
      {
        label: "Pancafe",
        data: pancafe,
        fill: false,
        backgroundColor: "rgb(81, 0, 255)",
        borderColor: "rgb(81, 0, 255)",
        // yAxisID: "y-axis-1",
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: true,
          drawBorder: true,
          drawOnChartArea: true,
          drawTicks: true,
        },
      },
      y: {
        grid: {
          drawBorder: false,
          color: "#222222",
        },
      },
    },
  };
  return (
    <ChartsSt>
      <section className="mobile">Voltea tu celular</section>
      <section className="chartContainer">
        <Line data={data} options={options} />
      </section>
      {!state && <Spinner />}
    </ChartsSt>
  );
};

export default Charts;
