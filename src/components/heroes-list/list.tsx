import { FC } from "react";
import { Hero } from "../../interfaces/hero.interface";
import HeroCard from "./card/hero-card";
import classes from "./hero-list.module.css";

const HeroesList: FC<{list: Hero[]}> = ({list}) => {
  return (
    <div className={classes.list}>
      {
        list.map(hero => (
          <HeroCard key={hero.id} hero={hero} />
        ))
      }
    </div>
  );
};

export default HeroesList; 