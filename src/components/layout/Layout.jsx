import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import TopHeader from "./top-header/TopHeader";
// import VideoHero from "../hero-section/VideoHero";

export default function Layout() {
  return (
    <>
      <TopHeader />

      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
