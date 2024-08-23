import { CSSProperties } from "react";
import TextComponent from "./TextComponent";

interface Props {
  text: string;
  size?: number;
  weight?: number;
  color?: string;
  styles?: CSSProperties;
}

const TitleComponent = (props: Props) => {
  const { text, size = 20, weight = 500, color, styles } = props;
  return (
    <TextComponent
      color={color}
      weight={weight}
      size={size}
      text={text}
      styles={styles}
    />
  );
};

export default TitleComponent;
