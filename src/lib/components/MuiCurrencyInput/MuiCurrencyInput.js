import React from 'react';
import PropTypes from 'prop-types';
import CurrencyTextField from '@unicef/material-ui-currency-textfield';
import RFFField from '../RFFField/RFFField';

/**
 * Mui Currency TextFeild Input
*/

export const customPropName = (props, propName, componentName) => {
  if (props.fields === undefined && !props.name) {
    return new Error(
      `${componentName}: ${propName} requires to have name value if fields are not passed down. Please wrap this in RFFField Array or add a name prop.`,
    );
  }
  return undefined;
};

export const MuiCurrencyInput = ({
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
  passProps,
  // Currency TextField
  currencySymbol,
  decimalCharacter,
  decimalPlaces,
  decimalPlacesShownOnBlur,
  decimalPlacesShownOnFocus,
  maximumValue,
  minimumValue,
  onBlur,
  onChange,
  onFocus,
  onKeyDown,
  onKeyUp,
}) => (
  <RFFField
    name={name}
    passProps={passProps}
    type={type}
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
    <CurrencyTextField
      label={label}
      data-testid="mui-currency-input"
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      color={color}
      currencySymbol={currencySymbol}
      decimalCharacter={decimalCharacter}
      decimalPlaces={decimalPlaces}
      decimalPlacesShownOnBlur={decimalPlacesShownOnBlur}
      decimalPlacesShownOnFocus={decimalPlacesShownOnFocus}
      disabled={disabled}
      fullWidth={fullWidth}
      helperText={helperText}
      maximumValue={maximumValue}
      minimumValue={minimumValue}
      onBlur={onBlur}
      onChange={onChange}
      onFocus={onFocus}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
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

export default MuiCurrencyInput;

MuiCurrencyInput.propTypes = {
  /**
   * props to pass to react final form field in call back have access to field as first arg
   */
  passProps: PropTypes.func,
  /**
   * The name of your field. Field values may be deeply nested using dot-and-bracket syntax.
   */
  name(props, propName, componentName) {
    return customPropName(props, propName, componentName);
  },
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
   * A function that takes the value from the form values and the name of the field and
    formats the value to give to the input.
   Common use cases include converting javascript Date values into a localized date string.
   Almost always used in conjunction with parse.
  * Note: If you would like to disable the default behavior of converting undefined to '',
  you can pass an identity function, v => v, to format.
  If you do this, making sure your inputs are "controlled" is up to you.
  */
  format: PropTypes.func,
  /**
   * If true, the format function will only be called when the field is blurred.
   If false, format will be called on every render.
   */
  formatOnBlur: PropTypes.bool,
  /**
   * The initial value for the field. This value will be used to calculate dirty
   and pristine by comparing it to the current value
    of the field. If you want field to be dirty upon creation,
    you can set one value with initialValue and set the value of the field with defaultValue.
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
   * A function that takes the value from the input and name of the field and converts
   the value into the value you want stored as this field's value in the form.
   Common usecases include converting strings into Numbers or parsing localized
   dates into actual javascript Date objects.
   * Almost always used in conjuction with format.
  * Note: If would like to override the default behavior of converting '' to undefined,
  you can pass an identity function, v => v, to parse, thus allowing you to have form values of ''.
  */
  parse: PropTypes.func,
  /**
 * An object of the parts of FieldState to subscribe to. If a subscription is provided,
 * the <Field/> will only rerender when those parts of field state change.
  * If no subscription is provided, it will default to subscribing to all field state changes.
  i.e. <Field/> will rerender whenever any part of the field state changes.
  */
  subscription: PropTypes.shape(),
  /**
  * A function that takes the field value, all the values of the form and the meta data
   about the field and returns an error if the value is invalid, or undefined if the value is valid.
  * ⚠️ IMPORTANT ⚠️ – By default, in order to allow inline fat-arrow validation functions,
  the field will not rerender if you change your validation function to an alternate function that
   has a different behavior.
  If you need your field to rerender with a new validation function,
  you will need to update another prop on the Field, such as key.
   See the following sandbox for an example:
  */
  validate: PropTypes.func,
  /**
   * An array of field names to validate when this field changes.
  If undefined, every field will be validated when this one changes;
  if [], only this field will have its field-level validation function called when it changes;
  if other field names are specified, those fields and this one will be validated
   when this field changes.
  * ⚠️ IMPORTANT ⚠️ – By default,
  in order to allow inline [] syntax,
  the field will not rerender if you change your validateFields prop changes.
  If you need your field to rerender with a new validateFields setting,
  you will need to update another prop on the Field, such as key.
  */
  validateFields: PropTypes.string,
  /**
   * Defines the currency symbol string.
   */
  currencySymbol: PropTypes.string,
  /**
   * Defines what decimal separator character is used.
   */
  decimalCharacter: PropTypes.string,
  /**
   *
    Defines the default number of decimal places to show on the formatted value.
   */
  decimalPlaces: PropTypes.number,
  /**
   * Defines how many decimal places should be visible when the element is unfocused null.
   */
  decimalPlacesShownOnBlur: PropTypes.number,
  /**
   * Defines how many decimal places should be visible when the element has the focus.
   */
  decimalPlacesShownOnFocus: PropTypes.number,
  /**
   * Maximum value that can be entered.
   */
  maximumValue: PropTypes.string,
  /**
   * Minimum value that can be entered.
   */
  minimumValue: PropTypes.string,
  /**
   * Callback fired on blur.
   */
  onBlur: PropTypes.func,
  /**
   * Callback fired when the value is changed.
   */
  onChange: PropTypes.func,
  /**
   * Callback fired when focused on element.
   */
  onFocus: PropTypes.func,
  /**
   * Callback fired on key press.
   */
  onKeyDown: PropTypes.func,
  /**
   * Callback fired on key press.
   */
  onKeyUp: PropTypes.func,
};

MuiCurrencyInput.defaultProps = {
  passProps: undefined,
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
  name: undefined,
  // Currency Input
  currencySymbol: '$',
  decimalCharacter: '.',
  decimalPlaces: 2,
  decimalPlacesShownOnBlur: 2,
  decimalPlacesShownOnFocus: 2,
  maximumValue: '10000000000000',
  minimumValue: '-10000000000000',
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  onKeyDown: undefined,
  onKeyUp: undefined,
};
