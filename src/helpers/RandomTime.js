import { randomIntFromInterval } from "./MathHelpers";

const RandomTime = () => {
  var date = new Date();
  date.setDate(date.getDate() + randomIntFromInterval(1, 10));
  date.setHours(randomIntFromInterval(1, 23));
  date.setMinutes(date.getMinutes() + randomIntFromInterval(1, 60));
  let t = date.setSeconds(randomIntFromInterval(1, 60));

  return t;
};
export default RandomTime;
