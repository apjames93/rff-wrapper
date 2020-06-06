import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import MuiIcon from '../MUI/MuiIcon/MuiIcon';
import RFFField from '../RFFField/RFFField';

/**
 * MuiCheckbox
*/

export const MuiCheckbox = ({
  name,
  // mui
  disabled,
  checkedIcon,
  color,
  disableRipple,
  icon,
  indeterminate,
  size,
  label,
  passProps,
}) => (
  <RFFField
    type="checkbox"
    name={name}
    passProps={passProps}
  >
    <FormControlLabel
      control={(
        <Checkbox
          checkedIcon={checkedIcon?.iconName && <MuiIcon {...checkedIcon} />}
          color={color}
          disabled={disabled}
          disableRipple={disableRipple}
          icon={icon?.iconName && <MuiIcon {...icon} />}
          indeterminate={indeterminate}
          size={size}
        />
        )}
      label={label}
    />
  </RFFField>

);

export default MuiCheckbox;

MuiCheckbox.propTypes = {
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
 * material-ui. PROPS
 */

  /**
  * The icon to display when the component is checked.
  */
  checkedIcon: PropTypes.shape({
    /**
      * any icon from [material.io](https://material.io/resources/icons/?style=baseline)
      * ex star | alarm_off
      * */
    iconName: PropTypes.string.isRequired,
    /**
   * mui prop: "inherit", "primary", "secondary", "action", "error", "disabled"
   * The color of the component. It supports those theme colors that make sense for this component.
   * */
    color: PropTypes.string,
    /**
   * mui prop: 'default' | 'small'| 'inherit'| 'large'
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * */
    fontSize: PropTypes.string,
  }),
  /**
 * The color of the component. It supports those theme colors that make sense for this component.
 * mui prop: 'default' | 'primary' | 'secondary'
 */
  color: PropTypes.string,
  /**
 * If true, the checkbox will be disabled.
 */
  disabled: PropTypes.bool,
  /**
 * If true, the ripple effect will be disabled.
 */
  disableRipple: PropTypes.bool,

  /**
 * The icon to display when the component is unchecked.
 */
  icon: PropTypes.shape({
    /**
      * any icon from [material.io](https://material.io/resources/icons/?style=baseline)
      * ex star | alarm_off
      * */
    iconName: PropTypes.string.isRequired,
    /**
   * mui prop: "inherit", "primary", "secondary", "action", "error", "disabled"
   * The color of the component. It supports those theme colors that make sense for this component.
   * */
    color: PropTypes.string,
    /**
   * mui prop: 'default' | 'small'| 'inherit'| 'large'
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * */
    fontSize: PropTypes.string,
  }),
  /**
   * If true, the component appears indeterminate.
   * This does not set the native input element to indeterminate
   * due to inconsistent behavior across browsers.
   * However, we set a data-indeterminate attribute on the input.
   */
  indeterminate: PropTypes.bool,
  /**
     * The size of the checkbox. small is equivalent to the dense checkbox styling.
     * mui prop: 'medium'| 'small'
     */
  size: PropTypes.string,
};

MuiCheckbox.defaultProps = {
  passProps: field => ({
    id: field.input.name,
    value: field.input.value,
    onChange: field.input.onChange,
  }),
  // mui
  label: '',
  checkedIcon: null,
  color: 'secondary',
  disabled: false,
  disableRipple: false,
  icon: null,
  indeterminate: false,
  size: 'medium',
};
