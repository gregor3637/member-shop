import IMG from "../../../../img/header/navigation/allnfts-light.svg";
import { LinkX, UlX, LiX, ImgX } from "../StyleComponents";

const Marketplace = () => {
  return (
    <UlX>
      <LiX>
        <LinkX to="/help">
          <ImgX src={IMG} alt="" />
          <span>New</span>
        </LinkX>
      </LiX>
      <LiX>
        <LinkX to="/docs">
          <ImgX src={IMG} alt="" />
          <span>Art</span>
        </LinkX>
      </LiX>
      <LiX>
        <LinkX to="/docs">
          <ImgX src={IMG} alt="" />
          <span>Music</span>
        </LinkX>
      </LiX>
    </UlX>
  );
};

export default Marketplace;
