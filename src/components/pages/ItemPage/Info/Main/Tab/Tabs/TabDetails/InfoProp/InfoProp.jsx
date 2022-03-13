import React from "react";
import styled from "styled-components";

const InfoProp = ({
  label,
  children,
  className: version,
  style,
  annotations = null,
}) => {
  return (
    <WrapperX className={version} style={style}>
      <TopX>
        <SpanX>{label}</SpanX>
        {annotations && <AnnotationX>{annotations}</AnnotationX>}
      </TopX>
      {children}
    </WrapperX>
  );
};

const AnnotationX = styled.span`
  padding-left: 0.5rem;
  color: var(--color-text);
`;

const SpanX = styled.span`
  color: var(--color-black);
  font-size: 1.2rem;
  font-weight: 600;
`;

const TopX = styled.div`
  display: flex;
  flex-direction: row;

  span {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const WrapperX = styled.div``;

export default InfoProp;
