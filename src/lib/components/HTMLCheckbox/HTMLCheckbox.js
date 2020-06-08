import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel } from '@material-ui/core';
import RFFField from '../RFFField/RFFField';

export const HTMLCheckbox = ({
  name,
  label,
  labelPlacement,
  passProps,
}) => (
  <RFFField
    type="checkbox"
    name={name}
    passProps={passProps}
  >
    <FormControlLabel
      control={(
        <input type="checkbox" />
      )}
      label={label}
      labelPlacement={labelPlacement}
    />
  </RFFField>
);

export default HTMLCheckbox;

HTMLCheckbox.propTypes = {
  /**
   * props to pass to react final form field in call back have access to field as first arg
   */
  passProps: PropTypes.func,
  /**
   * The name of your field. Field values may be deeply nested using dot-and-bracket syntax.
   */
  name: PropTypes.string.isRequired,
  /**
   * The label content.
   */
  label: PropTypes.string,
  /**
   * MUI Props: 'bottom' | 'end' | 'start' | 'top'
   * The position of the label.
   */
  labelPlacement: PropTypes.string,
};

HTMLCheckbox.defaultProps = {
  passProps: field => ({
    id: field.input.name,
    value: field.input.value,
    onChange: field.input.onChange,
  }),
  label: '',
  labelPlacement: 'end',
};
