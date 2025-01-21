import BlogGrid from "./component/BlogGrid";
import DealOfTheDay from "./component/DealOfTheDay";
import FeaturedProducts from "./component/FeaturedProducts";
import FeaturesSection from "./component/FeaturesSection";
import Footer from "./component/Footer";
import HomeSlider from "./component/Homeslider";
import LogoCollection from "./component/LogoCollection";
import Navbar from "./component/Navbar";
import NavigationMenu from "./component/NavbarBottom";
import ProductGrid from "./component/ProductGrid";
import PromotionalSection from "./component/PromotionalSection";
import ShopCategories from "./component/ShopCategories";
import SunglassesOffers from "./component/SunglassesOffers";
import TestimonialSection from "./component/TestimonialSection";
import Topbar from "./component/Topbar";

function App() {
  return (
    <div className="">
      <Topbar />
      <NavigationMenu />
      <Navbar />
      <HomeSlider />
      <FeaturesSection />
      <SunglassesOffers />
      <ProductGrid />
      <ShopCategories/>
      <FeaturedProducts/>
      <PromotionalSection/>
      <TestimonialSection/>
      <DealOfTheDay/>
      <BlogGrid/>
      <LogoCollection/>
      <Footer/>
    </div>
  );
}

export default App;
