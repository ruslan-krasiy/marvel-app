import { FC } from "react";
import { Hero } from "../../../interfaces/hero.interface";
import classes from "./hero-card.module.css";
import FavoriteButton from "../../favorite/favorite-button";
import { Link } from "react-router-dom";


const HeroCard:FC<{hero: Hero}> = ({hero}) => {
  const imageUrl = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
  
  return (
    <Link className={classes.card} to={String(hero.id)}>
      <div className={classes["image-container"]}>
        <img src={imageUrl} alt={`${hero.name} - poster`} className={classes.image}/>
      </div>
      <div className={classes.content}>
        <p className={classes.name}>{hero.name}</p>
        <FavoriteButton heroId={hero.id} />
        <div className={classes.cut}></div>
      </div>
    </Link>
  );
};

export default HeroCard;