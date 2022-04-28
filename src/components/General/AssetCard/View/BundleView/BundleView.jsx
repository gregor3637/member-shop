import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ImageSlider from "./ImageSlider/ImageSlider";
import Pagination from "./Pagination/Pagination";

let firstActionViewTransition = true;

const BundleView = ({ data }) => {
  const [page, setPage] = useState(0);
  const totalCount = data.bundleItems.length - 1;
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
      <Link to={`item/${data.id}`}>
        <ImageSlider
          bundleItems={data.bundleItems}
          page={page}
          setPage={setPage}
          setInTransition={setInTransition}
        />
      </Link>
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
  width: 100%;
  height: 100%;
  position: relative;
`;

export default BundleView;
