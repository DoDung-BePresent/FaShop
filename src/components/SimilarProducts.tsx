import ContainerComponent from "../share/ContainerComponent";
import ItemComponent from "../share/ItemComponent";
import TitleComponent from "../share/TitleComponent";

import Image from "../assets/340x340.svg";

const SimilarProducts = () => {
  return (
    <ContainerComponent
      styles={{
        margin: "30px auto",
      }}
    >
      <TitleComponent size={25} text="Similar Products" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "30px auto",
        }}
      >
        <ItemComponent
          image={Image}
          title="Funky Sunglasses"
          newPrice={`$${89.99}`}
          oldPrice={`$${199.89}`}
        />

        <ItemComponent
          image={Image}
          title="Funky Sunglasses"
          newPrice={`$${89.99}`}
          oldPrice={`$${199.89}`}
        />

        <ItemComponent
          image={Image}
          title="Funky Sunglasses"
          newPrice={`$${89.99}`}
          oldPrice={`$${199.89}`}
        />

        <ItemComponent
          image={Image}
          title="Funky Sunglasses"
          newPrice={`$${89.99}`}
          oldPrice={`$${199.89}`}
        />
      </div>
    </ContainerComponent>
  );
};

export default SimilarProducts;
