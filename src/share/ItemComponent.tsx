import { Link } from "react-router-dom";
import { globalColors } from "../styles/globalColors";
import TextComponent from "./TextComponent";
import TitleComponent from "./TitleComponent";

interface Props {
  image: string;
  category?: string;
  title: string;
  newPrice?: string;
  oldPrice?: string;
  desc?: string;
}

const ItemComponent = (props: Props) => {
  const { image, category, title, newPrice, oldPrice, desc } = props;
  return (
    <Link to="/products/dfdfdf">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}
      >
        <img
          style={{
            borderRadius: 10,
            marginBottom: 10,
          }}
          src={image}
          alt=""
        />
        {category && (
          <TextComponent color={globalColors.textGray} text={category || ""} />
        )}
        <TitleComponent text={title} />
        <div
          style={{
            display: "flex",
            alignContent: "end",
            gap: 7,
          }}
        >
          {newPrice && (
            <TextComponent weight={500} size={17} text={newPrice || ""} />
          )}
          {oldPrice && (
            <TextComponent
              color={globalColors.textGray}
              styles={{
                marginTop: 1.8,
                textDecoration: "line-through",
              }}
              size={12}
              text={oldPrice || ""}
            />
          )}
        </div>
      </div>
    </Link>
  );
};

export default ItemComponent;
