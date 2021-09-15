import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const makeMeTwoDigits = (n) => {
  return (n < 10 ? "0" : "") + n;
};

const Timer = (props) => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date(props.countDownDate).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      if (distance < 0) {
        clearImmediate(interval.current);
      } else {
        setDays(makeMeTwoDigits(days));
        setHours(makeMeTwoDigits(hours));
        setMinutes(makeMeTwoDigits(minutes));
        setSeconds(makeMeTwoDigits(seconds));
      }
    }, 1000);
  };

  useEffect(() => {
    // startTimer();
    return () => {
      clearImmediate(interval.current);
    };
  }, []);

  return (
    <TimerStyled>
      <section>
        <p>{days}</p>
        <p>
          <small>Days</small>
        </p>
      </section>
      <span>/</span>
      <section>
        <p>{hours}</p>
        <p>
          <small>Hours</small>
        </p>
      </section>
      <span>/</span>
      <section>
        <p>{minutes}</p>
        <p>
          <small>Minutes</small>
        </p>
      </section>
      <span>/</span>
      <section>
        <p>{seconds}</p>
        <p>
          <small>Seconds</small>
        </p>
      </section>
    </TimerStyled>
  );
};

const TimerStyled = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;

  /* margin-top: 3rem;
  padding: 3rem;
  text-align: center; */

  border: 1px solid black;
  border-radius: 5px;

  section p:first-child,
  span {
    font-size: 1rem;
  }
`;
export default Timer;
