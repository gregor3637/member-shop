import styled from "styled-components";

const AttentionDot = ({ radius, color, margin }) => {
  return (
    <Wrapper radius={radius + "px"} color={color} margin={margin}></Wrapper>
  );
};

const Wrapper = styled.div`
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

export default AttentionDot;
