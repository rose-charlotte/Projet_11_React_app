import { Outlet } from "react-router-dom";
import { Header } from "../../Components/Header/Header.tsx";
import { Footer } from "../../Components/Footer/Footer.tsx";
import style from "./Layout.module.scss";

export function Layout() {
  return (
    <>
      <div className={style.mainContentContainer}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
