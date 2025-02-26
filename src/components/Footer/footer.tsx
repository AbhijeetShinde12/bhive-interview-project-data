import React from 'react';
import Images from '../../assets/images';

export const Footer: React.FC = () => {
  const date = new Date().getFullYear();
  return (
    <footer className="footer-container">
        <div className="footer-wrapper">
          <h2 className="heading">
            Download our app now
          </h2>
          <div className="img-wrapper">
            <img
              src={Images.AppStore}
              alt="BHIVE Workspace app screen 1"
              className="img"
            />
          </div>
         <div className='white-box'>
         <div className="description">
            <p className="text-gray">
              Boost your productivity with the BHIVE Workspace app.
              <br />
              Elevate your workspace, collaborate efficiently, 
              <br />
              and unlock exclusive perks.
            </p>
            <div className="icons-wrapper">
              <a href="#" className="inline-block store-icon">
               <img src={Images.googlePlay} />
              </a>
              <a href="#" className="inline-block">
              <img src={Images.appleStore} />
              </a>
            </div>
          </div>
         </div>
      </div>
      <p className="copyRightText"> &copy; Copyright {date}. Bhive Private Limited</p>
    </footer>
  );
};


export default Footer;