import Banner from "../components/Banner";
import Collections from "../components/Collections";
import ContentWrapper from "../components/ContentWrapper";
import Newsletter from "../components/Newsletter";
import PromoSection from "../components/PromoSection";
import SimilarProducts from "../components/SimilarProducts";

const StoreFront = () => {
  return (
    <div>
      <Banner />
      <ContentWrapper />
      <Collections />
      <SimilarProducts />
      <PromoSection />
      <SimilarProducts />
      <Newsletter />
    </div>
  );
};

export default StoreFront;
