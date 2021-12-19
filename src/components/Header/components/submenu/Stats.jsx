import { LinkX, UlX, LiX } from "../StyleComponents";

const Stats = (props) => {
  return (
    <UlX>
      <LiX>
        <LinkX to="/ranking">
          <span>Ranking</span>
        </LinkX>
      </LiX>
      <LiX>
        <LinkX to="/activity">
          <span>Activity</span>
        </LinkX>
      </LiX>
    </UlX>
  );
};

export default Stats;
