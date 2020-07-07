import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Dropzone from 'react-dropzone';

export const base64File = (file, field) => {
    const reader = new FileReader(); // eslint-disable-line
  return new Promise((resolve) => {
    reader.onload = (event) => {
      field.input.onChange(event.target.result);
      resolve(event.target.result);
    };
    reader.readAsDataURL(file);
  });
};

export const drop = async (acceptedFiles, rejectedFiles, field) => {
  if (rejectedFiles.length > 0) {
    const error = rejectedFiles[0];
    field.input.onChange(error);
  }

  if (acceptedFiles.length === 1) {
    await base64File(acceptedFiles[0], field);
  }

  if (acceptedFiles.length > 1) {
    field.input.onChange({
      errors: [{
        code: 'one file',
        message: 'only one file can be uploaded',
      }],
    });
  }
};

const ReactDropZone = ({
  acceptFileTypes,
  onDrop,
  field,
}) => (
  <Dropzone
    onDrop={(acceptedFiles, rejectedFiles) => onDrop(acceptedFiles, rejectedFiles, field)}
    accept={acceptFileTypes.join(', ')}
    data-testid="DropzoneInput"
  >
    {({ getRootProps, getInputProps }) => (
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <Typography variant="subtitle1">
          Drag &#39;n&#39; drop some files here, or click to select files
        </Typography>
      </div>
    )}
  </Dropzone>
);
export default ReactDropZone;

ReactDropZone.propTypes = {
  acceptFileTypes: PropTypes.arrayOf(PropTypes.string),
  onDrop: PropTypes.func,
  field: PropTypes.shape({
    input: PropTypes.shape({
      onChange: PropTypes.func.isRequired,
    }),
  }).isRequired,
};

ReactDropZone.defaultProps = {
  acceptFileTypes: ['image/jpeg', 'image/png', 'application/pdf'],
  onDrop: drop,
};
