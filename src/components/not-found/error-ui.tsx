import { FC } from "react";
import Container from "../container/container";
import classes from "./error-ui.module.css";

const ErrorUi:FC<{text: string}> = ({text}) => {
  console.log(text);
  return (
    <Container>
      <div className={classes.wrapper}>
        <em>{text}</em>
      </div>
    </Container>
  );
};

export default ErrorUi;