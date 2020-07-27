import React from 'react';
import PropTypes from 'prop-types';
import ReactTelephoneInput from 'react-telephone-input';
import RFFField from '../RFFField/RFFField';
import flagsImagePath from '../../../images/flags.png';

const TelephoneInput = ({
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
  name,
  parse,
  subscription,
  value,
  validate,
  validateFields,
  // react-telephone-input
  defaultCountry,
  initialPhoneValue,
}) => {
  const handleInputChange = (telNumber, selectedCountry) => {
    console.log(
      `input changed. Number: ${telNumber}. Country: ${selectedCountry}`
    );
  };

  const handleInputBlur = (telNumber, selectedCountry) => {
    console.log(
      `Focus off TelephoneInput. Telephone Number: ${telNumber}. Selected Country: ${selectedCountry}.`
    );
  };

  return (
    <RFFField
      name={name}
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
      value={value}
      validate={validate}
      validateFields={validateFields}
    >
      <ReactTelephoneInput
        defaultCountry={defaultCountry}
        flagsImagePath={flagsImagePath}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        initialValue={initialPhoneValue}
      />
    </RFFField>
  );
};

export default TelephoneInput;

TelephoneInput.propTypes = {
  defaultCountry: PropTypes.string,
  initialPhoneValue: PropTypes.string,
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
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
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
  initialValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Optional. Defaults to ===.
   * A function to determine if two values are equal.
   */
  isEqual: PropTypes.func,
  /**
   * The name of your field. Field values may be deeply nested using dot-and-bracket syntax.
   */
  name: PropTypes.string.isRequired,
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
};

TelephoneInput.defaultProps = {
  defaultCountry: 'us',
  initialPhoneValue: null,
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
