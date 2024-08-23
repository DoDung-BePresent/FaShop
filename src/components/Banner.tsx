import ContainerComponent from "../share/ContainerComponent";
import TextComponent from "../share/TextComponent";
import { globalColors } from "../styles/globalColors";

import Image from "../assets/720x443.svg";
import TitleComponent from "../share/TitleComponent";
import ButtonComponent from "../share/ButtonComponent";
import { Button } from "antd";

const Banner = () => {
  return (
    <ContainerComponent
      bgColor={globalColors.gray}
      styles={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        gap: 50,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 30,
        }}
      >
        <TitleComponent size={40} text="Explore Fresh Cosmetic Arrivals!" />
        <TextComponent
          size={16}
          text="Experience Beauty's Newest Delights: Discover Fresh Makeup, Skincare, and Beauty Products to Elevate Your Routine!"
        />
        <Button type="primary" style={{ width: "fit-content" }}>
          Shop now
        </Button>
      </div>
      <div>
        <img src={Image} alt="" />
      </div>
    </ContainerComponent>
  );
};

export default Banner;
