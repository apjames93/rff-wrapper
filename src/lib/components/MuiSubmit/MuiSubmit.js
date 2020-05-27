import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import MuiIcon from '../MUI/MuiIcon/MuiIcon';

/**
   * Submit Button For Form
   * MuiSubmit Button For Form
*/

export const MuiSubmit = ({
  submitting,
  color,
  disableElevation,
  disableFocusRipple,
  disableRipple,
  endIcon,
  fullWidth,
  size,
  startIcon,
  variant,
  buttonText,
}) => (
  <>
    {submitting && (
    <CircularProgress />
    )}
    {!submitting && (
    <Button
      type="submit"
      color={color}
      disableElevation={disableElevation}
      disableFocusRipple={disableFocusRipple}
      disableRipple={disableRipple}
      endIcon={endIcon ? (
        <MuiIcon iconName={endIcon} />
      ) : null}
      fullWidth={fullWidth}
      size={size}
      startIcon={startIcon ? (
        <MuiIcon iconName={startIcon} />
      ) : null}
      variant={variant}
      data-testid="Button"
    >
      {buttonText}
    </Button>
    )}
  </>
);

export default MuiSubmit;

MuiSubmit.propTypes = {
  /** passed down from React Final Form when submitting */
  submitting: PropTypes.bool,
  /** button text */
  buttonText: PropTypes.string,
  /**
     * mui prop: 'default'| 'inherit'| 'primary'| 'secondary'
     * The color of the component.
     * It supports those theme colors that make sense for this component.
     * */
  color: PropTypes.string,
  /**
     * mui prop: true | false
     * If true, no elevation is used.
     */
  disableElevation: PropTypes.bool,
  /**
     * mui prop: true | false
     * If true, the keyboard focus ripple will be disabled. disableRipple must also be true.
     */
  disableFocusRipple: PropTypes.bool,
  /**
     * mui prop: true | false
     * If true, the ripple effect will be disabled.
     * Without a ripple there is no styling for :focus-visible by default. Be sure to highlight the element by applying separate styles with the focusVisibleClassName.
     */
  disableRipple: PropTypes.bool,
  /**
     * name of Icon uses MuiIcon
     * Element placed after the children. renders icon
     * any icon from https://material.io/resources/icons/?style=baseline
     * */
  endIcon: PropTypes.string,
  /**
     * mui prop: true | false
     * If true, the button will take up the full width of its container.
     */
  fullWidth: PropTypes.bool,
  /**
     * mui prop: 'small'| 'medium'| 'large'
     * The size of the button. small is equivalent to the dense button styling.
     * */
  size: PropTypes.string,
  /**
     * name of Icon uses MuiIcon
     * Element placed before the children. renders icon
     * any icon from https://material.io/resources/icons/?style=baseline
     * */
  startIcon: PropTypes.string,
  /**
   * mui prop: 'text' |'outlined'| 'contained
   * The variant to use.
   * */
  variant: PropTypes.string,
};

MuiSubmit.defaultProps = {
  submitting: false,
  buttonText: 'submit',
  color: 'secondary',
  disableElevation: false,
  disableFocusRipple: false,
  disableRipple: false,
  endIcon: null,
  fullWidth: true,
  size: 'medium',
  startIcon: null,
  variant: 'text',
};
