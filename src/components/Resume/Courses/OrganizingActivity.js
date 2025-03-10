/* eslint-disable linebreak-style */
import React from 'react';
import PropTypes from 'prop-types';

const OrganizingActivity = ({ data }) => (
  <article className="degree-container">
    <header>
      <h4 className="degree"> <a href={data.link}> {data.title}, {data.year}</a></h4>
      <p className="school">{data.role}, {data.location}</p>
    </header>
  </article>
);

OrganizingActivity.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default OrganizingActivity;
