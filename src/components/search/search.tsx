import { FC, useState } from "react";
import SearchIcon from "../../assets/icons/search.svg";
import classes from "./search.module.css";

const SearchHeroes: FC<{amount: number; searchEvent: (a: string) => void}> = ({amount, searchEvent}) => {
  const [state, setState] = useState<string>("");

  const handler = (event: React.ChangeEvent<HTMLInputElement>) => {

    if(event.target.value.length > 3){
      searchEvent(event.target.value);
    }

    setState(event.target.value);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.field}>
        <img src={SearchIcon} alt="Sarch icon" />
        <input 
          value={state}
          onChange={handler}
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