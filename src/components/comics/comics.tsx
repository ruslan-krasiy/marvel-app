import { FC } from "react";
import classes from "./comics.module.css";
import Container from "../container/container";
import { Comic } from "../../interfaces/comics.interface";
import { getComicSaleDate } from "../../utils/common";

const HeroComics:FC<{comics: Comic[]}> = ({comics}) => {
  return(
    <Container size="md">
      <h2>Comics</h2>
      {
        comics.length > 0 
          ? (
            <div className={classes.scroll_horizontal}>
              <div className={classes.comics_list}>
                {
                  comics.map(comic => (
                    <ComicItem key={comic.id} item={comic}/>
                  ))
                }
              </div>
            </div>
          )
          : <div className={classes.empty_comics}>No results</div> 
      }
    </Container>
  );
};

const ComicItem:FC<{item: Comic}> = ({item}) => {
  const publishDate = getComicSaleDate(item.dates);

  return (
    <div className={classes.comic}>
      <div className={classes.comic_image_container}>
        <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`Poster ${item.title}`}/>
      </div>
      <h4 className={classes.comic_title}>{item.title.toLowerCase()}</h4>
      {publishDate && <span>{publishDate}</span>}
    </div>
  );
};

export default HeroComics;