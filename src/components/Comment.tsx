import { Avatar, Rate } from "antd";
import TitleComponent from "../share/TitleComponent";
import TextComponent from "../share/TextComponent";
import { globalColors } from "../styles/globalColors";

const Comment = () => {
  const desc = ["terrible", "bad", "normal", "good", "wonderful"];
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <Avatar size={40}>U</Avatar>
          <div>
            <TitleComponent size={15} text="Ron Watson" />
            <TextComponent
              size={12}
              color={globalColors.textGray}
              text="16 June 2023"
            />
          </div>
        </div>
        <Rate tooltips={desc} value={3} />
      </div>
      <p>
        <TextComponent
          styles={{
            padding: "15px 0",
          }}
          color={globalColors.textGray}
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus volutpat aliquet mauris, et blandit nulla laoreet vitae. Quisque ante dui, porta eu felis nec, scelerisque pharetra turpis."
        />
      </p>
    </div>
  );
};

export default Comment;
