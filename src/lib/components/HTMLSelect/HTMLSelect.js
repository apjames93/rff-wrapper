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
  initialValue,
  passProps,
}) => (
  <RFFField
    name={name}
    label={label}
    initialValue={initialValue}
    passProps={passProps}
  >
    <FormControlLabel
      control={(
        <select name={name} id={name}>
          {options.map((item, i) => {
            const itemVal = item instanceof Object ? item[displayKey] : item;
            const stringifyVal = item instanceof Object ? JSON.stringify(item) : item;
            return (
              <option value={stringifyVal} key={i}>
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
  /**
   * props to pass to react final form field in call back have access to field as first arg
   */
  passProps: PropTypes.func,
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
  /**
   * The initial value for the field. This value will be used to calculate dirty and pristine by comparing it to the current value of the field. If you want field to be dirty upon creation, you can set one value with initialValue and set the value of the field with defaultValue.
   * The value given here will override any initialValues given to the entire form.
   */
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HTMLSelect.defaultProps = {
  passProps: field => ({
    name: field.input.name,
    value: field.input.value,
    onChange: field.input.onChange,
    label: (field.input.label || field.input.name),
    error: (field.meta.error && field.meta.touched),
  }),
  label: '',
  displayKey: '',
  labelPlacement: 'top',
  initialValue: undefined,
};
