import React from "react";
import styled from "styled-components";
import useToggle from "../../../../../hooks/useToggle";

const VarTest = (props) => {
  const [displayFilters, toggleDisplayFilters] = useToggle(true);
  
  return (
    <Styled>
      <button onClick={toggleDisplayFilters}>Click</button>
      <div class="container">
      {/* <div class="container" style={{width: displayFilters? "300px" : "100%" }}> */}
        <span class="overflower">
          <span
            class="overflower-short"
            aria-hidden="true"
            title="Some long text that could become shorter"
          >
            Short text here is.
          </span>
          <span class="overflower-long">
            <div>
              <button>test123213123123123 </button>
              <button>test123213123123123 </button>
              <button>test123213123123123 </button>
              {displayFilters && <button>test123213123123123 </button>}
            </div>
          </span>
        </span>
      </div>
    </Styled>
  );
};

const Styled = styled.div`
    background-color: green;
    width: 600px;

  .container {
    background-color: red;
    width: 500px;
  }

  .overflower {
    display: inline-block;
    overflow: hidden;

    box-sizing: border-box;
    max-width: 100%;
    height: 1.5em;
    line-height: 1.5em;

    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .overflower-long {
    display: inline;
  }

  .overflower-short {
    display: none;
  }

  .overflower-long > div {
    display: flex;
  }

  @supports (flex-wrap: wrap) {
    .overflower {
      display: inline-flex;
      flex-wrap: wrap;
    }

    .overflower-short {
      display: block;
      overflow: hidden;

      flex-grow: 1;
      width: 0;

      text-overflow: ellipsis;
    }

    .overflower-long {
      flex-basis: 100%;
    }
  }
`;
export default VarTest;
