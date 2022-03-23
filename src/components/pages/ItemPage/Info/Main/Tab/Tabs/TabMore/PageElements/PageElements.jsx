import React, { useCallback, useRef } from "react";
import styled from "styled-components";
import CompactAssetItem from "../CompactAssetItem/CompactAssetItem";

const PageElements = ({ elementsData, loading, hasMore, setPageNumber }) => {
  const observer = useRef();

  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      console.log("----------Is Visible 0");
      observer.current = new IntersectionObserver((entries) => {
        console.log("----------Is Visible 1");
        console.log('hasMore ', hasMore);
        if (entries[0].isIntersecting && hasMore) {
          console.log("----------Is Visible 2");
          setPageNumber((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [setPageNumber, loading, hasMore]
  );

  let filteredElements = elementsData.map((z, index, arr) => {
    let ref = arr.length !== index + 1 ? null : lastBookElementRef;
    return <CompactAssetItem ref={ref} key={index} data={z} />;
  });

  return <Wrapper>{filteredElements}</Wrapper>;
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`;

export default PageElements;
