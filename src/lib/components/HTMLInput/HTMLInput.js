import React from 'react';
import PropTypes from 'prop-types';
import RFFField from '../RFFField/RFFField';

export const HTMLInput = ({
  name,
  label,
  placeholder,
  disabled,
  required,
  size,
  maxLength,
}) => (
  <RFFField
    name={name}
    label={label}
    passProps={field => ({
      name: field.input.name,
      value: field.input.value,
      onChange: field.input.onChange,
      label: (label || field.input.name),
      error: (field.meta.error && field.meta.touched),
    })}
  >
    <input
      type="text"
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      size={size}
      maxLength={maxLength}
    />
  </RFFField>
);

export default HTMLInput;

HTMLInput.propTypes = {
  /**
   * The name of your field. Field values may be deeply nested using dot-and-bracket syntax.
   */
  name: PropTypes.string.isRequired,
  /**
   * The label content.
   */
  label: PropTypes.node,
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
};

HTMLInput.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,
  required: false,
  size: 0,
  maxLength: null,
};
