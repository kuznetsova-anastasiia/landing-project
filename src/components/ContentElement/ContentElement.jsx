import '../../styles/components/contentItem.scss';
import { Button } from "../Button";
import { motion } from 'framer-motion';

const defaultDesc = 'Ever wondered if you\'re too reliant on a client for work? Slate helps you identify.'

export const ContentElement = ({ title, desc = defaultDesc, img, setFormActive, animation }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={animation}
      className="content-item"
    >
      <h3 className="content-item__title">
        {title}
      </h3>

      <p className="content-item__desc">
        {desc}
      </p>

      <Button text="Try For Free" isPrimary={true} setFormActive={setFormActive} />

      <img 
        className="content-item__img"
        src={img} 
        alt="Content Feature" 
      />
    </motion.div>
  );
};