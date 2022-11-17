import React from 'react';
import PropTypes from 'prop-types';

const ResearchField = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree">{data.title}</h4>
      <p className="description">{data.description}</p>
    </header>
  </article>
);

ResearchField.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ResearchField;
