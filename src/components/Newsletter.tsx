import ButtonComponent from "../share/ButtonComponent";
import ContainerComponent from "../share/ContainerComponent";
import InputComponent from "../share/InputComponent";
import TextComponent from "../share/TextComponent";
import TitleComponent from "../share/TitleComponent";
import { globalColors } from "../styles/globalColors";

const Newsletter = () => {
  return (
    <ContainerComponent>
      <div
        style={{
          background: `${globalColors.gray}`,
          padding: "30px 20px",
          display: "flex",
          justifyContent: "space-between",
          borderRadius: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 7,
          }}
        >
          <TitleComponent text="Sign up for our newsletter" />
          <TextComponent
            size={15}
            color={globalColors.textGray}
            text="Get notified about new products, discounts and articles."
          />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 7,
          }}
        >
          <InputComponent text="Email" />
          <ButtonComponent padding="8px 15px" text="Sign Up" />
        </div>
      </div>
    </ContainerComponent>
  );
};

export default Newsletter;
