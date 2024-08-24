import {
  Breadcrumb,
  Button,
  Collapse,
  ConfigProvider,
  Divider,
  Input,
  Rate,
  Select,
} from "antd";
import ContainerComponent from "../share/ContainerComponent";

import Image from "../assets/656x656.svg";
import TextComponent from "../share/TextComponent";
import TitleComponent from "../share/TitleComponent";
import { globalColors } from "../styles/globalColors";
import { FaStar } from "react-icons/fa";
import { Heart } from "iconsax-react";
import { useEffect } from "react";
import type { CollapseProps } from "antd";
import Comment from "../components/Comment";
import RatingComponent from "../share/RatingComponent";
import { LuPenSquare } from "react-icons/lu";

import Image1 from "../assets/340x340.svg";
import ItemComponent from "../share/ItemComponent";

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items: CollapseProps["items"] = [
    {
      key: "1",
      label: "Features",
      children: (
        <ul
          style={{
            padding: "0 15px",
          }}
        >
          <li>100% Cotton</li>
          <li>Fabric: Jersey</li>
          <li>Care instructions: Do not tumble dry, machine wash at 30°C</li>
          <li>Neckline: Crew neck</li>
          <li>Pattern: Print</li>
          <li>Fit: Loose Fit</li>
          <li>Shape: Straight</li>
        </ul>
      ),
    },
    {
      key: "2",
      label: "Description",
      children: (
        <p>
          This classic white t-shirt is made from 100% cotton, providing a
          comfortable and breathable fit. The unisex design makes it a versatile
          option for men and women. Perfect for layering or wearing on its own,
          this t-shirt is a must-have in any wardrobe. It is available in a
          variety of sizes, making it easy to find the perfect fit. Whether
          you're running errands or dressing up for a night out, this white
          t-shirt is a versatile and timeless piece.
        </p>
      ),
    },
    {
      key: "3",
      label: "Delivery",
      children: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus
          volutpat aliquet mauris, et blandit.
        </p>
      ),
    },
    {
      key: "4",
      label: "Return policy",
      children: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          interdum hendrerit ex vitae sodales. Donec id leo ipsum. Phasellus
          volutpat aliquet mauris, et blandit.
        </p>
      ),
    },
  ];

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
          alignItems: "start",
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
                  marginTop: 1,
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
              <FaStar color="#fadb14" />
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
          <Divider />
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
            <Button type="primary" style={{ width: "100%" }}>
              Add to cart
            </Button>
            <Button
              style={{
                width: 35,
              }}
              icon={<Heart size={17} />}
            />
          </div>
          <Divider />
          <Collapse items={items} defaultActiveKey={["1"]} />
        </div>
      </div>
      <Divider
        style={{
          marginBottom: "50px",
        }}
      />
      <TitleComponent
        size={40}
        styles={{ margin: "30px auto" }}
        text="Customer reviews"
      />
      <div
        style={{
          display: "flex",
          padding: "20px 0",
          gap: 50,
        }}
      >
        <div
          style={{
            width: "60%",
          }}
        >
          <Comment />
          <Divider />
          <Comment />
          <Divider />
          <Comment />
          <Divider />
          <Comment />
          <Button
            style={{
              display: "block",
              margin: "10px auto",
            }}
          >
            Load More
          </Button>
        </div>
        <div
          style={{
            flex: 1,
            background: globalColors.gray,
            padding: "30px 25px",
            borderRadius: 10,
            height: "fit-content",
          }}
        >
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
                gap: 8,
              }}
            >
              <TextComponent size={15} weight={500} text="4.23" />
              <ConfigProvider
                theme={{
                  token: {
                    marginXS: 4,
                  },
                }}
              >
                <Rate
                  style={{
                    fontSize: 15,
                  }}
                  allowHalf
                  value={4.23}
                />
              </ConfigProvider>
            </div>
            <TextComponent
              size={13}
              color={globalColors.textGray}
              text="(2495 reviews)"
            />
          </div>
          <div
            style={{
              margin: "20px 0px",
            }}
          >
            <RatingComponent star={5} percent={70} />
            <RatingComponent star={4} percent={20} />
            <RatingComponent star={3} percent={0} />
            <RatingComponent star={2} percent={0} />
            <RatingComponent star={1} percent={10} />
          </div>
          <Divider />
          <TitleComponent text="Share your review" />
          <TextComponent
            styles={{
              margin: "10px 0",
            }}
            color={globalColors.textGray}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum hendrerit ex vitae sodales."
          />
          <Button
            style={{
              width: "100%",
            }}
            icon={<LuPenSquare />}
          >
            Write your review
          </Button>
        </div>
      </div>
      <Divider />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <TitleComponent
          styles={{ margin: "20px 0px" }}
          size={40}
          text="Similar Products"
        />
        <a
          style={{
            textDecoration: "underline",
            color: globalColors.primaryColor,
          }}
          href="#"
        >
          See everything
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "30px auto",
        }}
      >
        <ItemComponent
          image={Image1}
          category="Kicks & Carriers"
          title="Low-top sneakers"
          newPrice={`$${89.99}`}
          oldPrice={`$${199.89}`}
        />
        <ItemComponent
          image={Image1}
          category="Kicks & Carriers"
          title="Low-top sneakers"
          newPrice={`$${89.99}`}
          oldPrice={`$${199.89}`}
        />
        <ItemComponent
          image={Image1}
          category="Kicks & Carriers"
          title="Low-top sneakers"
          newPrice={`$${89.99}`}
          oldPrice={`$${199.89}`}
        />
        <ItemComponent
          image={Image1}
          category="Kicks & Carriers"
          title="Low-top sneakers"
          newPrice={`$${89.99}`}
          oldPrice={`$${199.89}`}
        />
      </div>
    </ContainerComponent>
  );
};

export default Product;
