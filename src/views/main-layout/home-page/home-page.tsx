import FishBento from "@/views/main-layout/home-page/components/fish-bento";
import HeroContent from "@/views/main-layout/home-page/components/hero-content";
import PlanTrip from "@/views/main-layout/home-page/components/plan-trip";
import TripItinerary from "@/views/main-layout/home-page/components/trip-itinerary";
import "./styles/index.css";

const HomePage = () => {
  return (
    <div>
      <HeroContent />
      <TripItinerary />
      <FishBento />
      <PlanTrip />
    </div>
  );
};

export default HomePage;
