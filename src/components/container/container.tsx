import { FC } from "react";
import classes from "./container.module.css";

const Container:FC<{children: React.ReactNode, size?: string}> = ({children, size}) => {
  return (
    <div className={`${classes.container} ${size && classes[size] ? classes[size] : ""}`}>
      {children}
    </div>
  );
};

export default Container;