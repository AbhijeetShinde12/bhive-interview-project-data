import spaces from "../../data/data";
import { useMobileView } from "../../hooks/useMobileView";
import SpaceCard from "../Card/spaceCard";

const SpaceSection = () => {
  const isMobile = useMobileView();
  return <section className="space-container">
 <div className="space-wrapper">
  <h2 className="heading">{isMobile ? 'Our Spaces' : 'Our Space Overview'}</h2>
  <div className="space-content">
    {spaces.map((space) => (
      <SpaceCard key={space.id} space={space} />
    ))
    }
  </div>
  </div>
</section>
}

export default SpaceSection;