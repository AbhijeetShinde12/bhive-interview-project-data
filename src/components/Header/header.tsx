import Images from "../../assets/images";

const Header = () => {
  return (
    <header>
      <div className="header-container">
      <img
        src={Images.Logo}
        alt="Bhive Logo"
        className="logo"
        title="Host meeting illustration"
      />
      <div className="phoneImg">
        <img
          src={Images.phone}
          alt="Phone Logo"
        />
      </div>
      </div>
    </header>
  );
};

export default Header;
