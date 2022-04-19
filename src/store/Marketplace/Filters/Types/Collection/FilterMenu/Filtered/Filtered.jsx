import React, { useCallback, useRef } from "react";
import styled from "styled-components";

import FilteredButton from "./FilteredButton/FilteredButton";

const Filtered = ({
  elementsData,
  handleElementClick,
  loading,
  hasMore,
  setPageNumber,
}) => {
  const observer = useRef();

  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPageNumber((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [setPageNumber, loading, hasMore]
  );

  let filteredElements = elementsData.map((z, index, arr) => {
    let ref = arr.length !== index + 1 ? null : lastBookElementRef;
    return (
      <FilteredButton
        ref={ref}
        key={z.name}
        data={z}
        handleElementClick={handleElementClick}
      />
    );
  });

  return <Wrapper>{filteredElements}</Wrapper>;
};

const Wrapper = styled.div`
  /* margin-right: 3rem; */
`;

export default Filtered;
