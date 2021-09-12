import React from 'react';
import styled from 'styled-components';

const Test = (props) => {
    return (
        <TestStyled></TestStyled>
    )
}

const TestStyled = styled.div`
    width: 1rem;
    height: 1rem;
    background-color: orangered;
`;

export default Test;