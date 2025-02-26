import Images from "../../assets/images";

const FeatureSection = () => {
  const featureData = [
    {
      icon: Images.community,
      title: "Community Event",
      description: "One liner details about the feature",
    },
    {
      icon: Images.gym,
      title: "Gym Facilities",
      description: "One liner details about the feature",
    },
    {
      icon: Images.wifi,
      title: "High Speed Wifi",
      description: "One liner details about the feature",
    },
    {
      icon: Images.cafe,
      title: "Cafe & Tea Bar",
      description: "One liner details about the feature",
    },
    {
      icon: Images.affordable,
      title: "Affordable",
      description: "One liner details about the feature",
    },
    {
      icon: Images.lounges,
      title: "Comfort Lounges",
      description: "One liner details about the feature",
    },
    {
      icon: Images.booking,
      title: "Quick Booking",
      description: "One liner details about the feature",
    },
    {
      icon: Images.sportsArea,
      title: "Sports Area",
      description: "One liner details about the feature",
    },
  ];
  return (
    <div className="feature-container">
      <div className="feature-wrapper">
      <h4 className="heading">Why Choose us?</h4>
      <ul className="feature-content">
        {featureData.map((item, index) => (
          <li
            key={index.toString()}
            className="feature-list"
            style={{ borderRight: index === 3 || index === 7 ? "none" : "" , borderBottom: [4,5,6,7].includes(index) ? "none" : "" }}
          >
            <img src={item.icon} alt={item.icon} className="icon" />
            <span className="textDescriptionWrapper">
              <span className="title">{item.title}</span>
              <span className="description">{item.description}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default FeatureSection;
