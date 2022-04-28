import React, { useEffect, useState } from "react";
import styled from "styled-components";

import TimerSingleIndicationContainer from "./TimerSingleIndicationContainer.jsx";

const makeMeTwoDigits = (n) => {
  return (n < 10 ? "0" : "") + n;
};

const intervalCalc = {
  days: (distanceLeft) => Math.floor(distanceLeft / (1000 * 60 * 60 * 24)),
  hours: (distanceLeft) => Math.floor((distanceLeft / (1000 * 60 * 60)) % 24),
  minutes: (distanceLeft) => Math.floor((distanceLeft / (1000 * 60)) % 60),
  seconds: (distanceLeft) => Math.floor((distanceLeft / 1000) % 60),
};

const Timer = (props) => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [distanceLeft, setDistanceLeft] = useState(0);

  useEffect(() => {
    const countdownDate = new Date(props.countDownDate).getTime();
    let distance = countdownDate - new Date().getTime();

    let interval = null;

    if (distance > 0) {
      setDistanceLeft(distance);

      interval = setInterval(() => {
        distance = countdownDate - new Date().getTime();
        setDistanceLeft(distance);

        if (distance < 0) {
          clearInterval(interval);
        }
      }, 1000);
    } else {
      setDistanceLeft(0);
    }

    return () => {
      clearInterval(interval);
      interval = null;
    };
  }, [props.countDownDate]);

  useEffect(() => {
    setDays(makeMeTwoDigits(intervalCalc["days"](distanceLeft)));
    setHours(makeMeTwoDigits(intervalCalc["hours"](distanceLeft)));
    setMinutes(makeMeTwoDigits(intervalCalc["minutes"](distanceLeft)));
    setSeconds(makeMeTwoDigits(intervalCalc["seconds"](distanceLeft)));
  }, [distanceLeft]);

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  flex: 0;
  display: flex;

  & > div:not(:first-child) {
    padding-left: 0.5rem;
  }
`;

export default Timer;
