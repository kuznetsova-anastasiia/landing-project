import '../../styles/components/testimonials.scss';

import clarie from '../../img/clarie.png';
import francisco from '../../img/francisco.png';
import ralph from '../../img/ralph.png';
import jorge from '../../img/jorge.png';

import {TestimonialItem } from '../TestimonialItem';

export const Testimonials = () => {
  return (
    <div className="testimonials" id="testimonials">
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
    </div>
  );
}