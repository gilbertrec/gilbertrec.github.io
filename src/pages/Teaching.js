import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import { teaching, advising, lectures } from '../data/contributions';

const sections = [
  { id: 'courses', label: 'Courses' },
  { id: 'advising', label: 'Advising' },
  { id: 'guest-lectures', label: 'Guest lectures' },
];

const advisingGroups = [
  {
    tag: 'PhD',
    title: 'Doctoral supervision',
    entries: advising.filter((entry) => entry.meta.includes('Ph.D.')),
  },
  {
    tag: 'MSc',
    title: 'Master’s supervision',
    entries: advising.filter((entry) => entry.meta.includes('Master’s')),
  },
  {
    tag: 'BSc',
    title: 'Bachelor’s supervision',
    entries: advising.filter((entry) => entry.meta.includes('Bachelor’s')),
  },
];

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const TeachingList = ({ entries }) => (
  <ul className="record-list">
    {entries.map((entry) => (
      <li key={`${entry.title}-${entry.meta}`}>
        <p className="record-meta">{entry.meta}</p>
        <h4>{entry.title}</h4>
        {entry.description && <p>{entry.description}</p>}
      </li>
    ))}
  </ul>
);

TeachingList.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    meta: PropTypes.string.isRequired,
    description: PropTypes.string,
  })).isRequired,
};

const Teaching = () => (
  <Main
    title="Teaching"
    description="Teaching, student advising, and guest lectures by Gilberto Recupito."
  >
    <article className="post" id="teaching-page">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/teaching">Teaching</Link></h2>
          <p>Courses, student supervision, and guest lectures</p>
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

      <section className="work-section first-section" id="courses">
        <div className="work-section-heading">
          <h3>Courses</h3>
          <p>Bachelor’s and master’s teaching activities.</p>
        </div>
        <TeachingList entries={teaching} />
      </section>
      <section className="work-section" id="guest-lectures">
        <div className="work-section-heading"><h3>Guest lectures</h3></div>
        <TeachingList entries={lectures} />
      </section>
      <section className="work-section" id="advising">
        <div className="work-section-heading">
          <h3>Supervision</h3>
          <p>Ph.D., master’s, and bachelor’s research supervision.</p>
        </div>
        {advisingGroups.map((group) => (
          <section className="supervision-group" key={group.tag}>
            <h4 className="supervision-heading">
              <span className="degree-tag">{group.tag}</span>
              {group.title}
            </h4>
            <TeachingList entries={group.entries} />
          </section>
        ))}
      </section>
    </article>
  </Main>
);

export default Teaching;
