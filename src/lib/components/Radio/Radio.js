import React from 'react';
import PropTypes from 'prop-types';
import { Radio as MuiRadio, FormControlLabel } from '@material-ui/core';
// import { Radio, FormControlLabel } from '@material-ui/core/Radio';

import MuiIcon from '../MUI/MuiIcon/MuiIcon';
import RFFField from '../RFFField/RFFField';

export const Radio = ({
  checkedIcon,
  color,
  disabled,
  disableRipple,
  icon,
  name,
  size,
  value,
  label,
}) => (
  <RFFField
    type='radio'
    name={name}
    value={value}
    // passProps={(field) => {
    //   console.log(field)
    //   // checked: field.input.checked,
    // }}
    passProps={(field) => ({
      id: field.input.name,
      value: field.input.value,
      checked: field.input.checked,
      onChange: () => {
        console.log('hit')
        field.input.onChange(field.input.value)
      },
    })}
  >
    <FormControlLabel
      control={
        <MuiRadio
          // checkedIcon={checkedIcon?.iconName && <MuiIcon {...checkedIcon} />}
          color={color}
          disabled={disabled}
          disableRipple={disableRipple}
          // icon={icon?.iconName && <MuiIcon {...icon} />}
          size={size}
        />
      }
      value={value}
      label={label}
      // labelPlacement='bottom'
    />
  </RFFField>
);

export default Radio;

Radio.propTypes = {
  /**
   * Name attribute of the input element.
   */
  name: PropTypes.string.isRequired,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: PropTypes.node,
  /**
   * Mui Props: 'default' | 'primary' | 'secondary'
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: PropTypes.node,
  /**
   * If true, the radio will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * If true, the ripple effect will be disabled.
   */
  disableRipple: PropTypes.bool,
  /**
   * The icon to display when the component is unchecked.
   */
  icon: PropTypes.node,
  /**
   * Mui Props: 'small' | 'medium'
   * The size of the radio. small is equivalent to the dense radio styling.
   */
  size: PropTypes.string,
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: PropTypes.string,
};

Radio.defaultProps = {
  // mui
  color: 'secondary',
  checkedIcon: null,
  disabled: false,
  disabledRipple: false,
  icon: null,
  size: 'medium',
  value: null,
};
