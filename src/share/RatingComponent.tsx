import { FaStar } from "react-icons/fa";
import TextComponent from "./TextComponent";

interface Props {
  star: number;
  percent: number;
}

const RatingComponent = (props: Props) => {
  const { star, percent } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        margin: "5px 0",
      }}
    >
      <TextComponent weight={500} text={`${star}`} />
      <FaStar color="#fadb14" />
      <div
        style={{
          flex: 1,
          background: "hsla(0, 0%, 0%, 0.06)",
          height: "8px",
          borderRadius: "100px",
          marginTop: "1px",
          position: "relative",
        }}
      >
        <div
          style={{
            width: `${percent}%`,
            background: "#fadb14",
            height: "8px",
            borderRadius: "100px",
            marginTop: "1px",
            position: "absolute",
            top: "-1px",
          }}
        />
      </div>
      <div
        style={{
          width: "20px",
        }}
      >
        <TextComponent text={`${percent}%`} />
      </div>
    </div>
  );
};

export default RatingComponent;
