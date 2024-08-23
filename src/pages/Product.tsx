import { Breadcrumb, Button, Input, Select } from "antd";
import ContainerComponent from "../share/ContainerComponent";

import Image from "../assets/656x656.svg";
import TextComponent from "../share/TextComponent";
import TitleComponent from "../share/TitleComponent";
import { globalColors } from "../styles/globalColors";
import { FaStar } from "react-icons/fa";
import DividerComponent from "../share/DividerComponent";
import ButtonComponent from "../share/ButtonComponent";
import { Heart } from "iconsax-react";

const Product = () => {
  return (
    <ContainerComponent>
      <Breadcrumb
        style={{
          marginBottom: 20,
          marginTop: 10,
        }}
        items={[
          {
            title: "Men",
          },
          {
            title: "Clothing",
          },
          {
            title: "T-shirts",
          },
        ]}
      />
      <div
        style={{
          display: "flex",
          gap: 40,
        }}
      >
        {/* LEFT */}
        <img
          style={{
            borderRadius: 10,
            margin: "0 20px",
          }}
          src={Image}
          alt=""
        />
        {/* RIGHT */}
        <div
          style={{
            width: "100%",
          }}
        >
          <TitleComponent
            size={40}
            styles={{ margin: "10px 0 20px 0" }}
            text="Classic T-shirt"
          />
          <TextComponent text="Noname brand" />
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
                margin: "15px 0",
                gap: 7,
              }}
            >
              <TextComponent weight={500} size={20} text={`$99.99`} />
              <TextComponent
                color={globalColors.textGray}
                styles={{
                  marginTop: 1.8,
                  textDecoration: "line-through",
                }}
                size={15}
                text={`$199.99`}
              />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <FaStar color="yellow" />
              <TextComponent size={15} weight={500} text="4.8" />
              <TextComponent
                size={15}
                color={globalColors.textGray}
                styles={{
                  textDecoration: "underline",
                }}
                text="(See all reviews)"
              />
            </div>
          </div>
          <DividerComponent />
          <div
            style={{
              margin: "15px auto",
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                width: "30%",
              }}
            >
              <TextComponent
                text="Color"
                styles={{
                  marginBottom: 10,
                }}
                weight={500}
              />
              <Select
                defaultValue={"white"}
                style={{ width: "100%" }}
                options={[
                  { value: "white", label: <span>White</span> },
                  { value: "yellow", label: <span>Yellow</span> },
                  { value: "black", label: <span>Black</span> },
                ]}
              />
            </div>

            <div
              style={{
                width: "30%",
              }}
            >
              <TextComponent
                text="Size"
                styles={{
                  marginBottom: 10,
                }}
                weight={500}
              />
              <Select
                defaultValue={"L"}
                style={{ width: "100%" }}
                options={[
                  { value: "S", label: <span>S</span> },
                  { value: "M", label: <span>M</span> },
                  { value: "L", label: <span>L</span> },
                  { value: "XL", label: <span>XL</span> },
                  { value: "XXL", label: <span>XXL</span> },
                ]}
              />
            </div>

            <div
              style={{
                width: "30%",
              }}
            >
              <TextComponent
                text="Quantity"
                styles={{
                  marginBottom: 10,
                }}
                weight={500}
              />
              <Input defaultValue={3} />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            {/* <ButtonComponent text="Add to cart" styles={{ width: "100%" }} /> */}
            <Button type="primary" size="large" style={{ width: "100%" }}>
              Add to cart
            </Button>
            <Button
              style={{
                width: 43,
              }}
              size="large"
              icon={<Heart size={20} />}
            />
          </div>
        </div>
      </div>
    </ContainerComponent>
  );
};

export default Product;
