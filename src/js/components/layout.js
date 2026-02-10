import { Outlet } from "react-router-dom";
import { Header } from "./header.js";
import { Footer } from "./footer.js";

export function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
