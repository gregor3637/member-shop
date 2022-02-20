import React, { useState } from "react";
import styled from "styled-components";

import ImageSlider from "../BundleView/ImageSlider/ImageSlider";
import Pagination from "./Pagination/Pagination";


let firstActionViewTransition = true;

const BundleTableView = (props) => {
  const [page, setPage] = useState(0);
  const totalCount = props.data.items.length - 1;
  const [inTransition, setInTransition] = useState(false);

  const handlePrevClick = () => {
    if (!inTransition) {
      setPage((old) => (old - 1 < 0 ? 0 : old - 1));
    }
  };

  const handleNextClick = () => {
    if (!inTransition || firstActionViewTransition) {
      firstActionViewTransition = false;
      setPage((old) => (old + 1 > totalCount ? totalCount : old + 1));
    }
  };

  return (
    <Wrapper>
      <ImageSlider
        data={props.data}
        page={page}
        setPage={setPage}
        setInTransition={setInTransition}
      />
      <Pagination
        curremtPage={page}
        totalPages={totalCount}
        onPrev={handlePrevClick}
        onNext={handleNextClick}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 70px;
  height: 70px;
  position: relative;
`;



export default BundleTableView;
