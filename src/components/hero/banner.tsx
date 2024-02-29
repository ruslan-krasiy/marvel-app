import { FC } from "react";
import classes from "./banner.module.css";
import Container from "../container/container";
import FavoriteButton from "../favorite/favorite-button";

interface BannerProps {
  id: number;
  name: string;
  description: string;
  avatar: string;
}
const Banner:FC<BannerProps> = ({id, name, description, avatar}) => {
  return (
    <div className={classes.banner}>
      <Container size={"md"}>
        <div className={classes.wrapper}>
          <img src={avatar} alt={`Avatar ${name}`} className={classes.avatar}/>
          <div className={classes.content}>
            <div className={classes.banner_title}>
              <h1>{name}</h1>
              <FavoriteButton heroId={id} size={24}/>
            </div>
            <p className={classes.description}>{description}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;