import React from "react";
import styled from "styled-components";

const UserSt = styled.nav`
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  // !Estilos para Desktop
  @media only screen and (min-width: 568px) {
  }
`;
const User = () => {
  return <UserSt>User</UserSt>;
};

export default User;
