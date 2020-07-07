import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Dropzone from 'react-dropzone';
import Thumbs from './components/Thumbs/Thumbs';

const ReactDropZone = ({
  acceptFileTypes,
  onDrop,
  field,
}) => {
  const [state, setState] = useState({ files: {} });

  return (
    <Dropzone
      onDrop={
        (acceptedFiles, rejectedFiles) => onDrop(acceptedFiles, rejectedFiles, field, setState)
      }
      accept={acceptFileTypes.join(', ')}
      data-testid="DropzoneInput"
    >
      {({ getRootProps, getInputProps }) => (
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <Typography variant="subtitle1">
            Drag &#39;n&#39; drop some files here, or click to select files
          </Typography>
          <Thumbs files={state.files} />
        </div>
      )}
    </Dropzone>
  );
};
export default ReactDropZone;

ReactDropZone.propTypes = {
  acceptFileTypes: PropTypes.arrayOf(PropTypes.string),
  /**
   * callBack function to set Thumbs to files state and bind data to rff
   */
  onDrop: PropTypes.func.isRequired,
  /**
   * rff field
   */
  field: PropTypes.shape({
    input: PropTypes.shape({
      onChange: PropTypes.func.isRequired,
    }),
  }).isRequired,
};

ReactDropZone.defaultProps = {
  acceptFileTypes: ['image/jpeg', 'image/png', 'application/pdf'],
};
