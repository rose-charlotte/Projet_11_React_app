import { Outlet } from "react-router-dom";
import { Header } from "../../Components/HeaderComponent/Header";
import { Footer } from "../../Components/FooterComponent/Footer";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
