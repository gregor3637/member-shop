import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";

const App_InfinityScroll = (props) => {
  const [idCounter, setIdCounter] = useState(1);
  const [items, setItems] = useState(
    Array.from({ length: 20 }, (e, i) => {
      return { id: i * idCounter };
    })
  );

  const [hasMore, setHasMore] = useState(true);

  const fetchMoreData = () => {
    console.log("fetchMoreData");
    if (items.length >= 500) {
      console.log("fetchMoreData   setHasMore(false);");
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      const lastElemenentId = items[items.length - 1].id;
      let newArr = Array.from({ length: 20 }, (e, i) => {
        const itemId = (i + 1) * idCounter;
        return { id: lastElemenentId + itemId };
      });
      setItems(items.concat(newArr));
    }, 500);
  };

  const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8,
  };

  const handleChange = (ev) => {
    const numb = Number(ev.target.value);
    let final = items.filter((x) => x.id % numb === 0);
    setIdCounter(numb);
    setItems(final);
  };

  return (
    <Styled id="scrollableDiv">
      <input type="number" onChange={handleChange} />
      <InfiniteScroll
        dataLength={items.length} //This is important field to render the next data
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        {items.map((i, index) => (
          <div style={style} key={index}>
            div - #{index} - {i.id}
          </div>
        ))}
      </InfiniteScroll>
    </Styled>
  );
};

const Styled = styled.div`
background: gold;
flex: 1;

overflow-y: auto;
`;

export default App_InfinityScroll;
