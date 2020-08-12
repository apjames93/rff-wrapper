import React from 'react';
import PropTypes from 'prop-types';

export const Select = ({
  displayKey,
  options,
  field,
  label,
  flexDirection,
}) => (
  <label
    htmlFor={field.input.name}
    style={{
      display: 'flex',
      flexDirection,
    }}
  >
    <span>{label}</span>
    <select
      {...field.input}
      name={field.input.name}
      id={field.input.name}
    >
      {options.map((item, i) => {
        const itmeInstanceofObject = item instanceof Object;
        const displayValue = itmeInstanceofObject ? item[displayKey] : item;
        const optionValue = itmeInstanceofObject ? JSON.stringify(item) : item;
        return (
          <option value={optionValue} key={i}>
            {displayValue}
          </option>
        );
      })}
    </select>
  </label>
);

export default Select;

Select.propTypes = {
  /**
   * The flex-direction CSS property sets how flex items are placed in the flex container defining
   the main axis and the direction (normal or reversed).
   * https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction
   */
  flexDirection: PropTypes.string,
  field: PropTypes.shape({
    input: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
  /** options for select */
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.shape, PropTypes.string, PropTypes.number, PropTypes.shape()]),
  ).isRequired,
  /**
   * If passing an array of objects to the select
   * then use displayKey to show the key value in the select
   */
  displayKey: PropTypes.string,
  label: PropTypes.string,
};

Select.defaultProps = {
  flexDirection: 'column',
  field: {},
  displayKey: '',
  label: '',
};
