import React from 'react';
import PropTypes from 'prop-types';

const EmbedPreview = ({ file }) => (
  <embed
    data-testid="embed"
    src={file.preview}
    type={file.type}
    alt="Preview"
    height="100%"
    width="100%"
  />
);

export default EmbedPreview;

EmbedPreview.propTypes = {
  file: PropTypes.shape({
    preview: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  }),
};

EmbedPreview.defaultProps = {
  file: {},
};
