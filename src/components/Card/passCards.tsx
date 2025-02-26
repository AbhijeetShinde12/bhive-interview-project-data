import React from "react";
import Images from "../../assets/images";

interface PassProps {
  passType: string;
  originalPrice?: number;
  discountedPrice?: number;
  days?: number;
  discountPercentage?: number;
}

export const BulkPassCard: React.FC<PassProps> = ({
  passType,
  discountedPrice,
  days,
  discountPercentage,
}) => {
  return (
    <div className="blukPassCard">
      {discountPercentage && (
        <div className="text">
          {discountPercentage}% Discount
        </div>
      )}
      <div>
        <p className="subText">{passType}</p>
        <p className="discountPrice priceWrapper">
          ₹{discountedPrice}
          {days && <span className="days">/{days} Days</span>}
        </p>
      </div>
      <div>
        <span className="arrows"><img src={Images.arrow} style={{opacity:0.4}}/> <img src={Images.arrow} style={{opacity:0.6}}/> <img src={Images.arrow} />  </span>
      </div>
    </div>
  );
};

export const DayPassCard: React.FC<PassProps> = ({
  passType,
  originalPrice,
}) => {
  return (
    <div className="dayPassCard">
      <div>
        <p className="subText">{passType}</p>
        <p className="priceWrapper">
          ₹{ ` ${originalPrice}`}
          {originalPrice && <span className="days">/ Day</span>}
        </p>
      </div>
      <div>
      <span className="arrows"><img src={Images.arrow} style={{opacity:0.4}}/> <img src={Images.arrow} style={{opacity:0.6}}/> <img src={Images.arrow} />  </span>
      </div>
    </div>
  );
};