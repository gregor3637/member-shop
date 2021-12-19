import styled from "styled-components";
import UserProfileCard from "./components/UserProfileCard";

const Debug_FunctionalComponent = (props) => {
  return (
    <>
      <div></div>
      <div></div>
      <div></div>
      <Styled_Override />
    </>
  );
};

const Styled_Override = styled(Debug_Component)`
  //added css 'fields values' override (if existing) parent ones
  padding: 10px;
`;

//////

const Debug_Component = (props) => {
  return (
    <Styled className={props.className}>
      <div>
        <img
          src="https://f8n-production.imgix.net/creators/profile/oqmfnwhtq-untitled-artwork-gif-dxqjb7.gif?q=45&w=34&h=34&auto=format%2Ccompress&fit=crop&dpr=2"
          alt=""
        />
      </div>
      <span>Border Apes Yached Club</span>
    </Styled>
  );
};

const Styled = styled.div`
  padding: 10000px;

  background-color: red;
  width: 100px;
  height: 100px;
`;



