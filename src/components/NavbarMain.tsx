import TextComponent from "../share/TextComponent";
import ContainerComponent from "../share/ContainerComponent";
import { Bag2, BagHappy, SearchNormal, User } from "iconsax-react";
import { globalColors } from "../styles/globalColors";

const NavbarMain = () => {
  return (
    <ContainerComponent
      styles={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
      }}
    >
      <ul
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
        }}
      >
        {/* <Link to="/women"> */}
        <TextComponent text="Women" />
        {/* </Link> */}
        {/* <Link to="/men"> */}
        <TextComponent text="Men" />
        {/* </Link> */}
        {/* <Link to="/kid"> */}
        <TextComponent text="Kids" />
        {/* </Link> */}
        {/* <Link to="/gift-card"> */}
        <TextComponent text="Gift Cards" />
        {/* </Link> */}
      </ul>
      <BagHappy
        size={40}
        variant="Bold"
        color={globalColors.primaryColor}
        style={{ marginRight: 110 }}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignContent: "center",
          gap: 20,
        }}
      >
        <SearchNormal size={20} />
        <User size={20} />
        <Bag2 size={20} />
      </div>
    </ContainerComponent>
  );
};

export default NavbarMain;
