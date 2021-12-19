import React from "react";
import styled from "styled-components";

const Vest_AbsoluteElements = (props) => {
  return (
    <InitX>
      <Styled>
        <div className="block-one"></div>
        <div className="block-two"></div>
      </Styled>
      <div className="block-tree"></div>
    </InitX>
  );
};

const InitX = styled.div`
  .block-one {
    width: 100px;
    height: 100px;
    background-color: green;

    border: 5px solid black;

    border-bottom: none;

    z-index: 5;
    /* box-sizing: border-box; */
  }

  .block-two {
    position: absolute;
    top: 100%;
    top: 90%;
    left: 10px;
    width: 300px;
    height: 100px;
    background-color: red;
    border: 5px solid black;
    z-index: 1;
    margin-top: -10px;
    /* opacity: .3; */
  }

  .block-one {
    width: 100px;
    height: 100px;
    background-color: green;

    border: 5px solid black;

    border-bottom: none;

    z-index: 5;
    /* box-sizing: border-box; */
  }

  .block-tree {
      position: relative;
    width: 100px;
    height: 100px;
    background-color: green;

    border: 5px solid black;

    border-bottom: none;

    z-index: 5;
  }
`;

const Styled = styled.div`
  position: relative;
  z-index: 0;
`;

export default Vest_AbsoluteElements;
