import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.png`} alt="" />
      </Link>
      <header>
        <h2>Gilberto Recupito</h2>
        <p><a href="mailto:recupito.gilberto@gmail.com">recupito.gilberto@gmail.com</a></p>
      </header>
      <a href="https://github.com/gilbertrec/gilbertrec.github.io/blob/master/public/personal_doc/cv/GilbertoRecupitoCV-10-03-2025.pdf" target="_blank" rel="noreferrer">
        <button type="button"> Download My Resume!</button>
      </a>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Gilberto.<br />
        Actually I&apos;m a Ph.D. Student of Computer Science and Information Technology at <a href="https://www.unisa.it/">University of Salerno</a>.<br />
        I&apos;m a fan of Computer technologies, currently I focus my interest on
        Software Engineering for Artificial Intelligence (SE4AI).<br />
        I&apos;m also Game Development Fan, having experience in game engine <a href="https://unity.com/">Unity.</a>
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
