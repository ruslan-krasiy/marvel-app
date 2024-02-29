import { FC } from "react";
import classes from "./loader.module.css";

const Loader:FC = () => {
  return (
    <div className={classes.loader}>
      <p>Loading...</p>
    </div>
  );
};

export default Loader;