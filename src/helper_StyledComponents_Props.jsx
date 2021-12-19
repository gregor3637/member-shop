import styled from "styled-components";

const Debug_Props = (props) => {
  return <Debug_Styled myNamedProp="100px">{props.children}</Debug_Styled>;
};

const Debug_Styled = styled.button`
  width: ${(props) => props.myNamedProp || "auto"};
`;
