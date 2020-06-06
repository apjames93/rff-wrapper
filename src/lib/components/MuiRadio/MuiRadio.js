import React from 'react';
import PropTypes from 'prop-types';
import { Radio, FormControlLabel } from '@material-ui/core';
import MuiIcon from '../MUI/MuiIcon/MuiIcon';
import RFFField from '../RFFField/RFFField';

export const MuiRadio = ({
  checkedIcon,
  color,
  disabled,
  disableRipple,
  icon,
  name,
  size,
  value,
  label,
  labelPlacement,
  passProps,
}) => {
  let radioProps;
  if (checkedIcon && icon) {
    radioProps = {
      checkedIcon: <MuiIcon {...checkedIcon} />, color, disabled, disableRipple, size, icon: <MuiIcon {...icon} />,
    };
  } else if (checkedIcon) {
    radioProps = {
      checkedIcon: <MuiIcon {...checkedIcon} />, color, disabled, disableRipple, size,
    };
  } else if (icon) {
    radioProps = {
      color, disabled, disableRipple, size, icon: <MuiIcon {...icon} />,
    };
  } else {
    radioProps = {
      color, disabled, disableRipple, size,
    };
  }

  return (
    <RFFField
      type="radio"
      name={name}
      value={value}
      passProps={passProps}
    >
      <FormControlLabel
        data-testid="MuiRadioID"
        control={(
          <Radio
            {...radioProps}
          />
        )}
        value={value}
        label={label}
        labelPlacement={labelPlacement}
      />
    </RFFField>
  );
};

export default MuiRadio;

MuiRadio.propTypes = {
  /**
   * props to pass to react final form field in call back have access to field as first arg
   */
  passProps: PropTypes.func,
  /**
   * Name attribute of the input element.
   */
  name: PropTypes.string.isRequired,
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
     * mui prop: ["default","primary","secondary"]
     * The color of the component.
     * It supports those theme colors that make sense for this component.
     * */
    color: PropTypes.string,
    /**
     * mui prop: 'default' | 'small'| 'inherit'| 'large'
     * The fontSize applied to the icon.
     * Defaults to 24px, but can be configure to inherit font size.
     * */
    fontSize: PropTypes.string,
  }),
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
  icon: PropTypes.shape({
    /**
     * any icon from [material.io](https://material.io/resources/icons/?style=baseline)
     * ex star | alarm_off
     * */
    iconName: PropTypes.string.isRequired,
    /**
     * mui prop: "inherit", "primary", "secondary", "action", "error", "disabled"
     * The color of the component.
     * It supports those theme colors that make sense for this component.
     * */
    color: PropTypes.string,
    /**
     * mui prop: 'default' | 'small'| 'inherit'| 'large'
     * The fontSize applied to the icon.
     * Defaults to 24px, but can be configure to inherit font size.
     * */
    fontSize: PropTypes.string,
  }),
  /**
   * Mui Props: 'small' | 'medium'
   * The size of the radio. small is equivalent to the dense radio styling.
   */
  size: PropTypes.string,
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: PropTypes.string.isRequired,
  /** The label content.
   */
  label: PropTypes.string,
  /**
   * MUI Props: 'bottom' | 'end' | 'start' | 'top'
   * The position of the label.
   */
  labelPlacement: PropTypes.string,
};

MuiRadio.defaultProps = {
  passProps: field => ({
    id: field.input.name,
    value: field.input.value,
    checked: field.input.checked,
    onChange: field.input.onChange,
  }),
  // mui
  color: 'secondary',
  checkedIcon: null,
  disabled: false,
  disableRipple: false,
  icon: null,
  size: 'medium',
  label: '',
  labelPlacement: 'end',
};
