import '../../styles/components/features.scss';
import features from '../../img/features.png';
import spoon from '../../img/icons/spoon.svg';
import alien from '../../img/icons/alien.svg';
import infinity from '../../img/icons/infinity.svg';

import { FeatureElement } from '../FeatureElement';

export const Features = () => {
  return (
    <div className="features" id="features">
      <h2 className="features__title">
        Features
      </h2>
      <p className="features__info">
        Most calendars are designed for teams. Slate is designed for 
        freelancers who want a simple way to plan their schedule.
      </p>

      <div className="features__main">
        <img 
          className="features__img"
          src={features} 
          alt="Feature with bot messaging" 
        />

        <div className="features__list">
          <FeatureElement 
            img={spoon} 
            title="A single source of truth" 
          />

          <FeatureElement 
            img={alien}
            title="Intuitive interface"
          />

          <FeatureElement 
            img={infinity}
            title="Or with rules"
          />
        </div>
      </div>
    </div>
  );
}