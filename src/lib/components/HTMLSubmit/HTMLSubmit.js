import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';

export const HTMLSubmit = ({
  submitting,
  buttonText,
}) => (
  <>
    {submitting && (<CircularProgress />)}
    {!submitting && (
      <button type="submit">
        {buttonText}
      </button>
    )}
  </>
);

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
