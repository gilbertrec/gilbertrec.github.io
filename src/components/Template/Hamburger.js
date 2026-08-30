import React, { useState } from 'react';

import { NavLink } from 'react-router-dom';
import Menu from 'react-burger-menu/lib/menus/slide';
import ContactIcons from '../Contact/ContactIcons';
import routes from '../../data/routes';

const Hamburger = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hamburger-container">
      <nav className="main" id="hambuger-nav">
        <ul>
          {open ? (
            <li className="menu close-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#10005;</div>
            </li>
          ) : (
            <li className="menu open-menu">
              <div onClick={() => setOpen(!open)} className="menu-hover">&#9776;</div>
            </li>
          )}
        </ul>
      </nav>
      <Menu
        right
        isOpen={open}
        customBurgerIcon={false}
        customCrossIcon={false}
        onStateChange={(state) => setOpen(state.isOpen)}
      >
        <ul className="hamburger-ul">
          {routes.map((l) => (
            <li key={l.label}>
              <NavLink
                exact
                activeClassName="active"
                to={l.path}
                onClick={() => setOpen(false)}
              >
                <h3 className={l.index && 'index-li'}>{l.label}</h3>
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="mobile-contact">
          <a href="mailto:gilberto.recupito@vub.be">gilberto.recupito@vub.be</a>
          <ContactIcons />
        </div>
      </Menu>
    </div>
  );
};

export default Hamburger;
