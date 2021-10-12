import Error404 from "components/Error404";
import React from "react";
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
import Users from "./pages/Users";
import Video from "./pages/Video";
import AddProducts from "./pages/AddProducts";
import ListProducts from "./pages/ListProducts";
import UpdateProducts from "./organisms/UpdateProduct";
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
  return (
    <AdminSt id="admin">
      {/* <MobileSt>Voltea tu celular.</MobileSt> */}
      <Navigation />
      <Switch>
        <Route path="/admin" exact component={CashRegister} />
        <Route path="/admin/add-product/" component={AddProducts} />
        <Route path="/admin/video" component={Video} />
        <Route path="/admin/products" component={ListProducts} />
        <Route path="/admin/update-product/:id" component={UpdateProducts} />
        <Route path="/admin/cash-register" component={CashRegister} />
        <Route path="/admin/reports" component={Reports} />
        <Route path="/admin/charts/" component={Charts} />
        <Route path="/admin/users/" component={Users} />
        <Route path="/admin/check/:id" component={Check} />
        <Route path="/admin/watch/:id" component={Watch} />
        <Route component={Error404} />
      </Switch>
    </AdminSt>
  );
};

export default Admin;
