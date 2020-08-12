import React from 'react';
import PropTypes from 'prop-types';
import { Radio, FormControlLabel } from '@material-ui/core';
import MuiIcon from '../MuiIcon/MuiIcon';
import RFFField from '../RFFField/RFFField';

const passPropsDefault = field => ({
  id: field.input.name,
  value: field.input.value,
  checked: field.input.checked,
  onChange: field.input.onChange,
});

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
  // rff
  afterSubmit,
  allowNull,
  beforeSubmit,
  data,
  defaultValue,
  format,
  formatOnBlur,
  initialValue,
  isEqual,
  parse,
  subscription,
  validate,
  validateFields,
}) => {
  let radioProps = {
    color,
    disabled,
    disableRipple,
    size,
  };

  if (checkedIcon) radioProps = { checkedIcon: <MuiIcon {...checkedIcon} /> };
  if (icon) radioProps = { icon: <MuiIcon {...icon} /> };

  return (
    <RFFField
      type="radio"
      name={name}
      value={value}
      passProps={passProps}
      afterSubmit={afterSubmit}
      allowNull={allowNull}
      beforeSubmit={beforeSubmit}
      data={data}
      defaultValue={defaultValue}
      format={format}
      formatOnBlur={formatOnBlur}
      initialValue={initialValue}
      isEqual={isEqual}
      parse={parse}
      subscription={subscription}
      validate={validate}
      validateFields={validateFields}
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
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.shape()]).isRequired,
  /** The label content.
   */
  label: PropTypes.string,
  /**
   * MUI Props: 'bottom' | 'end' | 'start' | 'top'
   * The position of the label.
   */
  labelPlacement: PropTypes.string,
  /**
   * REACT FINAL FORM PROPS
   */
  /**
   * A callback to notify fields after submission has completed successfully.
   * */
  afterSubmit: PropTypes.func,
  /**
   * By default, if your value is null,
   <Field/> will convert it to '', to ensure controlled inputs.
    * But if you pass true to allowNull,
    <Field/> will give you a null value.
    */
  allowNull: PropTypes.bool,
  /**
   * A function to call just before calling onSubmit.
    If beforeSubmit returns false, the submission will be aborted.
    If one of your fields returns false on beforeSubmit,
    other fields may not have their beforeSubmit called,
    as the submission is aborted on the first one that returns false.
    */
  beforeSubmit: PropTypes.func,
  /**
   * Initial state for arbitrary values to be placed by mutators.
   */
  data: PropTypes.shape(),
  /**
   * Optional. ⚠️ You probably want initialValue! ⚠️
    * The value of the field upon creation.
      This value is only needed if you want your field be dirty
      upon creation (i.e. for its value to be different from its initial value).
    */
  defaultValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * A function that takes the value from the form values
    and the name of the field and formats the value to give
    to the input. Common use cases include converting javascript Date values into
    a localized date string. Almost always used in conjunction with parse.
  * Note: If you would like to disable the default behavior of converting undefined to '',
    you can pass an identity function, v => v, to format. If you do this,
    making sure your inputs are "controlled" is up to you.
  */
  format: PropTypes.func,
  /**
   * If true, the format function will only be called when the field is blurred.
    If false, format will be called on every render.
  */
  formatOnBlur: PropTypes.bool,
  /**
   * The initial value for the field. This value will be used to
    calculate dirty and pristine by comparing it to the current value of the field.
    If you want field to be dirty upon creation, you can set one value with initialValue
    and set the value of the field with defaultValue.
  * The value given here will override any initialValues given to the entire form.
  */
  initialValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  /**
   * Optional. Defaults to ===.
  * A function to determine if two values are equal.
  */
  isEqual: PropTypes.func,
  /**
   * A function that takes the value from the input and name of the field and
    converts the value into the value you want stored as this field's value in the form.
    Common usecases include converting strings into Numbers or parsing localized dates into actual
    javascript Date objects. Almost always used in conjuction with format.
    * Note: If would like to override the default behavior of converting '' to undefined,
    you can pass an identity function, v => v, to parse,
    thus allowing you to have form values of ''.
    */
  parse: PropTypes.func,
  /**
   * An object of the parts of FieldState to subscribe to.
    If a subscription is provided, the <Field/> will only rerender when those parts
    of field state change.
  * If no subscription is provided, it will default to subscribing to all field state changes.
    i.e. <Field/> will rerender whenever any part of the field state changes.
  */
  subscription: PropTypes.shape(),
  /**
 * A function that takes the field value, all the values of the form and the meta data
  about the field and returns an error if the value is invalid, or undefined if the value is valid.
  * ⚠️ IMPORTANT ⚠️ – By default, in order to allow inline fat-arrow validation functions,
  the field will not rerender if you change your validation
    function to an alternate function that has a different behavior.
    If you need your field to rerender with a new validation function,
  you will need to update another prop on the Field, such as key.
  See the following sandbox for an example:
  */
  validate: PropTypes.func,
  /**
       * An array of field names to validate when this field changes.
      If undefined, every field will be validated when this one changes;
      if [], only this field will have its field-level validation function called when it changes;
      if other field names are specified,
      those fields and this one will be validated when this field changes.
      * ⚠️ IMPORTANT ⚠️ – By default,
      in order to allow inline [] syntax,
      the field will not rerender if you change your validateFields prop changes.
      If you need your field to rerender with a new validateFields setting,
      you will need to update another prop on the Field, such as key.
      */
  validateFields: PropTypes.string,
};

MuiRadio.defaultProps = {
  passProps: passPropsDefault,
  // mui
  color: 'secondary',
  checkedIcon: null,
  disabled: false,
  disableRipple: false,
  icon: null,
  size: 'medium',
  label: '',
  labelPlacement: 'end',
  // rff
  afterSubmit: undefined,
  allowNull: false,
  beforeSubmit: undefined,
  data: {},
  defaultValue: undefined,
  format: undefined,
  formatOnBlur: false,
  initialValue: undefined,
  isEqual: undefined,
  parse: undefined,
  subscription: undefined,
  validate: undefined,
  validateFields: undefined,
};
