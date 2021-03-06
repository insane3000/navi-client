import Error404 from "components/Error404";
import { Switch, Route } from "react-router-dom";
import styled from "styled-components";
// *Components
import Navigation from "./organisms/Navigation";
// import Products from "./pages/Products";
import CashRegister from "./pages/CashRegister";
import Reports from "./pages/Reports";
import Check from "components/Admin/pages/Check";
import Watch from "components/Admin/pages/Watch";
import Charts from "./pages/Charts";
import Charts02 from "./pages/Charts02";
import Charts03 from "./pages/Charts03";
import Users from "./pages/Servers";
import AddProducts from "./pages/AddProducts";
import Login from "./pages/Login";
import Facturas from "./pages/Facturas";
import ListProducts from "./pages/ListProducts";
import UpdateProducts from "./organisms/UpdateProduct";
import { StoreInterface } from "interfaces/storeTemplate";
import { useDispatch, useSelector } from "react-redux";
import User from "./pages/User";
// import Maintenance from "./pages/Maintenance";
import { useEffect } from "react";
import { loginServer } from "redux/actions/appAction";
// import AddPc from "./organisms/AddPc";
import ListOfPc from "./pages/ListOfPc";
import UploadInvoice from "./pages/UploadInvoice";
import Slider from "./pages/Slider";
import GalleryInvoices from "./pages/GalleryInvoices";
import Wifi from "./pages/Wifi.tsx";
const AdminSt = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 4rem calc(100% - 4rem);
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    display: grid;
    grid-template-columns: 10% 90%;
    grid-template-rows: 100%;
  }
`;

const Admin = () => {
  //   const history = useHistory();
  const dispatch = useDispatch();
  const app = useSelector((store: StoreInterface) => store.app);

  useEffect(() => {
    if (localStorage.getItem("token") && localStorage.getItem("user")) {
      dispatch(loginServer(`${localStorage.getItem("user")}`, `${localStorage.getItem("token")}`));
    }
  }, [dispatch]);
  return (
    <AdminSt id="admin">
      {/* <MobileSt>Voltea tu celular.</MobileSt> */}
      <Navigation />
      <Switch>
        <Route path="/admin" exact component={Login} />
        <Route path="/admin/login" exact component={Login} />
        {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
          <Route path="/admin/add-product/" component={AddProducts} />
        ) : null}
        {app.login.user !== "" ? <Route path="/admin/user" component={User} /> : null}
        {app.login.user !== "" ? <Route path="/admin/maintenance" component={ListOfPc} /> : null}
        {/* {app.login.user !== "" ? (
          <Route path="/admin/maintenance/:id" component={AddPc} />
        ) : null} */}
        {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
          <Route path="/admin/wifi" component={Wifi} />
        ) : null}
        {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
          <Route path="/admin/products" component={ListProducts} />
        ) : null}
        {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
          <Route path="/admin/update-product/:id" component={UpdateProducts} />
        ) : null}
        {app.login.user !== "" ? (
          <Route path="/admin/cash-register" component={CashRegister} />
        ) : null}
        {app.login.user !== "" ? <Route path="/admin/facturas" component={Facturas} /> : null}
        {app.login.user !== "" ? (
          <Route path="/admin/gallery/:id" component={GalleryInvoices} />
        ) : null}
        {app.login.user !== "" ? <Route path="/admin/slider" component={Slider} /> : null}
        {app.login.user !== "" ? (
          <Route path="/admin/upload-invoice" component={UploadInvoice} />
        ) : null}
        {app.login.user !== "" ? <Route path="/admin/reports" component={Reports} /> : null}
        {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
          <Route path="/admin/charts/" component={Charts} />
        ) : null}
        {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
          <Route path="/admin/charts02/" component={Charts02} />
        ) : null}
        {app.login.user !== "" ? <Route path="/admin/charts03/" component={Charts03} /> : null}
        {app.login.user !== "" ? <Route path="/admin/servers/" component={Users} /> : null}
        {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
          <Route path="/admin/check/:id" component={Check} />
        ) : null}
        {app.login.user !== "" ? <Route path="/admin/watch/:id" component={Watch} /> : null}
        <Route component={Error404} />
      </Switch>
    </AdminSt>
  );
};

export default Admin;
