import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import {
  recognition,
  organizing,
  committees,
  editorial,
  reviewing,
} from '../data/contributions';

const sections = [
  { id: 'recognition', label: 'Recognition' },
  { id: 'conference-organization', label: 'Conference organization' },
  { id: 'journal-reviews', label: 'Journal reviews' },
];

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const ServiceList = ({ entries }) => (
  <ul className="record-list">
    {entries.map((entry) => (
      <li key={`${entry.title}-${entry.meta}`}>
        <p className="record-meta">{entry.meta}</p>
        <h4>
          {entry.award && (
            <span className="award-icon" aria-label="Award">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="8" r="5" />
                <path d="M8.5 12 7 21l5-3 5 3-1.5-9" />
                <path d="m10 8 1.3 1.3L14.5 6" />
              </svg>
            </span>
          )}
          {entry.title}
        </h4>
        {entry.description && <p>{entry.description}</p>}
      </li>
    ))}
  </ul>
);

ServiceList.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    meta: PropTypes.string.isRequired,
    description: PropTypes.string,
    award: PropTypes.bool,
  })).isRequired,
};

const Service = () => (
  <Main
    title="Professional Service"
    description="Professional and academic service by Gilberto Recupito."
  >
    <article className="post" id="service-page">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/service">Professional Service</Link>
          </h2>
          <p>Recognition, conference organization, and journal reviewing</p>
        </div>
      </header>

      <nav className="work-nav" aria-label="Sections on this page">
        {sections.map((section) => (
          <button
            type="button"
            key={section.id}
            onClick={() => scrollToSection(section.id)}
          >
            {section.label}
          </button>
        ))}
      </nav>

      <section className="service-overview">
        <p>
          My professional service includes peer review, organization and
          committee roles across international software-engineering venues.
        </p>
        <div className="service-stats" aria-label="Professional service statistics">
          <span><strong>{recognition.length}</strong> recognition</span>
          <span>
            <strong>{organizing.length + committees.length}</strong> conference roles
          </span>
          <span><strong>55</strong> journal reviews</span>
        </div>
      </section>

      <section className="work-section first-section" id="recognition">
        <div className="work-section-heading"><h3>Professional recognition</h3></div>
        <ServiceList entries={recognition} />
      </section>

      <section className="work-section" id="conference-organization">
        <div className="work-section-heading"><h3>Conference organization</h3></div>
        <ServiceList entries={[...organizing, ...committees]} />
      </section>

      <section className="work-section" id="journal-reviews">
        <div className="work-section-heading"><h3>Journal reviews</h3></div>
        <ServiceList entries={[...editorial, ...reviewing]} />
      </section>
    </article>
  </Main>
);

export default Service;
