import { FC } from "react";
import { Hero } from "../../interfaces/hero.interface";
import HeroCard from "./card/hero-card";
import classes from "./hero-list.module.css";
import useSearchHero from "../../hooks/useSearchHero";
import SearchIcon from "../../assets/icons/search.svg";

const HeroesList: FC<{ list: Hero[] }> = ({ list }) => {
  const { results, setSearchTerm, searchTerm } = useSearchHero(list);

  const handler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <>
      <div className={classes.search_wrapper}>
        <div className={classes.search_field}>
          <img src={SearchIcon} alt="Sarch icon" />
          <fieldset className={classes.search_input}>
            <label htmlFor="hero_name">Hero name</label>
            <input
              id="hero_name"
              name="Hero name"
              value={searchTerm}
              onChange={handler}
              type="text"
              placeholder="Search a character..."
            />
          </fieldset>
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