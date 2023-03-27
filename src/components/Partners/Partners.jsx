import '../../styles/components/partners.scss';
import { partnerImages } from '../../utils/partnerImages';

import { motion } from 'framer-motion';
import { sectionAnimation } from '../../utils/animations';

export const Partners = () => {
  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      variants={sectionAnimation}
      className="partners" 
      id="partners"
    >
      <h2 className="partners__title">
        Partners
      </h2>

      <p className="partners__info">
        We focus on ergonomics and meeting you where you work. 
        <br />
        It's only a keystroke away.
      </p>

      <ul className="partners__list">
        {partnerImages.map(image => (
          <li className="partners__item" key={image}>
            <img
              className="partners__img"
              src={image} 
              alt="Partner's Icon" 
            />
          </li>
        ))}
      </ul>

    </motion.div>
  );
}