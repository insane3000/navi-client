import styled from "styled-components";
import { Switch, Route } from "react-router-dom";
// import Error404 from "components/Error404";
// import AddProducts from "../organisms/AddProducts";
import ListProducts from "./ListProducts";
import UpdateProducts from "../organisms/UpdateProduct";
const ProductsSt = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: black;
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Roboto 300";
    font-size: 2rem;
  }
`;

const Products = () => {
  return (
    <ProductsSt>
      <Switch>
        <Route path="/admin/products" exact component={ListProducts} />
        <Route
          path="/admin/products/update-products/:id"
          exact
          component={UpdateProducts}
        />
      </Switch>
    </ProductsSt>
  );
};

export default Products;
