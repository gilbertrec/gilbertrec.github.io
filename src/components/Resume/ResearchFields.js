import React from 'react';
import PropTypes from 'prop-types';

import ResearchField from './Education/ResearchField';

const ResearchFields = ({ data }) => (
  <div className="education">
    <div className="link-to" id="education" />
    <div className="title">
      <h3>Research Fields</h3>
    </div>
    {data.map((researchField) => (
      <ResearchField
        data={researchField}
        key={data.title}
      />
    ))}
  </div>
);

ResearchFields.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  })),
};

ResearchFields.defaultProps = {
  data: [],
};

export default ResearchFields;
