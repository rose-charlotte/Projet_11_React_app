import { Outlet } from "react-router-dom";
import { Header } from "../../Components/HeaderComponent/Header";

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
