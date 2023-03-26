import '../../styles/components/gallery.scss';

import rectangle1 from '../../img/gallery/Rectangle1.png';
import rectangle2 from '../../img/gallery/Rectangle2.png';
import rectangle3 from '../../img/gallery/Rectangle3.png';
import rectangle4 from '../../img/gallery/Rectangle4.png';

export const Gallery = ({ setGalleryActive }) => {
  return (
    <div className="gallery" id="gallery">
      <h2 className="gallery__title">
        Gallery
      </h2>

      <p className="gallery__info">
        We focus on ergonomics and meeting you where you work. 
        <br />
        It's only a keystroke away.
      </p>

      <div className="gallery__list">
        <img 
          className="gallery__img"
          src={rectangle1} 
          alt="Gallery Item" 
        />
        <img 
          className="gallery__img"
          src={rectangle2} 
          alt="Gallery Item" 
        />
        <img 
          className="gallery__img"
          src={rectangle3} 
          alt="Gallery Item" 
        />
        <img 
          className="gallery__img"
          src={rectangle4} 
          alt="Gallery Item" 
        />
      </div>

      <a 
        href='/' 
        className='button'
        onClick={(e) => {
          e.preventDefault();
          setGalleryActive(true);
        }}
      >
        See more
      </a>
    </div>
  );
}