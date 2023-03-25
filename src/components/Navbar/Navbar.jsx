import logo from '../../img/logo.png';
import '../../styles/components/navbar.scss';
import { navItems } from '../../utils/navItems';
import { Button } from '../Button';

export const Navbar = () => {
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

      <Button text="Try now" />
    </div>
  )
}