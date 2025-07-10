import ChooseUs from "./components/ChooseUs";
import { Footer } from "./components/Footer";
import HeroSection from "./components/HeroSection";
import LatestProperties from "./components/LatestProperties";
import Partners from "./components/Partner";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Partners />
      <LatestProperties />
      <ChooseUs />
      <Footer />
    </div>
  );
}
