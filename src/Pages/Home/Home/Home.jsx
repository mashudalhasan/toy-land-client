import useTitle from "../../../hooks/useTitle";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import Newsletter from "../Newsletter/Newsletter";
import PopularToys from "../PopularToys/PopularToys";
import PurchaseSteps from "../PurchaseSteps/PurchaseSteps";
import Reviews from "../Reviews/Reviews";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <ShopByCategory></ShopByCategory>
      <AboutUs></AboutUs>
      <PopularToys></PopularToys>
      <PurchaseSteps></PurchaseSteps>
      <Reviews></Reviews>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
