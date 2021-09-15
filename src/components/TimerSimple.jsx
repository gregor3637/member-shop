import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const makeMeTwoDigits = (n) => {
  return (n < 10 ? "0" : "") + n;
};

const TimerSimple = (props) => {
  // const countdownDate = new Date(props.countDownDate).getTime();
  const [leftTime, setLeftTime] = useState("00s");
  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("Dec 30, 2021 23:45:00").getTime();

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
        let t = "";

        if (days > 0) {
          t = makeMeTwoDigits(days) + "d ";
        }
        if (hours > 0) {
          t += makeMeTwoDigits(hours) + "h ";
        }
        if (minutes > 0) {
          t += makeMeTwoDigits(minutes) + "m ";
        }

        t += makeMeTwoDigits(seconds) + "s";
        
        setLeftTime(t);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearImmediate(interval.current);
    };
  }, []);

  return <TimerSimpleStyled>{leftTime}</TimerSimpleStyled>;
};

const TimerSimpleStyled = styled.div`
    font-family: 'B612 Mono', monospace;
    font-size: 1.2rem;
    font-weight: 700;
`;

export default TimerSimple;
