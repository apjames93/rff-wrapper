import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import MuiIcon from '../MUI/MuiIcon/MuiIcon';
import RFFField from '../RFFField/RFFField';

/**
 * CheckBox
*/

export const handleOnChange = (value, fields, index) => {
  if (!index && typeof index !== 'number') return fields.push(value);
  return fields.remove(index);
};

export const getIndex = (fieldValue, value) => {
  const parseFieldValue = typeof fieldValue === 'object' ? JSON.stringify(fieldValue) : fieldValue;
  const parseCheckBoxValue = typeof value === 'object' ? JSON.stringify(value) : value;
  return parseFieldValue === parseCheckBoxValue;
};

export const assignIndex = (fields, value) => {
  const index = fields.value.findIndex(fieldValue => getIndex(fieldValue, value));
  if (index >= 0) return index;
  return false;
};


export const CheckBoxArray = ({
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
  value,
  fields,
  callback,
}) => (
  <RFFField
    type="checkbox"
    name={name}
    passProps={(field) => {
      const index = assignIndex(fields, value);
      return ({
        id: field.input.name,
        value,
        checked: typeof index === 'number',
        onChange: () => {
          if (callback) callback(fields);
          else handleOnChange(value, fields, index);
        },
      });
    }
    }
  >
    <FormControlLabel
      control={(
        <Checkbox
          value={value}
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
export default CheckBoxArray;

CheckBoxArray.propTypes = {
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
   * If true, the component appears indeterminate. This does not set the native input element to indeterminate due to inconsistent behavior across browsers. However, we set a data-indeterminate attribute on the input.
   */
  indeterminate: PropTypes.bool,
  /**
     * The size of the checkbox. small is equivalent to the dense checkbox styling.
     * mui prop: 'medium'| 'small' | 'medium'
     */
  size: PropTypes.string,
};

CheckBoxArray.defaultProps = {
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