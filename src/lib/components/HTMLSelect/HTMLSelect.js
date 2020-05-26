import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel } from '@material-ui/core';
import RFFField from '../RFFField/RFFField';

export const HTMLSelect = ({
  name,
  label,
  options,
  displayKey,
  labelPlacement,
}) => (
  <RFFField
    name={name}
    label={label}
    passProps={field => ({
      name: field.input.name,
      value: field.input.value,
      onChange: (e) => {
        const { value } = e.target;
        const matchingVal = options.find((option) => {
          const itemVal = option instanceof Object ? option[displayKey] : option;
          return value === itemVal;
        });
        console.log(field.input.onChange);
        return field.input.onChange(value);
      },
      // onChange: field.input.onChange,
      label: (label || field.input.name),
      error: (field.meta.error && field.meta.touched),
    })}
  >
    <FormControlLabel
      control={(
        <select name={name} id={name}>
          {options.map((item, i) => {
            const itemVal = item instanceof Object ? item[displayKey] : item;
            if (i === 0) {
              return (
                <option value={itemVal} key={i} selected>
                  {itemVal}
                </option>
              );
            }
            return (
              <option value={itemVal} key={i} selected>
                {itemVal}
              </option>
            );
          })}
        </select>
      )}
      label={label}
      labelPlacement={labelPlacement}
    />
  </RFFField>
);

export default HTMLSelect;

HTMLSelect.propTypes = {
  /** options for select */
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.shape, PropTypes.string, PropTypes.number]),
  ).isRequired,
  /**
   * The name of your field. Field values may be deeply nested using dot-and-bracket syntax.
   */
  name: PropTypes.string.isRequired,
  /**
   * If passing an array of objects to the select
   * then use displayKey to show the key value in the select
  */
  displayKey: PropTypes.string,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * MUI Props: 'bottom' | 'end' | 'start' | 'top'
   * The position of the label.
   */
  labelPlacement: PropTypes.string,
};

HTMLSelect.defaultProps = {
  label: '',
  displayKey: '',
  labelPlacement: 'top',
};
