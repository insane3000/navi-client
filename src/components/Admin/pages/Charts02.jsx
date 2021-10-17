import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Line } from "react-chartjs-2";
import axios from "axios";
//* Redux
import { useSelector } from "react-redux";
// *Axios
import { URI } from "config/axios";
const ChartsSt = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
      .get(`${URI}/cash-register`, {
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
  const validationQuantity = (x, value) => {
    return x.sales.find((e) => e.name === value).profit === undefined
      ? 0
      : x.sales.find((e) => e.name === value).profit;
  };

  let charts = [];
  state?.map((i) => {
    charts = [
      ...charts,
      {
        date: new Date(i.createdAt).toLocaleDateString("es-ES", optionsDate),
        balance: i.dashboard.totalCash,

        popularesProfit: validationQuantity(i, "populares"),
        monsterProfit: validationQuantity(i, "monster"),
        voltProfit: validationQuantity(i, "volt"),
        maltaProfit: validationQuantity(i, "malta"),
        jugoProfit: validationQuantity(i, "jugo"),
        aloeVeraProfit: validationQuantity(i, "aloe vera"),
        redbullProfit: validationQuantity(i, "redbull"),
        agua2lProfit: validationQuantity(i, "agua 2l"),
        agua6lProfit: validationQuantity(i, "agua 6l"),
        chisitosProfit: validationQuantity(i, "chisitos"),
        papelProfit: validationQuantity(i, "papel"),
        marilanProfit: validationQuantity(i, "marilan"),
        // aloetaiProfit: validationQuantity(i, "aloe tai"),
      },
    ];
    return i;
  });
  const validation2 = (e, v, name) => {
    return e[`${name}Profit`] + v[`${name}Profit`];
  };

  const algoritm = charts.reduce((acumulador, valorActual) => {
    const elementoYaExiste = acumulador.find(
      (elemento) => elemento.date === valorActual.date
    );
    if (elementoYaExiste) {
      return acumulador.map((elemento) => {
        // console.log(elemento);
        if (elemento.date === valorActual.date) {
          return {
            ...elemento,
            balance: elemento.balance + valorActual.balance,
            popularesProfit: validation2(elemento, valorActual, "populares"),
            monsterProfit: validation2(elemento, valorActual, "monster"),
            voltProfit: validation2(elemento, valorActual, "volt"),
            maltaProfit: validation2(elemento, valorActual, "malta"),
            jugoProfit: validation2(elemento, valorActual, "jugo"),
            aloeVeraProfit: validation2(elemento, valorActual, "aloe vera"),
            redbullProfit: validation2(elemento, valorActual, "redbull"),
            agua2lProfit: validation2(elemento, valorActual, "agua 2l"),
            agua6lProfit: validation2(elemento, valorActual, "agua 6l"),
            chisitosProfit: validation2(elemento, valorActual, "chisitos"),
            papelProfit: validation2(elemento, valorActual, "papel"),
            marilanProfit: validation2(elemento, valorActual, "marilan"),
            // aloetaiProfit: validation2(elemento, valorActual, "aloe tai"),
          };
        }
        return elemento;
      });
    }

    return [...acumulador, valorActual];
  }, []);

  const totalProfits = algoritm.map(
    (i) =>
      (!i.popularesProfit ? 0 : i.popularesProfit) +
      (!i.monsterProfit ? 0 : i.monsterProfit) +
      (!i.voltProfit ? 0 : i.voltProfit) +
      (!i.maltaProfit ? 0 : i.maltaProfit) +
      (!i.jugoProfit ? 0 : i.jugoProfit) +
      (!i.aloeVeraProfit ? 0 : i.aloeVeraProfit) +
      (!i.redbullProfit ? 0 : i.redbullProfit) +
      (!i.agua2lProfit ? 0 : i.agua2lProfit) +
      (!i.agua6lProfit ? 0 : i.agua6lProfit) +
      (!i.chisitosProfit ? 0 : i.chisitosProfit) +
      (!i.papelProfit ? 0 : i.papelProfit) +
      (!i.marilanProfit ? 0 : i.marilanProfit)
  );

  let date = algoritm.map((i) => i.date);
  let popularesProfit = algoritm.map((i) => i.popularesProfit);
  let monsterProfit = algoritm.map((i) => i.monsterProfit);
  let voltProfit = algoritm.map((i) => i.voltProfit);
  let maltaProfit = algoritm.map((i) => i.maltaProfit);
  let jugoProfit = algoritm.map((i) => i.jugoProfit);
  let aloeVeraProfit = algoritm.map((i) => i.aloeVeraProfit);
  let redbullProfit = algoritm.map((i) => i.redbullProfit);
  let agua2lProfit = algoritm.map((i) => i.agua2lProfit);
  let agua6lProfit = algoritm.map((i) => i.agua6lProfit);
  let chisitosProfit = algoritm.map((i) => i.chisitosProfit);
  let papelProfit = algoritm.map((i) => i.papelProfit);
  let marilanProfit = algoritm.map((i) => i.marilanProfit);
  // let aloetaiProfit = algoritm.map((i) => i.aloetaiProfit);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const complete = [
    {
      label: "Total Ganancias",
      data: totalProfits,
      fill: false,
      backgroundColor: "rgb(255, 0, 76)",
      borderColor: "rgb(255, 0, 76)",
    },
    {
      label: "Populares",
      data: popularesProfit,
      fill: false,
      backgroundColor: "rgb(68, 0, 255)",
      borderColor: "rgb(68, 0, 255)",
    },

    {
      label: "Monster",
      data: monsterProfit,
      fill: false,
      backgroundColor: "rgb(68, 0, 255)",
      borderColor: "rgb(68, 0, 255)",
    },
    {
      label: "Volt",
      data: voltProfit,
      fill: false,
      backgroundColor: "rgb(68, 0, 255)",
      borderColor: "rgb(68, 0, 255)",
    },
    {
      label: "Malta",
      data: maltaProfit,
      fill: false,
      backgroundColor: "rgb(68, 0, 255)",
      borderColor: "rgb(68, 0, 255)",
    },
    {
      label: "jugo",
      data: jugoProfit,
      fill: false,
      backgroundColor: "rgb(68, 0, 255)",
      borderColor: "rgb(68, 0, 255)",
    },
    {
      label: "aloeVera",
      data: aloeVeraProfit,
      fill: false,
      backgroundColor: "rgb(68, 0, 255)",
      borderColor: "rgb(68, 0, 255)",
    },
    {
      label: "redbull",
      data: redbullProfit,
      fill: false,
      backgroundColor: "rgb(68, 0, 255)",
      borderColor: "rgb(68, 0, 255)",
    },
    {
      label: "agua2l",
      data: agua2lProfit,
      fill: false,
      backgroundColor: "rgb(68, 0, 255)",
      borderColor: "rgb(68, 0, 255)",
    },
    {
      label: "agua6l",
      data: agua6lProfit,
      fill: false,
      backgroundColor: "rgb(68, 0, 255)",
      borderColor: "rgb(68, 0, 255)",
    },
    {
      label: "chisitos",
      data: chisitosProfit,
      fill: false,
      backgroundColor: "rgb(68, 0, 255)",
      borderColor: "rgb(68, 0, 255)",
    },

    {
      label: "papel",
      data: papelProfit,
      fill: false,
      backgroundColor: "rgb(68, 0, 255)",
      borderColor: "rgb(68, 0, 255)",
    },
    {
      label: "Marilan",
      data: marilanProfit,
      fill: false,
      backgroundColor: "rgb(68, 0, 255)",
      borderColor: "rgb(68, 0, 255)",
    },
    // {
    //   label: "aloeTai Ganancias",
    //   data: aloeTaiProfit,
    //   fill: false,
    //   backgroundColor: "rgb(68, 0, 255)",
    //   borderColor: "rgb(68, 0, 255)",
    // },
  ];
  // console.log(complete);

  const data = {
    labels: date,
    datasets: complete,
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
    </ChartsSt>
  );
};

export default Charts;
