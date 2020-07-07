import React from 'react';
import PropTypes from 'prop-types';

const ImgPreview = ({ file }) => (
  <img
    data-testid="image"
    type={file.type}
    src={file.preview}
    alt={file.name}
  />
);

export default ImgPreview;

ImgPreview.propTypes = {
  file: PropTypes.shape({
    preview: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  }),
};

ImgPreview.defaultProps = {
  file: {},
};
