import ContainerComponent from "../share/ContainerComponent";
import ItemComponent from "../share/ItemComponent";
import TitleComponent from "../share/TitleComponent";

import Image from "../assets/340x340.svg";

const Collections = () => {
  return (
    <ContainerComponent>
      <TitleComponent size={25} text="Collections" />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "30px auto",
        }}
      >
        <ItemComponent
          image={Image}
          category="Adventure"
          title="Adventure Seeker Collection"
        />
        <ItemComponent
          image={Image}
          category="Adventure"
          title="Adventure Seeker Collection"
        />
        <ItemComponent
          image={Image}
          category="Adventure"
          title="Adventure Seeker Collection"
        />
        <ItemComponent
          image={Image}
          category="Adventure"
          title="Adventure Seeker Collection"
        />
      </div>
    </ContainerComponent>
  );
};

export default Collections;
