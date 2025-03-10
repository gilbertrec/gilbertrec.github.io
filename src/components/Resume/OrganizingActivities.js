import React from 'react';
import PropTypes from 'prop-types';

import OrganizingActivity from './Courses/OrganizingActivity';

const OrganizingActivities = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Organizing Activities</h3>
    </div>
    {data.map((researchactivity) => (
      <OrganizingActivity
        data={researchactivity}
        key={data.title}
      />
    ))}
  </div>
);

OrganizingActivities.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
  })),
};

OrganizingActivities.defaultProps = {
  data: [],
};

export default OrganizingActivities;
