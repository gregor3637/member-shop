import React from "react";
import styled from "styled-components";
import RadioButton from "../../../../General/Formik/components/RadioButton";
import FormikControl from "../../../../General/Formik/FormikControl";

const RadioTest = ({ name, title, description, options, ...rest }) => {
  return (
    <Wrapper>
      <InfoX>
        <span>{title}</span>
        <p>{description}</p>
      </InfoX>
      <ControlContainerX>
        <RadioButton name={name} options={options} {...rest} />
      </ControlContainerX>
    </Wrapper>
  );
};

const InfoX = styled.div`
  /* background: var(--test-y); */
  font-size: 1.4rem;

  span {
    font-weight: 600;
  }
  p {
    display: block;

    font-weight: 500;
    color: var(--color-grey40);
  }
`;

const ControlContainerX = styled.div`
  /* background: var(--test-r); */

  overflow: hidden;
  padding: 0.4rem 0.6rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  border: 1px solid var(--color-border);
  border-radius: var(--home-page--buttons--border-radius);

  label {
    flex: 1;
    padding: 0 1rem;

    cursor: pointer;

    font-size: 1.2rem;
    font-weight: 600;
    text-transform: capitalize;
  }

  span {
    margin: 0 1rem;
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: capitalize;
    width: max-content;
  }

  /* HIDE RADIO */
  [type="radio"] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* IMAGE STYLES */
  [type="radio"] + label {
    flex: 1;

    border-radius: var(--home-page--buttons--border-radius);
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* CHECKED STYLES */
  [type="radio"]:checked + label {
    color: var(--color-white);
    background: var(--color-blue);
  }

  [type="radio"]:not(:checked) + div:hover {
    color: var(--color-grey50);
  }

  height: 3.6rem;
`;

const Wrapper = styled.div`
  /* background-color: green; */
  padding: 1rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  border-bottom: 1px solid var(--color-grey40);
`;

export default RadioTest;
