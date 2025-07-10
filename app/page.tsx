import ChooseUs from "./components/ChooseUs";
import { Footer } from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LatestProperties from "./components/LatestProperties";
import Partners from "./components/Partner";
import PropertyCategories from "./components/PropertyCategories";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Partners />
      <LatestProperties />
      <ChooseUs />
      <PropertyCategories />
      <Testimonials />
      <Footer />
    </div>
  );
}
