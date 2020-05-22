import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import RFFField from '../RFFField/RFFField';
/**
 * Input
*/

export const MuiInput = ({
// mui
  name,
  autoComplete,
  autoFocus,
  color,
  disabled,
  fullWidth,
  helperText,
  label,
  margin,
  multiline,
  placeholder,
  rows,
  rowsMax,
  size,
  type,
  variant,
}) => (
  <RFFField
    name={name}
    label={label}
    passProps={field => ({
      name: field.input.name,
      value: field.input.value,
      onChange: field.input.onChange,
      label: (label || field.input.name),
      error: (field.meta.error && field.meta.touched),
    })}
  >
    <TextField
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      color={color}
      disabled={disabled}
      fullWidth={fullWidth}
      helperText={helperText}
      margin={margin}
      multiline={multiline}
      placeholder={placeholder}
      rows={rows}
      rowsMax={rowsMax}
      size={size}
      type={type}
      variant={variant}
    />
  </RFFField>
);

export default MuiInput;

MuiInput.propTypes = {

  /**
   * The name of your field. Field values may be deeply nested using dot-and-bracket syntax.
   */
  name: PropTypes.string.isRequired,
  /**
 * The label content.
 */
  label: PropTypes.node,

  /**
 * material-ui. PROPS
 */
  /**
 * Type of the input element. It should be a valid [HTML5](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) input type.
 */
  type: PropTypes.string,
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
 * If true, a textarea element will be rendered instead of an input.
 */
  multiline: PropTypes.bool,
  /**
 * The short hint displayed in the input before the user enters a value.
 */
  placeholder: PropTypes.string,
  /**
 * Number of rows to display when multiline option is set to true.
 */
  rows: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
 * Maximum number of rows to display when multiline option is set to true.
 */
  rowsMax: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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

MuiInput.defaultProps = {
  // mui
  label: '',
  type: 'text',
  autoComplete: '',
  autoFocus: false,
  color: 'primary',
  disabled: false,
  fullWidth: false,
  helperText: null,
  margin: 'normal',
  multiline: false,
  placeholder: '',
  rows: '',
  rowsMax: '',
  size: 'medium',
  variant: 'standard',
};
