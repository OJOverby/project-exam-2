import { Outlet } from "react-router-dom";
import { Header } from "./header.js";
import { Footer } from "./footer.js";

export function Layout() {
  return (
    <div className="appShell">
      <Header />
      <main className="pageContent">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
