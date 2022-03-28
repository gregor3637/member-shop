import React from 'react';
import styled from 'styled-components';

const Body = (props) => {
console.log('props ', props);

    return (
         <Wrapper>
             body
             {props.test}
         </Wrapper>
    )
}

const Wrapper = styled.div`
    background-color: green;
    height: 100%;
`;

export default Body;