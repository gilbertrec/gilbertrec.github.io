import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import publications from '../data/projects';
import researchTopics from '../data/resume/research_fields';

const selectedCodes = ['J1', 'C11', 'J2', 'J3', 'C1'];
const selectedPublications = selectedCodes
  .map((code) => publications.find((publication) => publication.code === code))
  .filter(Boolean);

const sections = [
  { id: 'research-topics', label: 'Research topics' },
  { id: 'selected-publications', label: 'Selected publications' },
  { id: 'all-publications', label: 'All publications' },
];

const filters = [
  { id: 'all', label: 'All' },
  { id: 'J', label: 'Journal' },
  { id: 'C', label: 'Conference / Workshops' },
  { id: 'B', label: 'Book chapter' },
];

const scrollToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const visiblePublications = publications.filter(
    (publication) => activeFilter === 'all' || publication.code.startsWith(activeFilter),
  );

  return (
    <Main
      title="Publications"
      description="Publications by Gilberto Recupito."
    >
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/projects">Publications</Link></h2>
            <p>{publications.length} publications · 2022–2026</p>
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

        <section className="work-section first-section" id="research-topics">
          <div className="work-section-heading">
            <h3>Research topics</h3>
            <p>
              My work mainly spans Software Engineering for AI and AI for
              Software Engineering, while extending to broader software
              engineering topics.
            </p>
          </div>
          <ul className="topic-list">
            {researchTopics.map((topic) => (
              <li key={topic.title}>
                <h4>{topic.title}</h4>
                <p>{topic.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="work-section" id="selected-publications">
          <div className="work-section-heading">
            <h3>Selected publications</h3>
            <p>A representative selection of my research.</p>
          </div>
          <ul className="publication-list selected-publication-list">
            {selectedPublications.map((publication) => (
              <Cell
                data={publication}
                key={`selected-${publication.title}`}
              />
            ))}
          </ul>
        </section>

        <section className="work-section" id="all-publications">
          <div className="work-section-heading">
            <h3>All publications</h3>
            <p>{publications.length} publications · 2022–2026</p>
          </div>
          <div className="publication-filters" aria-label="Filter publications">
            {filters.map((filter) => (
              <button
                type="button"
                className={activeFilter === filter.id ? 'active' : ''}
                key={filter.id}
                aria-pressed={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
          <p className="filter-result-count">
            Showing {visiblePublications.length} publication{visiblePublications.length !== 1 && 's'}
          </p>
          <ul className="publication-list">
            {visiblePublications.map((publication) => (
              <Cell
                data={publication}
                key={publication.title}
              />
            ))}
          </ul>
        </section>
      </article>
    </Main>
  );
};

export default Projects;
