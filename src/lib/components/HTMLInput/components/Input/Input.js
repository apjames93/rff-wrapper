import React from 'react';
import PropTypes from 'prop-types';

export const HTMLInput = ({
  name,
  placeholder,
  disabled,
  required,
  size,
  maxLength,
  type,
  label,
}) => (
  <>
    <label htmlFor={name}>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        size={size}
        maxLength={maxLength}
      />
      {label}
    </label>

  </>
);

export default HTMLInput;

HTMLInput.propTypes = {
  /**
 * Type of the input element. It should be a valid [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) input type.
 */
  type: PropTypes.string,
  /**
   * The name of your field. Field values may be deeply nested using dot-and-bracket syntax.
   */
  name: PropTypes.string.isRequired,
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
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
  required: false,
  size: 0,
  maxLength: null,
};
