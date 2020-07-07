import React from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';

const showPreview = (file) => {
  switch (file.type) {
    case 'application/pdf':
      return (
        <embed
          data-testid="embed"
          src={file.preview}
          type={file.type}
          alt="Preview"
          height="100%"
          width="100%"
        />
      );
    case 'application/json':
      return (
        <Typography variant="subtitle1" data-testid="json">
          {file.name}
        </Typography>
      );
    default:
      return (
        <img
          data-testid="image"
          type={file.type}
          src={file.preview}
          alt={file.name}
        />
      );
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
