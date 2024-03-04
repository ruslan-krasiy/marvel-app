import { FC, useRef } from "react";
import { Hero } from "../../interfaces/hero.interface";
import HeroCard from "./card/hero-card";
import classes from "./hero-list.module.css";
import useSearchHero from "../../hooks/useSearchHero";
import SearchIcon from "../../assets/icons/search.svg";

const HeroesList: FC<{list: Hero[]}> = ({list}) => {
  const {results, searchHero } = useSearchHero(list);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const inputTarget = inputRef.current;

    if(!inputTarget)
      return;

    if(event.key === "Enter"){
      searchHero(inputTarget.value);
    }
    
  };

  return (
    <>
      <div className={classes.search_wrapper}>
        <div className={classes.search_field}>
          <img src={SearchIcon} alt="Sarch icon" />
          <input 
            ref={inputRef}
            onKeyDown={handler}
            type="text" 
            placeholder="Search a character..."
            className={classes.search_input}
          />
        </div>
        <p className={classes.search_result}>{results.length} Results</p>
      </div>
      <div className={classes.list}>
        {
          results.map(hero => (
            <HeroCard key={hero.id} hero={hero} />
          ))
        }
      </div>
    </>
  );
};

export default HeroesList; 