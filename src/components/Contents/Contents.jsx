import '../../styles/components/contents.scss';
import macbook from '../../img/macbook.png'
import notifications from '../../img/notifications.png';
import { ContentElement } from "../ContentElement";

import { motion } from 'framer-motion';
import { sectionAnimation } from '../../utils/animations';

const right = {
  hidden: {
    x: -200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: 0.2}
  }
}

const left = {
  hidden: {
    x: 200,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {duration: 0.5, delay: 0.1}
  }
}

export const Contents = ({ setFormActive }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      className="contents" 
      id="contents"
    >
      <motion.h2 variants={sectionAnimation} className="contents__title">
        Contents
      </motion.h2>
      <motion.p variants={sectionAnimation} className="contents__info">
        We focus on ergonomics and meeting you where you work. 
        <br />
        It's only a keystroke away.
      </motion.p>

      <div className="contents__list">
        <ContentElement animation={right} title="Work" img={macbook} setFormActive={setFormActive} />
        <ContentElement animation={left} title="Design with real data" img={notifications} setFormActive={setFormActive} />
      </div>
    </motion.div>
  );
}