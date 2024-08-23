import { globalColors } from "../styles/globalColors";

interface Props {
  height?: string;
}

const DividerComponent = (props: Props) => {
  const { height } = props;
  return (
    <div
      style={{
        width: "100%",
        height: height ?? "1.5px",
        background: globalColors.gray,
      }}
    />
  );
};

export default DividerComponent;
