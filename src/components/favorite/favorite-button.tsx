import { FC } from "react";
import RedHeart from "../../assets/icons/heart-red.svg";
import WhiteHeart from "../../assets/icons/heart-outline.svg";
import { useAppContext } from "../../context";
import classes from "./favorite.module.css";

const FavoriteButton:FC<{heroId: number, size?: number}> = ({heroId, size}) => {
  const {favorits, handlerFavorits} = useAppContext();

  const handlerClick = () => {
    if(handlerFavorits){
      handlerFavorits(heroId);
    }
  };

  const isFavorite = favorits.includes(heroId);
  const imageSrc = isFavorite ? RedHeart : WhiteHeart;
  const title = isFavorite ? "Remove from favorits" : "Add to favorits";
  const imgAlt = isFavorite ? "My favorite hero" : "I don't like this hero";
  return(
    <button onClick={handlerClick} className={classes.favorite_btn} title={title}>
      <img src={imageSrc} alt={imgAlt} width={size || 12} />
    </button>
  );
};

export default FavoriteButton;