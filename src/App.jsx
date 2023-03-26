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

export const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    window.onload = () => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 100);
    }
  }, []);

  return (
    <>
      <Loader isLoaded={isLoaded} />
      <div className="App" id="home">
        <Navbar setMenuActive={setMenuActive} />

        <Header />


        <main>
          <div className="container">
            <Features />
            <Contents />
            <Gallery />
            <Partners />
            <Testimonials />
          </div>
        </main>

        <Footer />

        <BurgerMenu active={menuActive} setActive={setMenuActive} />
      </div>
    </>
    
  );
}
