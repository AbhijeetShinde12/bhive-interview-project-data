import FeatureSection from "../components/Sections/featuresSection";
import LandingSection from "../components/Sections/landingSection";
import SpaceSection from "../components/Sections/spaceSection";

const Home: React.FC = () => {
  return (
    <>
      <LandingSection />
      <FeatureSection />
      <SpaceSection />
    </>
  );
};

export default Home;
