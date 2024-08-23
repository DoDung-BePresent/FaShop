import { CSSProperties } from "react";
import { globalColors } from "../styles/globalColors";

interface Props {
  text: string;
  color?: string;
  size?: number;
  weight?: number;
  styles?: CSSProperties;
}

const TextComponent = (props: Props) => {
  const { text, size, color, weight, styles } = props;
  return (
    <p
      style={{
        color: color ?? globalColors.black,
        fontSize: size ?? 14,
        fontWeight: weight ?? 400,
        lineHeight: "22px",
        ...styles,
      }}
    >
      {text}
    </p>
  );
};

export default TextComponent;
