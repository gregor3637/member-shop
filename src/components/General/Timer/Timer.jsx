import React, { useEffect, useState } from "react";
import styled from "styled-components";

import TimerSingleIndicationContainer from "./TimerSingleIndicationContainer.jsx";

const Styled = styled.div`
  width: 100%;

  flex: 0;
  display: flex;

  & > div:not(:first-child) {
    padding-left: 0.5rem;
  }
`;

const makeMeTwoDigits = (n) => {
  return (n < 10 ? "0" : "") + n;
};

const Timer = (props) => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  // let interval = useRef();

  useEffect(() => {
    let interval = null;

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
          clearInterval(interval.current);
        } else {
          setDays(makeMeTwoDigits(days));
          setHours(makeMeTwoDigits(hours));
          setMinutes(makeMeTwoDigits(minutes));
          setSeconds(makeMeTwoDigits(seconds));
        }
      }, 1000);
    };

    startTimer();
    return () => {
      clearInterval(interval);
      interval = null;
    };
  }, [props.countDownDate]);

  return (
    <Styled>
      <div>
        <TimerSingleIndicationContainer
          time={days}
          provStyle={{ ...props.style }}
        ></TimerSingleIndicationContainer>
      </div>
      <div>
        <TimerSingleIndicationContainer
          time={hours}
          provStyle={{ ...props.style }}
        ></TimerSingleIndicationContainer>
      </div>
      <div>
        <TimerSingleIndicationContainer
          time={minutes}
          provStyle={{ ...props.style }}
        ></TimerSingleIndicationContainer>
      </div>
      <div>
        <TimerSingleIndicationContainer
          time={seconds}
          provStyle={{ ...props.style }}
        ></TimerSingleIndicationContainer>
      </div>
    </Styled>
  );
};
export default Timer;
