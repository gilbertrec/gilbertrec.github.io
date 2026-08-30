import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env;

const ResumeProfile = () => (
  <section className="resume-profile">
    <div className="resume-profile-content">
      <p className="resume-kicker">Postdoctoral Researcher · Software Engineering for AI</p>
      <h3>Gilberto Recupito</h3>
      <p>
        I study how AI-intensive software can be made more reliable, secure,
        and maintainable—from technical debt and MLOps to LLM-generated code
        and agent-assisted development.
      </p>
      <div className="resume-actions">
        <a
          className="button special"
          href={`${PUBLIC_URL}/personal_doc/cv/GilbertoRecupitoCV-11-08-2026.pdf`}
          target="_blank"
          rel="noreferrer"
        >
          Download full CV
        </a>
        <Link className="button" to="/projects">Explore academic work</Link>
      </div>
      <ContactIcons />
    </div>
  </section>
);

export default ResumeProfile;
