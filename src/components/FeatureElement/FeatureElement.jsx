import '../../styles/components/feature.scss';

const defaultDesc = 'When you add work to your Slate calendar we automatically calculate useful insights';

export const FeatureElement = ({img, title, desc = defaultDesc}) => {
  return (
    <div className="feature">
      <img 
        className="feature__icon"
        src={img} 
        alt="Feature icon" 
      />
      <h3 className="feature__title">
        {title}
      </h3>
      <p className="feature__desc">
        {desc}
      </p>
    </div>
  );
}