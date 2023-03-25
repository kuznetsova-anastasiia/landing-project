import '../../styles/components/testimonialItem.scss';

const defaultDesc = 'Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days you need to work to reach your financial goal for the month and year.';

export const TestimonialItem = ({ 
  photo, 
  name, 
  position = 'Designer', 
  desc = defaultDesc 
}) => {
  return (
    <div className="testimonial-item">
      <img 
        className="testimonial-item__img"
        src={photo} 
        alt={`${name}'s avatar`} 
      />
      <h3 className="testimonial-item__title">
        {name}
        <br />
        {position}
      </h3>
      <p className="testimonial-item__desc">
        {desc}
      </p>
    </div>
  );
}