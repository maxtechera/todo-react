import React from "react";
import styled from "styled-components";

const Footer = () => (
  <Container>
    <ItemsLeft> 0 items left</ItemsLeft>
  </Container>
);

const Container = styled.div`
  color: rgb(119, 119, 119);
  height: 20px;
  text-align: center;
  padding: 10px 15px;
  border-top: 1px solid rgb(230, 230, 230);
`;
export default Footer;
