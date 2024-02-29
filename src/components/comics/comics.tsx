import { FC } from "react";
import classes from "./comics.module.css";
import { Comics } from "../../interfaces/hero.interface";
import Container from "../container/container";

const HeroComics:FC<{commics: Comics}> = ({commics}) => {
  return(
    <Container size="md">
      <h2>Comics</h2>
      {
        commics.items.map(comic => (
          <li key={comic.name}>{comic.name}</li>
        ))
      }
    </Container>      
  );
};

export default HeroComics;