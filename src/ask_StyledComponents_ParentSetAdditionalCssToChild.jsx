import React from "react";
import styled from "styled-components";


// how to :
// -------------App.js
import Card from "./Card";

const Container =  styled.div`
  background-color: green;

  ${Card}:not(:last-child) {
    margin-right: 20px;
  }
`;

const App = (props) => {
  return (
    <Container>

        
      {/* vvvvvvv With Margin */}
      <Card />


      {/* vvvvvvv With Margin */}
      <Card />


      {/* vvvvvvv No Margin */}
      <Card />
    </Container>
  );
}


// ------------Card.jsx
const Envelope =  styled.div`
  background-color: red;
  padding: 10px;
`;


const Cardd = (props) => {
  return (
    <Envelope>
      <p>asdhh</p>
      <p>123</p>
      <p>!@#</p>
    </Envelope>
  );
};