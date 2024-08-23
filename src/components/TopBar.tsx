import { globalColors } from "../styles/globalColors";
import TextComponent from "../share/TextComponent";
import ContainerComponent from "../share/ContainerComponent";

interface Props {
  text: string;
}

const TopBar = (props: Props) => {
  const { text } = props;
  return (
    <ContainerComponent
      styles={{
        background: globalColors.blue,
        padding: "10px",
        textAlign: "center",
      }}
    >
      <TextComponent text={text} color={globalColors.white} />
    </ContainerComponent>
  );
};

export default TopBar;
