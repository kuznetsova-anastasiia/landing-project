import '../../styles/components/header.scss';
import { Button } from "../Button";
import { motion } from 'framer-motion';

const headerAnimation = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {duration: 1, delay: 0.2}
  }
}

export const Header = ({ setFormActive }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={headerAnimation}
      className="header"
    >
      <h1 className="header__title">
        Work at the speed of thought
      </h1>
      <p className="header__info">
        Most calendars are designed for teams. Slate is designed for 
        freelancers who want a simple way to plan their schedule.
      </p>

      <div className="header__buttons-wrap">
        <Button text="Try For Free" isPrimary={true} setFormActive={setFormActive} />
        <a href='#features' className='button'>
          Learn More
        </a>
      </div>
    </motion.div>
  );
}