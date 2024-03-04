import { FC } from "react";
import { Hero } from "../../../interfaces/hero.interface";
import classes from "./hero-card.module.css";
import FavoriteButton from "../../favorite/favorite-button";
import { Link } from "react-router-dom";
import TriangleCss from "../../triangle/triangle";


const HeroCard:FC<{hero: Hero}> = ({hero}) => {
  const imageUrl = `${hero.thumbnail.path}.${hero.thumbnail.extension}`;
  
  return (
    <div className={classes.card}>
      <div className={classes.image_container}>
        <img src={imageUrl} alt={`${hero.name} - poster`} className={classes.image}/>
      </div>
      <div className={classes.content}>
        <Link className={classes.card_title} to={`/heroes/${hero.id}`}>
          {hero.name}
        </Link>
        <FavoriteButton heroId={hero.id} />
      </div>
      <TriangleCss />
    </div>
  );
};

export default HeroCard;