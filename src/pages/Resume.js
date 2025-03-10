import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import ResearchActivities from '../components/Resume/ResearchActivities';
import OrganizingActivities from '../components/Resume/OrganizingActivities';
import ResearchFields from '../components/Resume/ResearchFields';

import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import fields from '../data/resume/research_fields';
import activities from '../data/resume/research_activities';
import organizingActivities from '../data/resume/organizing_activities';

const Resume = () => (
  <Main
    title="Resume"
    description="Gilberto Recupito's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <ResearchActivities data={activities} />
      <OrganizingActivities data={organizingActivities} />
      <ResearchFields data={fields} />
    </article>
  </Main>
);

export default Resume;
