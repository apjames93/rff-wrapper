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
  type,
  passProps,
}) => (
  <RFFField
    name={name}
    label={label}
    passProps={passProps}
    type={type}
  >
    <input
      type={type}
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
   * props to pass to react final form field
   */
  passProps: PropTypes.func,
  /**
 * Type of the input element. It should be a valid [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) input type.
 */
  type: PropTypes.string,
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
  passProps: field => ({
    name: field.input.name,
    value: field.input.value,
    onChange: (e) => {
      let { value } = e.target;
      if (field.input.type === 'number') {
        value = parseFloat(value);
      }
      field.input.onChange(value);
    },
    label: (field.inputlabel || field.input.name),
    error: (field.meta.error && field.meta.touched),
  }),
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
  required: false,
  size: 0,
  maxLength: null,
};
