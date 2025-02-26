import Images from '../../assets/images';
import { SpaceTypes } from '../../types/types';
import { BulkPassCard, DayPassCard } from './passCards';

type SpaceCardProps = {
  space: SpaceTypes;
};

const SpaceCard: React.FC<SpaceCardProps> = ({ space }) => {
  return (
    <div className="card-container">
      <div className="card-content">
        <h3 className="heading">{space.name}</h3>
        <a  
          href={space.google_maps_url} 
          target="_blank"
          rel="noopener noreferrer"
          className="link">
          <div className="subText">
            <img src={Images.direction} alt='Direction' />
            <span >6 Kms</span>
          </div>
        </a>
      </div>
      <div className="img-wrapper">
        <img
          src={space.images[0]}
          alt={space.name}
          className="img"
        />
        <div 
          className='imgWithType'>
          <img
            src={space.icon}
            alt={space.name}
            className="mr-1"
          />
        <span>{space.type}</span>
        </div>
      </div>

      <div className="passCardWrapper">
        <DayPassCard passType="Day Pass" originalPrice={249}  />
        <BulkPassCard
          passType="Bulk Pass"
          originalPrice={2400}
          discountedPrice={1992}
          days={10}
          discountPercentage={20}
        />
      </div>

    </div>
  );
};

export default SpaceCard;