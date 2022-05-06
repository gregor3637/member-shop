import React from "react";
import styled from "styled-components";

const SwitchDynamic = ({
  selected,
  options,
  onSelection,
  className: version,
}) => {
  return (
    <Wrapper className={version}>
      {options.map((label) => {
        return (
          <label key={label}>
            <input
              type="radio"
              value={label}
              checked={label === selected}
              onChange={(ev) => onSelection(ev.target.defaultValue)}
            />
            <div>
              <span>{label}</span>
            </div>
          </label>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
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

    cursor: pointer;
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
  [type="radio"] + div {
    flex: 1;

    border-radius: var(--home-page--buttons--border-radius);
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* CHECKED STYLES */
  [type="radio"]:checked + div {
    color: var(--color-white);
    background: var(--color-black);
  }

  [type="radio"]:not(:checked) + div:hover {
    color: var(--color-grey50);
  }

  height: 3.6rem;
`;

export default SwitchDynamic;
