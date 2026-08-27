import React from 'react';
import { Link } from 'react-router-dom';

import Education from './Education';
import Experience from './Experience';
import ResearchFields from './ResearchFields';

import degrees from '../../data/resume/degrees';
import positions from '../../data/resume/positions';
import fields from '../../data/resume/research_fields';

const ResumeSection = () => (
  <section id="resume" aria-labelledby="resume-heading">
    <div className="resume-heading">
      <h1 id="resume-heading">Resume</h1>
      <p>Curriculum vitae · Updated 11 August 2026</p>
    </div>
    <section className="resume-details" aria-label="Personal and professional details">
      <div><span>Current role</span><strong>Postdoctoral Researcher at VUB</strong></div>
      <div><span>Email</span><a href="mailto:gilberto.recupito@vub.be">gilberto.recupito@vub.be</a></div>
      <div><span>ORCID</span><a href="https://orcid.org/0000-0001-8088-1001">0000-0001-8088-1001</a></div>
      <div>
        <span>Google Scholar</span>
        <a href="https://scholar.google.com/citations?user=Rl6vnGIAAAAJ">Publication profile</a>
      </div>
    </section>
    <Experience data={positions} />
    <Education data={degrees} />
    <ResearchFields data={fields} />
    <section className="resume-more">
      <h3>More than a CV</h3>
      <p>
        Explore my publications and professional service, or see my teaching,
        student advising, and guest lectures.
      </p>
      <Link className="button" to="/projects">View publications</Link>
      <Link className="button" to="/service">View service</Link>
      <Link className="button" to="/teaching">View teaching</Link>
    </section>
  </section>
);

export default ResumeSection;
