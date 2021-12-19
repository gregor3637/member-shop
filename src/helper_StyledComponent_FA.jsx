import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

const node = (
  <StyledIconFontAwesome
    icon={faExternalLinkAlt}
    className="icon"
  ></StyledIconFontAwesome>
);

const StyledIconFontAwesome = styled(FontAwesomeIcon)`
  margin-left: 1rem;
`;
