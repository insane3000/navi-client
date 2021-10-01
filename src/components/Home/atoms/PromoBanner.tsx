import React from "react";
import styled from "styled-components";
const PromoBannerSt = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  .imgPromo {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .gradient {
    width: 100%;
    height: 100%;
    /* background: linear-gradient(0deg, #7822c3 0%, rgba(224, 253, 45, 0) 39%); */
    position: absolute;
  }
  .dataPromo {
    /* background: red; */
    position: absolute;
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1rem;
    .titlePromo {
      font-family: "Luckiest Guy";
      color: white;
      font-size: 4rem;
      line-height: 4rem;
      text-align: center;
      margin-bottom: 1rem;
      text-shadow: 2px 2px 5px black;
    }
    .line {
      font-family: "Roboto 100";
      color: white;
      font-size: 1.5rem;
      text-align: center;
      text-shadow: 1px 1px 5px black;
    }
  }
  // !Styles for DESKTOP
  @media only screen and (min-width: 568px) {
    .imgPromo {
    }
    .gradient {
    }
    .dataPromo {
    }
    .line {
    }
  }
`;
interface Props {
  img: string;
  gradient: string;
  title: string;
  line01: string;
  line02: string;
}
const PromoBanner = (props: Props) => {
  return (
    <PromoBannerSt>
      <img
        className="imgPromo"
        src={props.img}
        alt={props.img}
        loading="lazy"
      />
      <section
        className="gradient"
        style={{ background: `${props.gradient}` }}
      ></section>
      <section className="dataPromo">
        <h2 className="titlePromo">{props.title}</h2>
        <h3 className="line">{props.line01}</h3>
        <h3 className="line">{props.line02}</h3>
      </section>
    </PromoBannerSt>
  );
};

export default PromoBanner;
