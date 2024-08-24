import { BagHappy } from "iconsax-react";
import TextComponent from "../share/TextComponent";
import TitleComponent from "../share/TitleComponent";
import { globalColors } from "../styles/globalColors";
import ContainerComponent from "../share/ContainerComponent";
import { Divider } from "antd";

const Footer = () => {
  return (
    <ContainerComponent
      styles={{
        margin: "30px auto",
        display: "flex",
        gap: 40,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <BagHappy
          size={30}
          variant="Bold"
          color={globalColors.primaryColor}
          style={{ marginRight: 110 }}
        />
        <TextComponent
          size={16}
          color={globalColors.textGray}
          text="Quality materials, good designs, professional craftsmanship and sustainability."
        />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: 25,
          flex: 1,
        }}
      >
        <div
          style={{
            width: "100%",
          }}
        >
          <TitleComponent
            styles={{
              padding: "10px 0",
            }}
            text="Shop"
          />
          <Divider
            style={{
              margin: "5px 0",
            }}
          />
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px 0px",
              gap: 10,
            }}
          >
            <TextComponent color={globalColors.textGray} text="Clothing" />
            <TextComponent color={globalColors.textGray} text="Shoes" />
            <TextComponent color={globalColors.textGray} text="Accessories" />
            <TextComponent color={globalColors.textGray} text="Brands" />
            <TextComponent color={globalColors.textGray} text="Sale" />
            <TextComponent color={globalColors.textGray} text="Gift Cards" />
          </ul>
        </div>

        <div
          style={{
            width: "100%",
          }}
        >
          <TitleComponent
            styles={{
              padding: "10px 0",
            }}
            text="Gift Cards"
          />
          <Divider
            style={{
              margin: "5px 0",
            }}
          />
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px 0px",
              gap: 10,
            }}
          >
            <TextComponent
              color={globalColors.textGray}
              text="Buy Gift Cards"
            />
            <TextComponent
              color={globalColors.textGray}
              text="About Gift Cards"
            />
            <TextComponent
              color={globalColors.textGray}
              text="Redeem a Gift Card"
            />
            <TextComponent
              color={globalColors.textGray}
              text="Corporate Gift Cards"
            />
            <TextComponent color={globalColors.textGray} text="Subscribe " />
          </ul>
        </div>

        <div
          style={{
            width: "100%",
          }}
        >
          <TitleComponent
            styles={{
              padding: "10px 0",
            }}
            text="About Store"
          />
          <Divider
            style={{
              margin: "5px 0",
            }}
          />
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px 0px",
              gap: 10,
            }}
          >
            <TextComponent color={globalColors.textGray} text="About us" />
            <TextComponent color={globalColors.textGray} text="Support" />
            <TextComponent color={globalColors.textGray} text="Careers" />
            <TextComponent color={globalColors.textGray} text="Newsroom" />
            <TextComponent color={globalColors.textGray} text="Investors" />
          </ul>
        </div>

        <div
          style={{
            width: "100%",
          }}
        >
          <TitleComponent
            styles={{
              padding: "10px 0",
            }}
            text="Legal"
          />
          <Divider
            style={{
              margin: "5px 0",
            }}
          />
          <ul
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "10px 0px",
              gap: 10,
            }}
          >
            <TextComponent color={globalColors.textGray} text="Legal Notice" />
            <TextComponent
              color={globalColors.textGray}
              text="Privacy Policy"
            />
            <TextComponent
              color={globalColors.textGray}
              text="Terms & Conditions"
            />
          </ul>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default Footer;
