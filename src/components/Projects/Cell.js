import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';

const Cell = ({ data }) => (
  <div className="cell-container">
    <article className="mini-post">
      <header>
        <h3 className="title_published"><a href={data.link}>{data.title}</a></h3>
        <time className="published">{data.authors}</time>
        <time className="published">{dayjs(data.date).format('MMMM, YYYY')} - {data.conference}</time>
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
