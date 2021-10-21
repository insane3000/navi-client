import React from "react";
import styled from "styled-components";

const MaintenanceSt = styled.nav`
  width: 100%;
  height: 100%;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 32vw);
  grid-auto-rows: 32vw;
  gap: 0.2rem;
  justify-content: center;
  align-content: flex-start;
  overflow-y: scroll;
  padding: 0.2rem;

  .pc {
    background: #131312;
    border-radius: 0.3rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0 0.5rem;
    position: relative;
    :hover {
      background: #5100ff;
      .days {
        color: red;
      }
    }
    .number {
      font-family: "Roboto 900";
      font-size: 1rem;
      position: absolute;
      left: 0.5rem;
      top: 0.3rem;
    }
    .details {
      position: absolute;
      left: 0.5rem;
      bottom: 0.5rem;
      width: 29vw;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .specs {
        width: 100%;
        font-family: "Roboto 300";
        font-size: 0.5rem;
        position: relative;
        span {
          position: absolute;
          right: 0;
          color: red;
        }
      }
    }

    .days {
      position: absolute;
      font-family: "Roboto 700";
      font-size: 1.5rem;
      right: 0.3rem;
      top: 0.3rem;
      color: red;
    }
  }
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    width: 100%;
    height: 100%;
    color: white;
    display: grid;
    grid-template-columns: repeat(8, 10rem);
    grid-auto-rows: 10rem;
    gap: 0.5rem;
    justify-content: center;
    align-content: flex-start;
    overflow-y: scroll;
    padding: 1rem;

    .pc {
      background: #131312;
      border-radius: 0.3rem;
      cursor: pointer;
      border: 0.0625rem solid #0a0a0a;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      padding: 0 0.5rem;
      position: relative;
      :hover {
        border: 0.0625rem solid #5100ff;
        background: #5100ff;
        .days {
          color: red;
        }
      }
      .number {
        font-family: "Roboto 900";
        font-size: 1.5rem;
        position: absolute;
        left: 0.5rem;
        top: 0.5rem;
      }
      .details {
        position: absolute;
        left: 0.5rem;
        bottom: 0.5rem;
        width: 9rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .specs {
          width: 100%;
          font-family: "Roboto 300";
          font-size: 0.6rem;
          position: relative;
          span {
            position: absolute;
            right: 0;
            color: red;
          }
        }
      }

      .days {
        position: absolute;
        font-family: "Roboto 700";
        font-size: 1.5rem;
        right: 0.5rem;
        top: 0.5rem;
        color: #5900ff;
      }
    }
  }
`;
const Mantenimiento = () => {
  const numbersPc = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
  ];
  return (
    <MaintenanceSt>
      {numbersPc.map((i) => (
        <div className="pc" key={i}>
          <h2 className="number">Pc {i}</h2>
          <section className="details">
            <p className="specs">Intel Core i5 6400</p>
            <p className="specs">Ddr4 8Gb</p>
            <p className="specs">H110 MSI</p>
            <p className="specs">Gigabyte 500w Bronze</p>
            <p className="specs">Zotac GTX 1060 6gb</p>
            <p className="specs">Corsair Carbide Spec Alpha</p>
            <p className="specs">
              Gigabyte Mechanical <span>0</span>
            </p>
            <p className="specs">
              Delux gt 206 <span>0</span>
            </p>
            <p className="specs">
              Delux m506 <span>0</span>
            </p>
          </section>
          <section className="days">0</section>
        </div>
      ))}
    </MaintenanceSt>
  );
};

export default Mantenimiento;
