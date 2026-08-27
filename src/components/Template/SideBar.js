import React from 'react';
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <header>
        <h2>Gilberto Recupito</h2>
        <p><a href="mailto:gilberto.recupito@vub.be">gilberto.recupito@vub.be</a></p>
      </header>
      <a href={`${PUBLIC_URL}/personal_doc/cv/GilbertoRecupitoCV-11-08-2026.pdf`} target="_blank" rel="noreferrer">
        <button type="button">Download CV · August 2026</button>
      </a>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Postdoctoral Researcher at{' '}
        <a href="https://www.vub.be/">Vrije Universiteit Brussel</a>, working at
        the intersection of software engineering and artificial intelligence.
        My research focuses on AI technical debt, MLOps, and the quality and
        security of LLM- and agent-assisted development.
      </p>
      <ul className="actions">
        <li>
          <Link to="/about" className="button">Learn More</Link>
        </li>
      </ul>
    </section>
  </section>
);

export default SideBar;
