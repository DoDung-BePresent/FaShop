import { Link } from "react-router-dom";
import Image from "../assets/404-page.svg";
import TextComponent from "../share/TextComponent";
import { globalColors } from "../styles/globalColors";
import { Button } from "antd";

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
          <Button type="primary">Home Page</Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
