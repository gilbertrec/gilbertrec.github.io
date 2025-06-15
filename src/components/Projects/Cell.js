import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
const Cell = ({ data }) => (
  <div className="cell-container">
     <Helmet>
      <meta name="citation_title" content={data.title} />
      <meta name="citation_author" content={data.authors} />
      <meta name="citation_conference_title" content={data.conference} />
      <meta name="citation_publication_date" content={data.date} />
      <meta name="citation_pdf_url" content={data.link} />
    </Helmet>
    <article className="mini-post">
      <header>
        <h3 className="title_published"><a href={data.link}>{data.title}</a></h3>
        <time className="published">{data.authors}</time>
        <time className="published">{data.conference}</time>
      </header>
    </article>
  </div>
);

Cell.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    authors: PropTypes.string,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    conference: PropTypes.string.isRequired,
  }).isRequired,
};

export default Cell;
