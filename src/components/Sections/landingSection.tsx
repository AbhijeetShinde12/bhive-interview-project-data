import Images from "../../assets/images";

const LandingSection = () => {
  return (
    <div className="section-wrapper">
      <img className="bgImg" src={Images.LandingImg} />
      <img className="bgMobileImg" src={Images.mobileLandingImg} />
      <div className="landing-content">
        <h2 className="heading">
          Host your meeting with world-class amenities. Starting at{" "}
          <span className="text-yellow">₹199/-!</span>
        </h2>
      </div>
    </div>
  );
};

export default LandingSection;
