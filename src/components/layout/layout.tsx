import { FC } from "react";
import classes from "./layout.module.css";
import { Outlet } from "react-router";
import Logo from "../../assets/marvel-logo.png";
import Favorite from "../favorite/favorite";
import { Link } from "react-router-dom";
import Container from "../container/container";

const Layout: FC = () => {
  return (
    <>
      <header>
        <Container>
          <div className={classes.wrapper}>
            <Link to={"/heroes"} className={classes.logo}>
              <img src={Logo} alt="Logotipo" />
            </Link>
            <Favorite />
          </div>
        </Container>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;