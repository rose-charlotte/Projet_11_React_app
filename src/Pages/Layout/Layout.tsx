import { Outlet } from "react-router-dom";
import { Header } from "../../Components/Header/Header.tsx";
import { Footer } from "../../Components/Footer/Footer.tsx";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
