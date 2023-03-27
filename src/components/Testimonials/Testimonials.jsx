import '../../styles/components/testimonials.scss';

import clarie from '../../img/clarie.png';
import francisco from '../../img/francisco.png';
import ralph from '../../img/ralph.png';
import jorge from '../../img/jorge.png';

import {TestimonialItem } from '../TestimonialItem';
import { motion } from 'framer-motion';
import { sectionAnimation } from '../../utils/animations';

export const Testimonials = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={sectionAnimation}
      className="testimonials" 
      id="testimonials"
    >
      <h2 className="testimonials__title">
        Testimonials
      </h2>

      <div className="testimonials__list">
        <TestimonialItem 
          photo={clarie}
          name="Claire Bell"
        />
        <TestimonialItem 
          photo={francisco}
          name="Francisci Lane"
        />
        <TestimonialItem 
          photo={ralph}
          name="Ralph Fisher"
        />
        <TestimonialItem 
          photo={jorge}
          name="Jorge Murphy"
        />
      </div>
    </motion.div>
  );
}