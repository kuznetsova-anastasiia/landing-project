import menu from '../../img/icons/menu.svg';
import logo from '../../img/logo.png';
import '../../styles/components/navbar.scss';
import { navItems } from '../../utils/navItems';
import { Button } from '../Button';

export const Navbar = ({ setMenuActive, setFormActive }) => {
  return (
    <div className="navbar">
      <a href="#home" className="navbar__logo">
        <img 
          className="navbar__logo-img"
          src={logo} 
          alt="Figma Land Logo" 
        />
      </a>

      <ul className="navbar__list">
        {navItems.map(item => (
          <li key={item} className="navbar__list-item">
            <a href={`#${item.toLowerCase()}`} className="navbar__list-link">
              {item}
            </a>
          </li>
        ))}
      </ul>

      <Button className="navbar__button" text="Try now" setFormActive={setFormActive} />

      <div className="navbar__menu" onClick={() => setMenuActive(true)}>
        <img 
          className="navbar__menu-icon"
          src={menu} 
          alt='menu' 
        />
      </div>
    </div>
  )
}