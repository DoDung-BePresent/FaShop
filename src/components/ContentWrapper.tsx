import ContainerComponent from "../share/ContainerComponent";
import TextComponent from "../share/TextComponent";
import TitleComponent from "../share/TitleComponent";
import { globalColors } from "../styles/globalColors";

const ContentWrapper = () => {
  return (
    <ContainerComponent
      styles={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "30px auto",
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          margin: "5px 60px",
          gap: 7,
        }}
      >
        <TextComponent color={globalColors.textGray} text="Exclusive Offer" />
        <TitleComponent text="Save 5% with Code 'NEW5'" />
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: 7,
          padding: "5px 60px",
          borderLeft: `2px solid ${globalColors.gray}`,
          borderRight: `2px solid ${globalColors.gray}`,
        }}
      >
        <TextComponent color={globalColors.textGray} text="Newsletter" />
        <TitleComponent text="Enjoy 15% Off Your Next Beauty Purchase!" />
      </div>
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          margin: "5px 60px",
          gap: 7,
        }}
      >
        <TextComponent
          color={globalColors.textGray}
          text="Hassle-Free Shopping"
        />
        <TitleComponent text="Enjoy 60 Days of Free Returns" />
      </div>
    </ContainerComponent>
  );
};

export default ContentWrapper;
