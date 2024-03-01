import { FC } from "react";
import classes from "./triangle.module.css";

const TriangleCss:FC<{size?: string}> = ({size}) => {
  return (
    <div className={classes.container}>
      <div className={`${classes.triangle} ${size && classes[size] ? classes[size] : ""}`}></div>
    </div>
  );
};

export default TriangleCss;