import styled from "styled-components";

const Styled = styled.div`
  width: ${(props) => props.radius || "1rem"};
  height: ${(props) => props.radius || "1rem"};
  background-color: ${(props) => props.color || "1rem"};
  border-radius: 500px;
  animation: fadeIn ease 2s infinite;
  margin: ${(props) => props.margin || "0"};

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const AttentionDot = ({ radius, color, margin}) => {
  return <Styled radius={radius + "px"} color={color} margin={margin}></Styled>;
};

export default AttentionDot;
