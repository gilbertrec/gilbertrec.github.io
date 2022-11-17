import React from 'react';
import PropTypes from 'prop-types';

import ResearchActivity from './Courses/ResearchActivity';

const ResearchActivities = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Research Activities</h3>
    </div>
    {data.map((researchactivity) => (
      <ResearchActivity
        data={researchactivity}
        key={data.title}
      />
    ))}
  </div>
);

ResearchActivities.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  })),
};

ResearchActivities.defaultProps = {
  data: [],
};

export default ResearchActivities;
