import { Link } from "react-router-dom";
import Image from "../assets/404-page.svg";
import ButtonComponent from "../share/ButtonComponent";
import TextComponent from "../share/TextComponent";
import TitleComponent from "../share/TitleComponent";
import { globalColors } from "../styles/globalColors";

const NotFound = () => {
  return (
    <div>
      <img
        style={{
          width: "70%",
          margin: "40px auto",
          display: "block",
        }}
        src={Image}
        alt=""
      />
      <TextComponent
        size={25}
        color={globalColors.textGray}
        styles={{ textAlign: "center" }}
        text="Some errors must happened!"
      />
      <div
        style={{
          textAlign: "center",
          marginTop: 20,
        }}
      >
        <Link to="/">
          <ButtonComponent text="Home Page" />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
