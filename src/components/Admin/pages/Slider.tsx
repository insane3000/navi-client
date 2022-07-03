import axios from "axios";
import { URI } from "config/axios";
import { StoreInterface } from "interfaces/storeTemplate";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Swipeable, defineSwipe } from "react-touch";
//*Icons
import BackIcon from "icons/BackIcon";
import ArrowLeftIcon from "icons/ArrowLeftIcon";
import ArrowRightIcon from "icons/ArrowRightIcon";
import DownloadIcon from "icons/DownloadIcon";
import Spinner from "./Spinner";
import SpinnerImg from "components/Admin/atoms/SpinnerImg";
import { loginServer } from "redux/actions/appAction";
const SliderSt = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  .sysIconArrowBack {
    width: 2rem;
    height: 2rem;
    color: white;
    position: absolute;
    left: 0.5rem;
    top: 0.5rem;
    cursor: pointer;
  }
  .sysIconDownload {
    width: 2rem;
    height: 2rem;
    color: white;
    position: absolute;
    right: 4rem;
    top: 0.5rem;
    cursor: pointer;
  }
  .counter {
    width: auto;
    height: 1.5rem;
    line-height: 1.5rem;
    color: white;
    position: absolute;
    right: 0.5rem;
    top: 0.9rem;
    font-family: "Roboto 300";
    font-size: 1.5rem;
    /* text-shadow: 1px 1px 3px #0000007b; */
  }
  .img-container {
    height: 100%;
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .poster {
      height: 100%;
      width: 100%;
      object-fit: contain;
      /* background: red; */
    }
    .gradient {
      width: 100%;
      height: 100%;
      position: absolute;
      background: rgb(0, 0, 0);
      background: linear-gradient(0deg, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.5) 100%);
    }
  }
  .arrow {
    position: absolute;
    width: 2rem;
    height: 2rem;
    color: #000000;
    background: #ffffff;
    border-radius: 100%;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  .right {
    right: 6rem;
    bottom: 4rem;
  }
  .left {
    left: 6rem;
    bottom: 4rem;
  }
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .sysIconArrowBack {
      width: 3rem;
      height: 3rem;
      color: white;
      position: absolute;
      left: 2rem;
      top: 2rem;
      cursor: pointer;
    }
    .sysIconDownload {
      width: 3rem;
      height: 3rem;
      color: white;
      position: absolute;
      right: 8rem;
      top: 2rem;
      cursor: pointer;
    }
    .counter {
      width: auto;
      height: 3rem;
      line-height: 3rem;
      color: white;
      position: absolute;
      right: 2rem;
      top: 2rem;
      font-family: "Roboto 300";
      font-size: 2rem;
      /* text-shadow: 1px 1px 3px #0000007b; */
    }
    .img-container {
      height: 100%;
      width: 100%;
      overflow: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      .poster {
        height: 100%;
        width: 100%;
        object-fit: contain;
        /* background: red; */
      }
      .gradient {
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgb(0, 0, 0);
        background: linear-gradient(0deg, rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.5) 100%);
      }
    }
    .arrow {
      position: absolute;
      width: 4rem;
      height: 4rem;
      color: #000000;
      background: #ffffff;
      border-radius: 100%;
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    .right {
      right: 2rem;
      bottom: auto;
    }
    .left {
      left: 2rem;
      bottom: auto;
    }
  }
`;
const Slider = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  //   const params = useParams();
  const location = useLocation();
  const paramsLocation = new URLSearchParams(location.search);
  const id = paramsLocation.get("id");
  const app = useSelector((store: StoreInterface) => store.app);
  const [state, setState] = useState({
    year: "",
    month: "",
    imageM: [],
  });
  const [index, setIndex] = useState<any>(0);
  //!Spinner
  const [spinner, setSpinner] = useState(true);
  const [spinnerImg, setSpinnerImg] = useState(false);
  //!Fetch data
  const fetchData = async () => {
    setSpinner(true);
    setSpinnerImg(true);
    await axios
      .get(`${URI}/invoice/${id}`, {
        headers: {
          authorization: `Bearer ${app.login.token}`,
        },
      })
      .then(function (response: any) {
        setState(response.data);
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
    setIndex(paramsLocation.get("index"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const swipe = defineSwipe({ swipeDistance: 25 });
  async function toDataURL(url: any) {
    return await fetch(url)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        return URL.createObjectURL(blob);
      });
  }

  async function download(url: any, name = "download", type = "png") {
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = await toDataURL(url);
    a.download = name + "." + type;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  // !Spinner Poster
  const handleLoadImg = (e: any) => {
    e.currentTarget.complete && setSpinnerImg(false);
  };
  const month: any = [
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
  //   console.log(state);

  return (
    <SliderSt>
      <Swipeable
        config={swipe}
        onSwipeLeft={() => {
          if (index < state.imageM.length - 1) {
            setSpinnerImg(true);

            setIndex(parseInt(index) + 1);
          }
        }}
        onSwipeRight={() => {
          if (index > 0) {
            setSpinnerImg(true);
            setIndex(parseInt(index) - 1);
          }
        }}
      >
        <div className="img-container">
          <img
            className="poster"
            src={`${URI}/static/invoices/${state.imageM[index]}`}
            alt=""
            onLoad={(e) => handleLoadImg(e)}
          />
          <section className="gradient"></section>
          {spinnerImg && <SpinnerImg />}
        </div>
      </Swipeable>
      <DownloadIcon
        className="sysIconDownload"
        onClick={() =>
          download(
            `${URI}/static/invoices/${state.imageM[index]}`,
            `${state.year}-${month[state.month]}-Factura${parseInt(index) + 1}-${Date.now()}`,
            "webp"
          )
        }
      />
      <BackIcon className="sysIconArrowBack" onClick={() => history.goBack()} />
      <section className="counter">{parseInt(index) + 1 + "/" + state.imageM.length}</section>
      {index > 0 && (
        <ArrowLeftIcon
          className="arrow left"
          onClick={() => {
            setSpinnerImg(true);
            setIndex(parseInt(index) - 1);
          }}
        />
      )}
      {index < state.imageM.length - 1 && (
        <ArrowRightIcon
          className="arrow right"
          onClick={() => {
            setSpinnerImg(true);
            setIndex(parseInt(index) + 1);
          }}
        />
      )}
      {spinner && <Spinner />}
    </SliderSt>
  );
};

export default Slider;
