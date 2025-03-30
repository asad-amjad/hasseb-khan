import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import TopHeader from "./top-header/TopHeader";
import CopyrightFooter from "./footer/CopyrightFooter";
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
      <CopyrightFooter />
    </>
  );
}
