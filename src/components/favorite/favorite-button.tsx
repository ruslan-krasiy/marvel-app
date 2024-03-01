import { FC } from "react";
import RedHeart from "../../assets/icons/heart-red.svg";
import WhiteHeart from "../../assets/icons/heart-outline.svg";
import classes from "./button.module.css";

const FavoriteButton:FC<{heroId: number, size?: number}> = ({heroId, size}) => {

  const handlerClick = () => {
    console.log(heroId);
  };

  return(
    <button onClick={handlerClick} className={classes.favorite_btn} title="Add to favorite">
      <img src={WhiteHeart} alt="Not favorite" width={size || 12} />
    </button>
  );
};

export default FavoriteButton;