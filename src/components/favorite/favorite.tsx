import { FC } from "react";
import RedHeart from "../../assets/icons/heart-red.svg";
import { useAppContext } from "../../context";
import classes from "./favorite.module.css";
import { Link } from "react-router-dom";

const Favorite:FC = () => {
  const {favorits} = useAppContext();

  return (
    <Link to={"favorits"} className={classes.wrapper}>
      <img src={RedHeart} alt="Favorite icon" width={24} />
      <span className={classes.favorite_count}>{favorits.length}</span>
    </Link>
  );
};

export default Favorite;