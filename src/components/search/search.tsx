import { FC } from "react";
import SearchIcon from "../../assets/icons/search.svg";
import classes from "./search.module.css";

const SearchHeroes: FC<{amount: number}> = ({amount}) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.field}>
        <img src={SearchIcon} alt="Sarch icon" />
        <input 
          type="text" 
          placeholder="Search a character..."
          className={classes.input}
        />
      </div>
      <p className={classes.result}>{amount} Results</p>
    </div>
  );
};

export default SearchHeroes;