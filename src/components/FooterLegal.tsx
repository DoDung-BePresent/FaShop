import { Dribbble, Facebook, Instagram } from "iconsax-react";
import ContainerComponent from "../share/ContainerComponent";
import TextComponent from "../share/TextComponent";
import { globalColors } from "../styles/globalColors";

const FooterLegal = () => {
  return (
    <ContainerComponent
      styles={{
        margin: "20px auto",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <TextComponent
        color={globalColors.textGray}
        text="© 2023 Company Name. All Rights Reserved."
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Facebook variant="Bold" color={globalColors.textGray} />
        <Instagram variant="Bold" color={globalColors.textGray} />
        <Dribbble variant="Bold" color={globalColors.textGray} />
      </div>
    </ContainerComponent>
  );
};

export default FooterLegal;
