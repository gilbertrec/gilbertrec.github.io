import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Gilberto Recupito via email @ recupito.gilberto@gmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>
          For research collaborations, reviewing, teaching, or student
          supervision, write to me at
          {' '}
          <a href="mailto:gilberto.recupito@vub.be">gilberto.recupito@vub.be</a>.
        </p>
        <p>
          You can also use
          {' '}
          <a href="mailto:recupito.gilberto@gmail.com">recupito.gilberto@gmail.com</a>.
        </p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
