import { Outlet } from "react-router-dom";
import NavbarMain from "./NavbarMain";
import TopBar from "./TopBar";
import Footer from "./Footer";
import DividerComponent from "../share/DividerComponent";
import FooterLegal from "./FooterLegal";

const MainLayout = () => {
  return (
    <div>
      <TopBar text="Free delivery on orders above $50" />
      <NavbarMain />
      <DividerComponent height="2px" />
      <Outlet />
      <Footer />
      <DividerComponent height="2px" />
      <FooterLegal />
    </div>
  );
};

export default MainLayout;
