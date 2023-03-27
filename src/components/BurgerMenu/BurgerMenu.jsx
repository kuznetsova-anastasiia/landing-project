
import { navItems } from '../../utils/navItems';
import '../../styles/components/burgerMenu.scss';
import { Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react';

export const BurgerMenu = ({ active, setActive }) => {
  return (
    <Drawer
      isOpen={active}
      placement='right'
      onClose={setActive}
    >
      <DrawerOverlay />
      <DrawerContent bg="#181818" color="#e9e9e9">
        <DrawerCloseButton />
        <DrawerHeader>Menu</DrawerHeader>

        <DrawerBody>
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}