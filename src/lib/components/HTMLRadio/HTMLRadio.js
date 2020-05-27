import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel } from '@material-ui/core';
import RFFField from '../RFFField/RFFField';

export const HTMLRadio = ({
  name,
  value,
  disabled,
  label,
  labelPlacement,
}) => (
  <RFFField
    type="radio"
    name={name}
    value={value}
    passProps={field => ({
      id: field.input.name,
      value: field.input.value,
      checked: field.input.checked,
      onChange: () => {
        field.input.onChange(field.input.value);
      },
    })}
  >
    <FormControlLabel
      control={(
        <input
          type="radio"
          disabled={disabled}
        />
      )}
      label={label}
      value={value}
      labelPlacement={labelPlacement}
    />
  </RFFField>
);

export default HTMLRadio;

HTMLRadio.propTypes = {
  /**
   * The name of your field. Field values may be deeply nested using dot-and-bracket syntax.
   */
  name: PropTypes.string.isRequired,
  /**
   * The label content.
   */
  label: PropTypes.node,
  /**
   * If true, the input element will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * A DOMString representing the value of the radio button.
   */
  value: PropTypes.string,
  /**
   * MUI Props: 'bottom' | 'end' | 'start' | 'top'
   * The position of the label.
   */
  labelPlacement: PropTypes.string,
};

HTMLRadio.defaultProps = {
  label: '',
  disabled: false,
  value: null,
  labelPlacement: 'end',
};
