import { FC } from "react";
import classes from "./container.module.css";

interface PropsType {
  children: React.ReactNode;
  size?: string;
  dense?: boolean;
}

const Container:FC<PropsType> = ({children, size, dense}) => {

  const classDense = dense ? classes.dense : classes.no_dense;
  const classSize = size && classes[size] ? classes[size] : "";

  return (
    <div className={`${classes.container} ${classSize} ${classDense}`}>
      {children}
    </div>
  );
};

export default Container;