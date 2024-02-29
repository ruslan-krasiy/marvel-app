import { FC } from "react";
import classes from "./layout.module.css";
import { Outlet } from "react-router";
import Logo from "../../assets/marvel-logo.png";
import Favorite from "../favorite/favorite";
import { Link } from "react-router-dom";

const Layout: FC = () => {
  return (
    <>
      <header>
        <Wrapper>
          <div className={classes.container}>
            <Link to={"/heroes"} className={classes.logo}>
              <img src={Logo} alt="Logotipo" />
            </Link>
            <Favorite />
          </div>
        </Wrapper>
      </header>
      <main>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </main>
    </>
  );
};

const Wrapper:FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className={classes.wrapper}>
      {children}
    </div>
  );
};




export default Layout;