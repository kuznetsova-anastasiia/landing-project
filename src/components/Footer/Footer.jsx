import '../../styles/components/footer.scss';

import location from '../../img/icons/location.svg';
import phone from '../../img/icons/phone.svg';
import twitter from '../../img/icons/twitter.svg';
import facebook from '../../img/icons/facebook.svg';
import linkedin from '../../img/icons/linkedin.svg';

import { navItems } from "../../utils/navItems";

export const Footer = () => {
  return (
    <div className="footer">
      <ul className="footer__list">
        {navItems.map(item => (
          <li className="footer__item" key={item}>
            <a className="footer__link" href={`#${item.toLowerCase()}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      <div className="footer__contacts">
        <a 
          className="footer__contacts-link" 
          rel='noreferrer' 
          target="_blank" 
          href="https://goo.gl/maps/iygNm6UUyF4yTefC6"
        >
          <img className="footer__contacts-icon" src={location} alt="" />
          7480 Mockingbird Hill
        </a>
        <a className="footer__contacts-link" href="tel:(239) 555-0108">
          <img className="footer__contacts-icon" src={phone} alt="" />
          (239) 555-0108
        </a>
        <div className="footer__social">
          <a 
            className="footer__contacts-link" 
            href="https://twitter.com/"
            rel='noreferrer' 
            target="_blank" 
          >
            <img className="footer__contacts-icon" src={twitter} alt="Twitter" />
          </a>
          <a 
            className="footer__contacts-link" 
            href="https://www.facebook.com/"
            rel='noreferrer' 
            target="_blank" 
          >
            <img className="footer__contacts-icon" src={facebook} alt="Facebook" />
          </a>
          <a 
            className="footer__contacts-link" 
            href="https://www.linkedin.com/"
            rel='noreferrer' 
            target="_blank" 
          >
            <img className="footer__contacts-icon" src={linkedin} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}