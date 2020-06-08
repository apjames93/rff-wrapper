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
  passProps,
}) => (
  <RFFField
    type="radio"
    name={name}
    value={value}
    passProps={passProps}
  >
    <FormControlLabel
      control={(
        <input
          data-testid="HTMLRadio"
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
  passProps: field => ({
    id: field.input.name,
    value: field.input.value,
    checked: field.input.checked,
    onChange: field.input.onChange,
  }),
  label: '',
  disabled: false,
  value: null,
  labelPlacement: 'end',
};
