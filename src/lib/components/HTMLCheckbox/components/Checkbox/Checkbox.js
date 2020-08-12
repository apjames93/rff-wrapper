import React from 'react';
import PropTypes from 'prop-types';

export const Checkbox = ({
  label,
  field,
  flexDirection,
  disabled,
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
      disabled={disabled}
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
   * If true, the input element will be disabled.
   */
  disabled: PropTypes.bool,

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
  disabled: false,
};
