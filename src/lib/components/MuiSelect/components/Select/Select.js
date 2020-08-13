import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';

/**
 * Select
 * Render a Select element while passing the Input element to Select as input parameter.
 * ⚠️ IMPORTANT ⚠️ – you must pass the options of the select as children.
*/

export const Select = ({
  options,
  displayKey,
  // mui
  autoComplete,
  autoFocus,
  color,
  disabled,
  fullWidth,
  helperText,
  label,
  margin,
  placeholder,
  size,
  variant,
  field,
}) => {
  const [textFieldvalue, setTextFieldValue] = useState('');

  const inputValue = (option) => {
    const stringifyValue = JSON.stringify(field.input.value);
    const stringifyOption = JSON.stringify(option);
    if (
      stringifyValue === stringifyOption
      && option !== textFieldvalue
    ) {
      return setTextFieldValue(option);
    }
  };

  return (
    <TextField
      {...field.input}
      select
      type="select"
      label={label}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      color={color}
      disabled={disabled}
      fullWidth={fullWidth}
      helperText={helperText}
      margin={margin}
      placeholder={placeholder}
      size={size}
      variant={variant}
      value={textFieldvalue}
    >
      {options.map((option, i) => {
        inputValue(option);
        return (
          <MenuItem
            key={i}
            value={option}
          >
            {option instanceof Object ? option[displayKey] : option}
          </MenuItem>
        );
      })}
    </TextField>
  );
};
export default Select;

Select.propTypes = {
  // passed down from RFFField
  field: PropTypes.shape({
    input: PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.shape({}),
        PropTypes.string,
        PropTypes.number,
      ]),
    }),
  }),
  /** options for select */
  options: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({}),
      PropTypes.string,
      PropTypes.number,
    ]),
  ).isRequired,
  /**
   * If passing an array of objects to the select
    then use displayKey to show the key value in the select
   * */
  displayKey: PropTypes.string,
  /**
 * The label content.
 */
  label: PropTypes.node,
  /**
 * material-ui. PROPS
 */
  /**
 * This prop helps users to fill forms faster, especially on mobile devices. The name can be confusing, as it's more like an autofill. You can learn more about it following the [specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
 */
  autoComplete: PropTypes.string,
  /**
 * If true, the input element will be focused during the first mount.
 */
  autoFocus: PropTypes.bool,
  /**
 * The color of the component. It supports those theme colors that make sense for this component.
 * mui prop: 'primary' | 'secondary'
 */
  color: PropTypes.string,
  /**
 * If true, the input element will be disabled.
 */
  disabled: PropTypes.bool,
  /**
 * If true, the input will take up the full width of its container.
 */
  fullWidth: PropTypes.bool,
  /**
 * The helper text content.
 */
  helperText: PropTypes.node,

  /**
 *  If dense or normal, will adjust vertical spacing of this and contained components.
 * ex 'dense' | 'none' | 'normal'
 */
  margin: PropTypes.string,

  /**
 * The short hint displayed in the input before the user enters a value.
 */
  placeholder: PropTypes.string,
  /**
 * The size of the text field.
 * ex: 'medium'| 'small'
 */
  size: PropTypes.string,
  /**
 * The variant to use
 * mui prop: 'filled'| 'outlined'| 'standard'
 */
  variant: PropTypes.string,
};

Select.defaultProps = {
  field: {},
  displayKey: '',
  // mui
  label: '',
  autoComplete: '',
  autoFocus: false,
  color: 'primary',
  disabled: false,
  fullWidth: false,
  helperText: null,
  margin: 'normal',
  placeholder: '',
  size: 'medium',
  variant: 'standard',
};
