import '../../styles/components/header.scss';
import { Button } from "../Button";

export const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">
        Work at the speed of thought
      </h1>
      <p className="header__info">
        Most calendars are designed for teams. Slate is designed for 
        freelancers who want a simple way to plan their schedule.
      </p>

      <div className="header__buttons-wrap">
        <Button text="Try For Free" isPrimary={true} />
        <a href='#features' className='button'>
          Learn More
        </a>
      </div>
    </div>
  );
}