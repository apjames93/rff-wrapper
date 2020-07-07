import React from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import EmbedPreview from './components/EmbedPreview/EmbedPreview';
import ImgPreview from './components/ImgPreview/ImgPreview';
import JsonPreview from './components/JsonPreview/JsonPreview';

const showPreview = (file) => {
  switch (file.type) {
    case 'application/pdf':
      return <EmbedPreview file={file} />;
    case 'application/json':
      return <JsonPreview file={file} />;
    default:
      return <ImgPreview file={file} />;
  }
};

const Thumb = ({
  files,
}) => (
  <GridList cellHeight={100} cols={3}>
    {files.length && files.map(file => (
      <GridListTile key={file.preview} cols={3}>
        {file.name && showPreview(file)}
      </GridListTile>
    ))}
  </GridList>
);
export default Thumb;

Thumb.propTypes = {
  files: PropTypes.arrayOf(PropTypes.shape({
    preview: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
  })),
};

Thumb.defaultProps = {
  files: [],
};
