import React from 'react';
import PropTypes from 'prop-types';

export const Checkbox = ({
  label,
  field,
  flexDirection,
}) => (
  <label
    htmlFor={field.input.name}
    style={{
      display: 'flex',
      flexDirection,
    }}
  >
    {label}
    <input
      {...field.input}
      id={field.input.name}
    />
  </label>
);

export default Checkbox;

Checkbox.propTypes = {
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
   * Maximum length (number of characters) of value
   */
  maxLength: PropTypes.number,
  /**
   * label for input
   */
  label: PropTypes.string,
  /**
   * The flex-direction CSS property sets how flex items are placed in the flex container defining
   the main axis and the direction (normal or reversed).
   * https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
   */
  flexDirection: PropTypes.string,
};

Checkbox.defaultProps = {
  flexDirection: 'column',
  field: {},
  label: '',
  placeholder: '',
  disabled: false,
  required: false,
  maxLength: null,
};
