import { CSSProperties } from "react";
import { globalColors } from "../styles/globalColors";

interface Props {
  text: string;
  padding?: string;
  styles?: CSSProperties;
}

const ButtonComponent = (props: Props) => {
  const { text, padding, styles } = props;
  return (
    <button
      style={{
        padding: padding ?? "10px 15px",
        backgroundColor: globalColors.primaryColor,
        color: "white",
        fontSize: 15,
        width: "fit-content",
        borderRadius: 6,
        outline: "none",
        border: "none",
        ...styles,
      }}
    >
      {text}
    </button>
  );
};

export default ButtonComponent;
