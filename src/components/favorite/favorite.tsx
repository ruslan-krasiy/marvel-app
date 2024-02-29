import { FC } from "react";
import Heart from "../../assets/icons/heart-red.svg";

const Favorite:FC = () => {
  return (
    <div>
      <img src={Heart} alt="Favorite icon" />
    </div>
  );
};

export default Favorite;