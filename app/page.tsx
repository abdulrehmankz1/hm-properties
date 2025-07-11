import Carousel from "./components/Carousel";
import ChooseUs from "./components/ChooseUs";
import { Footer } from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LatestProperties from "./components/LatestProperties";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Partners from "./components/Partner";
import PropertyCategories from "./components/PropertyCategories";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Partners />
      <LatestProperties />
      <ChooseUs />
      <PropertyCategories />
      <Testimonials />
      <Newsletter />
      <Footer />
    </>
  );
}
