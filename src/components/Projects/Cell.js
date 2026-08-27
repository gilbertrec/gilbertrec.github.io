import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Cell = ({ data }) => (
  <li className="publication-reference">
    <Helmet>
      <meta name="citation_title" content={data.title} />
      <meta name="citation_author" content={data.authors} />
      <meta name="citation_conference_title" content={data.conference} />
      <meta name="citation_publication_date" content={data.date} />
      <meta name="citation_pdf_url" content={data.link} />
    </Helmet>
    <span className="reference-number" aria-hidden="true" />
    <div className="publication-reference-content">
      <p className="publication-title">“<a href={data.link}>{data.title}</a>.”</p>
      <p className="publication-details publication-authors">{data.authors}.</p>
      <p className="publication-details publication-venue">
        <em>{data.conference}.</em>
      </p>
    </div>
    <div className="publication-tags" aria-label="Publication classification">
      <span className="publication-venue-tag">{data.tags[0]}</span>
      {data.code && <span className="publication-code-tag">{data.code}</span>}
    </div>
  </li>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    authors: PropTypes.string,
    date: PropTypes.string.isRequired,
    conference: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    code: PropTypes.string,
  }).isRequired,
};

export default Cell;
