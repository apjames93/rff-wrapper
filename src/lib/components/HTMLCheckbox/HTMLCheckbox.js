import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel } from '@material-ui/core';
import RFFField from '../RFFField/RFFField';

export const HTMLCheckbox = ({
  name,
  label,
  labelPlacement,
}) => (
  <RFFField
    type="checkbox"
    name={name}
    passProps={field => ({
      id: field.input.name,
      value: field.input.value,
      onChange: field.input.onChange,
    })}
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
  label: '',
  labelPlacement: 'end',
};
