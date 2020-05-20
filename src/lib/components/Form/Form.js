import React, { cloneElement, lazy } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';

const arrayMutators = lazy(() => import('final-form-arrays'));

export const ReactFinalForm = ({
  children,
  debug,
  initialValues,
  initialValuesEqual,
  keepDirtyOnReinitialize,
  mutators,
  onSubmit,
  subscription,
  validate,
  validateOnBlur,
}) => (
  <Form
    debug={debug}
    initialValues={initialValues}
    initialValuesEqual={initialValuesEqual}
    keepDirtyOnReinitialize={keepDirtyOnReinitialize}
    // mutators={tators}
    onSubmit={onSubmit}
    subscription={subscription}
    validate={validate}
    validateOnBlur={validateOnBlur}
  >
    {({ handleSubmit, submitting, form }) => (
      <form onSubmit={handleSubmit}>

        {children && children.length && children.map((child, index) => cloneElement(
          child,
          {
            key: index,
            submitting,
            form,
          },
        ))}
      </form>
    )}
  </Form>
);
export default ReactFinalForm;

// https://final-form.org/docs/react-final-form/types/FormProps
ReactFinalForm.propTypes = {
  /**
     * A render function that is given FormRenderProps, as well as any non-API props passed into the <Form/> component.
    */
  children: PropTypes.node.isRequired,
  /**
   * Function to call when the form is submitted. There are three possible ways to write an onSubmit function:
   */
  onSubmit: PropTypes.func.isRequired,

  /**
     * A callback for debugging that receives the form state and the states of all the fields. It's called on every state change. A typical thing to pass in might be console.log.
     */
  debug: PropTypes.func,
  /**
    * The initial values of your form. These will also be used to compare against the current values to calculate pristine and dirty.
   */
  initialValues: PropTypes.shape(),
  /**
     * A predicate to determine whether or not the initialValues prop has changed, i.e. to know if the form needs to be reinitialized with the new values. Useful for passing in a "deep equals" function if you need to. Defaults to "shallow equals".
    */
  initialValuesEqual: PropTypes.bool,
  /**
   * If true, only pristine values will be overwritten when initialize(newValues) is called. This can be useful for allowing a user to continue to edit a record while the record is being saved asynchronously, and the form is reinitialized to the saved values when the save is successful. Defaults to false.
   */
  keepDirtyOnReinitialize: PropTypes.bool,
  /**
     * Named mutator functions.
     * obj of setters and getters for mutator mui-rff will spread arrayMutators if object is not empty
    */
  mutators: PropTypes.shape(),
  /**
   * An object of the parts of FormState to subscribe to. If a subscription is provided, the <Form/> will only rerender when those parts of form state change.
    If no subscription is provided, it will default to subscribing to all form state changes. i.e. <Form/> will rerender whenever any part of the form state changes.
   * ex : { [string]: boolean }
    */
  subscription: PropTypes.shape(),
  /**
   * ex: (values: FormValues) => Object | Promise<Object>
   * A whole-record validation function that takes all the values of the form and returns any validation errors. There are two possible ways to write a validate function:
   */
  validate: PropTypes.func,
  /**
   * If true, validation will happen on blur. If false, validation will happen on change. Defaults to false.
   */
  validateOnBlur: PropTypes.bool,
};

ReactFinalForm.defaultProps = {
  debug: undefined,
  initialValues: {},
  initialValuesEqual: false,
  keepDirtyOnReinitialize: false,
  mutators: {},
  subscription: undefined,
  validate: undefined,
  validateOnBlur: false,
};
