import React from 'react';
import PropTypes from 'prop-types';

export const HTMLInput = ({
  placeholder,
  disabled,
  required,
  size,
  maxLength,
  label,
  field,
}) => (
  <label htmlFor={field.input.name}>
    <input
      {...field.input}
      id={field.input.name}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      size={size}
      maxLength={maxLength}
    />
    {label}
  </label>
);

export default HTMLInput;

HTMLInput.propTypes = {
  // passed down from RFFField
  field: PropTypes.shape({
    input: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),

  /**
   * Specifies a short hint that describes the expected value of an <input> element
   */
  placeholder: PropTypes.string,
  /**
   * If true, the input element will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Specifies that an input field must be filled out before submitting the form
   */
  required: PropTypes.bool,
  /**
   * Specifies the width, in characters, of an <input> element
   */
  size: PropTypes.number,
  /**
   * Maximum length (number of characters) of value
   */
  maxLength: PropTypes.number,
  /**
   * label for input
   */
  label: PropTypes.string,
};

HTMLInput.defaultProps = {
  field: {},
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
  required: false,
  size: 0,
  maxLength: null,
};
