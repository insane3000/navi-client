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
import Users from "./pages/Servers";
import AddProducts from "./pages/AddProducts";
import Login from "./pages/Login";
import ListProducts from "./pages/ListProducts";
import UpdateProducts from "./organisms/UpdateProduct";
import { StoreInterface } from "interfaces/storeTemplate";
import { useSelector } from "react-redux";
import User from "./pages/User";
import Maintenance from "./pages/Maintenance";
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
// const MobileSt = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
//   font-family: "Roboto 300";
//   font-size: 2rem;
//   // !Estilos para Desktop
//   @media only screen and (min-width: 568px) {
//     display: none;
//   }
// `;

const Admin = () => {
  const app = useSelector((store: StoreInterface) => store.app);
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
        {app.login.user !== "" ? (
          <Route path="/admin/user" component={User} />
        ) : null}
        {app.login.user !== "" ? (
          <Route path="/admin/maintenance" component={Maintenance} />
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
        {app.login.user !== "" ? (
          <Route path="/admin/reports" component={Reports} />
        ) : null}
        {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
          <Route path="/admin/charts/" component={Charts} />
        ) : null}
        {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
          <Route path="/admin/charts02/" component={Charts02} />
        ) : null}
        {app.login.user !== "" ? (
          <Route path="/admin/servers/" component={Users} />
        ) : null}
        {app.login.user === "6168d53fe7c7ac0c748c1332" ? (
          <Route path="/admin/check/:id" component={Check} />
        ) : null}
        {app.login.user !== "" ? (
          <Route path="/admin/watch/:id" component={Watch} />
        ) : null}
        <Route component={Error404} />
      </Switch>
    </AdminSt>
  );
};

export default Admin;
