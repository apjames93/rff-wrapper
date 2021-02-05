import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

export const HTMLSubmit = ({
  submitting,
  buttonText,
}) => {
  // HOTFIX rff-wrapper is not passing submitting as a bool but a string of "true" || "false"
  const submit = !!(submitting && submitting !== 'false');

  return (
    <>
      {submit && (<CircularProgress />)}
      {!submit && (
      <button type="submit">
        {buttonText}
      </button>
      )}
    </>
  );
};

export default HTMLSubmit;

HTMLSubmit.propTypes = {
  /** passed down from React Final Form when submitting */
  submitting: PropTypes.bool,
  /** button text */
  buttonText: PropTypes.string,
};

HTMLSubmit.defaultProps = {
  buttonText: 'Submit',
  submitting: false,
};
