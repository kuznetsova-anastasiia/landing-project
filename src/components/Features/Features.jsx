import '../../styles/components/features.scss';
import features from '../../img/features.png';
import spoon from '../../img/icons/spoon.svg';
import alien from '../../img/icons/alien.svg';
import infinity from '../../img/icons/infinity.svg';

import { motion } from 'framer-motion';

import { FeatureElement } from '../FeatureElement';

const featuresAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {duration: 0.7, delay: 0.2}
  }
}

const down = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: 0.3}
  }
};

const up = {
  hidden: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: 0.3}
  }
}

export const Features = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      variants={featuresAnimation}
      className="features" 
      id="features"
    >
      <h2 className="features__title">
        Features
      </h2>
      <p className="features__info">
        Most calendars are designed for teams. Slate is designed for 
        freelancers who want a simple way to plan their schedule.
      </p>

      <div className="features__main">
        <motion.img
          variants={down}
          className="features__img"
          src={features} 
          alt="Feature with bot messaging" 
        />

        <motion.div variants={up} className="features__list">
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
        </motion.div>
      </div>
    </motion.div>
  );
}