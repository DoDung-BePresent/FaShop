import { Outlet } from "react-router-dom";
import NavbarMain from "../components/NavbarMain";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import FooterLegal from "../components/FooterLegal";
import { Divider } from "antd";

const MainLayout = () => {
  return (
    <div>
      <TopBar text="Free delivery on orders above $50" />
      <NavbarMain />
      <Divider
        style={{
          margin: "0",
        }}
      />
      <Outlet />
      <Divider />
      <Footer />
      <Divider />
      <FooterLegal />
    </div>
  );
};

export default MainLayout;
