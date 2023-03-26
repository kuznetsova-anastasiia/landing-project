import './styles/main.scss';
import { Navbar } from './components/Navbar';
import { Header } from './components/Header';
import { Features } from './components/Features';
import { Contents } from './components/Contents';
import { Gallery } from './components/Gallery';
import { Partners } from './components/Partners';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { BurgerMenu } from './components/BurgerMenu';
import { useEffect, useState } from 'react';
import { TryForm } from './components/TryForm';
import { Message } from './components/Message';
import { GalleryModal } from './components/GalleryModal';

export const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [formActive, setFormActive] = useState(false);
  const [message, setMessage] = useState(false);
  const [galleryActive, setGalleryActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);
  }, []);

  return (
    <>
      <Loader isLoaded={isLoaded} />
      <div className="App" id="home">
        <Navbar setMenuActive={setMenuActive} setFormActive={setFormActive} />

        <Header setFormActive={setFormActive} />


        <main>
          <div className="container">
            <Features />
            <Contents setFormActive={setFormActive} />
            <Gallery setGalleryActive={setGalleryActive} />
            <Partners />
            <Testimonials />
          </div>
        </main>

        <Footer />

        <BurgerMenu active={menuActive} setActive={setMenuActive} />
        <TryForm active={formActive} setActive={setFormActive} setMessage={setMessage} />
        <Message active={message} />
        <GalleryModal active={galleryActive} setActive={setGalleryActive} />
      </div>
    </>
    
  );
}
