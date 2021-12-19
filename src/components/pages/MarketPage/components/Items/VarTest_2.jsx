import React, { useRef, useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

const VarTest_2 = (props) => {
  const [counter, setCounter] = useState([1, 2,3]);
  const ref = useRef(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  // Things involving accessing DOM properties on element
  // In the case of what this question actually asks:

  useEffect(() => {
    const hasOverflowingChildren =
      ref.current.offsetHeight < ref.current.scrollHeight ||
      ref.current.offsetWidth < ref.current.scrollWidth;

    setIsOverflowing(hasOverflowingChildren);

    if(!hasOverflowingChildren) {
        if(counter.length > 0) {
            console.log(`counter[counter.length-1]`);
            console.log(counter[counter.length-1]);
            // counter[counter.length-1].style.opacity =  1;
        }
    }
    console.log("hasOverflowingChildren", hasOverflowingChildren);
  }, [counter]);

  const buttons = counter.map((x, i) => {
    return <button key={i} style={{opacity: 0}}>test123213123123123 </button>;
  });
  
  const filter = counter.filter((x, i) => i !== 0);

  console.log('filter', filter);

  const selectedFiltersDropdown = <button>asd</button>;

  return (
    <Styled>
      <button onClick={() => setCounter((old) => [...old, "test"])}>
        Click
      </button>
      <button
        onClick={() => setCounter((old) => old.filter((x, i) => i !== 0))}
      >
        Remove
      </button>
      <span style={{ color: "white" }}>counter: {counter}</span>
      <div ref={ref} className="container">
        {!isOverflowing && buttons}
        {isOverflowing && selectedFiltersDropdown}
      </div>
    </Styled>
  );
};

const Styled = styled.div`
  background-color: green;

  width: 500px;

  .container {
    background-color: red;

    display: flex;
    overflow: hidden;
  }
`;

export default VarTest_2;
