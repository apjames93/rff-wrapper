import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const JsonPreview = ({ file }) => (
  <Typography variant="subtitle1" data-testid="json">
    {file.name}
  </Typography>
);

export default JsonPreview;

JsonPreview.propTypes = {
  file: PropTypes.shape({
    preview: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  }),
};

JsonPreview.defaultProps = {
  file: {},
};
