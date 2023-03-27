import '../../styles/components/modal.scss';
import '../../styles/components/galleryModal.scss';

import classNames from 'classnames';
import close from '../../img/icons/cancel.svg';
import rectangle1 from '../../img/gallery/Rectangle1.png';
import rectangle2 from '../../img/gallery/Rectangle2.png';
import rectangle3 from '../../img/gallery/Rectangle3.png';
import rectangle4 from '../../img/gallery/Rectangle4.png';
import rectangle5 from '../../img/gallery/Rectangle5.png';
import rectangle6 from '../../img/gallery/Rectangle6.png';
import rectangle7 from '../../img/gallery/Rectangle7.png';

import prev from '../../img/icons/prev.svg';
import next from '../../img/icons/next.svg';
import { useState } from 'react';
import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react';

const photos = [{src: rectangle1, id: 1}, {src: rectangle2, id: 2}, {src: rectangle3, id: 3}, {src: rectangle4, id: 4}, {src: rectangle5, id: 5}, {src: rectangle6, id: 6}, {src: rectangle7, id: 7}];

export const GalleryModal = ({ active, setActive }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const imgWidth = 225;
  const gap = 30;

  const handleNextClick = () => {
    setCurrentImg(state => {
      if (state === 6) {
        return 0;
      }

      return state + 1;
    });
  };

  const handlePrevClick = () => {
    setCurrentImg(state => {
      if (state === 0) {
        return 6;
      }

      return state - 1;
    })
  }

  const itemTransform = currentImg * (imgWidth + gap);

  return (
    <Modal isOpen={active} onClose={setActive} size="3xl">
      <ModalOverlay />
      <ModalContent bg="#181818">
        <div className='modal__content'>
          <img 
            className='modal__close-icon' 
            src={close} 
            alt="close"
            onClick={() => setActive(false)}
          />
          <div className='gallery-carousel'>
            <button 
              type="button" 
              className='gallery-carousel__button' 
              onClick={handlePrevClick}
            >
              <img className='gallery-carousel__icon' src={prev} alt="Prev" />
            </button>

            <div className='gallery-carousel__container'>
              {photos.map(photo => (
                <img 
                  className='gallery-carousel__image' 
                  key={photo.id} 
                  src={photo.src} 
                  alt={photo.id}
                  style={{
                    transform: `translate(-${itemTransform}px)`,
                  }}
                />
              ))}
            </div>

            <button 
              type="button" 
              className='gallery-carousel__button'
              onClick={handleNextClick}
            >
              <img className='gallery-carousel__icon' src={next} alt="Next" />
            </button>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}