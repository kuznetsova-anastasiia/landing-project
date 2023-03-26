import classNames from 'classnames';
import { navItems } from '../../utils/navItems';
import cancel from '../../img/icons/cancel.svg';
import '../../styles/components/burgerMenu.scss';

export const BurgerMenu = ({ active, setActive }) => {
  return (
    <div 
      onClick={() => setActive(false)}
      className={classNames(
        'burger-menu',
        { 'burger-menu--active': active }
      )}
    >
      <div className="burger-menu__blur"/>
      <div className="burger-menu__content" onClick={(e) => e.stopPropagation()}>
        <div className="burger-menu__header">
          <h2 className="burger-menu__title">
            Menu
          </h2>
          <img 
            onClick={() => setActive(false)}
            className="burger-menu__close-btn"
            src={cancel} 
            alt="Close" 
          />
        </div>

        <ul className="burger-menu__list">
            {navItems.map(item => (
              <li
                onClick={() => setActive(false)}
                className="burger-menu__item" 
                key={item}
              >
                <a className="burger-menu__link" href={`#${item.toLowerCase()}`}>
                  {item}
                </a>
              </li>
            ))}
          </ul>
      </div>
    </div>
  )
}