import Image from "../assets/1280x610.svg";
import ButtonComponent from "../share/ButtonComponent";
import ContainerComponent from "../share/ContainerComponent";
import TextComponent from "../share/TextComponent";
import TitleComponent from "../share/TitleComponent";
import { globalColors } from "../styles/globalColors";

const PromoSection = () => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <img
        style={{
          width: "100%",
          objectFit: "cover",
        }}
        src={Image}
        alt=""
      />
      <ContainerComponent
        styles={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
          background: "hsla(0, 0%, 0%, 0.65)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 30,
            textAlign: "center",
            width: "35%",
            margin: "0 auto",
          }}
        >
          <TitleComponent
            styles={{
              lineHeight: "45px",
            }}
            size={40}
            color={globalColors.white}
            text="Explore Our Newest Cosmetic Arrivals!"
          />
          <TextComponent
            size={17}
            weight={300}
            color={globalColors.white}
            text="Our latest cosmetic arrivals have just landed, and they're sure to dazzle you. Check out the freshest makeup, skincare, beauty products and elevate your beauty routine."
          />
          <ButtonComponent text="Shop Now" />
        </div>
      </ContainerComponent>
    </div>
  );
};

export default PromoSection;
