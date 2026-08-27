import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';
import ResumeProfile from '../components/Resume/ResumeProfile';
import ResumeSection from '../components/Resume/ResumeSection';

// Include the professional profile at build time.
const markdown = raw('../data/about.md');
// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const About = () => (
  <Main
    title="About"
    description="Learn about Gilberto Recupito"
  >
    <>
      <article className="post markdown" id="about">
        <header>
          <div className="title">
            <h2 data-testid="heading"><Link to="/about">About Me</Link></h2>
            <p>Biography and curriculum vitae</p>
          </div>
        </header>
        <ResumeProfile />
        <ReactMarkdown
          source={markdown}
          renderers={{
            Link: LinkRenderer,
          }}
          escapeHtml={false}
        />
        <ResumeSection />
      </article>
    </>
  </Main>
);

export default About;
