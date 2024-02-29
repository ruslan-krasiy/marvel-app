import { FC } from "react";
import classes from "./layout.module.css";
import { Outlet } from "react-router";
import Logo from "../../assets/marvel-logo.png";
import Favorite from "../favorite/favorite";

const Layout: FC = () => {
  return (
    <>
      <header>
        <Wrapper>
          <img src={Logo} alt="Logotipo" className={classes.logo}/>
          <Favorite />
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