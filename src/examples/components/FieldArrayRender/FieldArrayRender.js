import React from 'react';
import arrayMutators from 'final-form-arrays';
import {
  Form,
  MuiInput,
  MuiCheckbox,
  RFFFieldArray,
} from '../../../lib/index';

const FieldArrayRender = () => {
  const onSubmitFieldArrayRender = async (values) => {
    console.log(values);
    return new Promise(resolve => setTimeout(resolve, 200));
  };

  return (
    <Form
      mutators={{
        ...arrayMutators,
      }}
      onSubmit={onSubmitFieldArrayRender}
      initialValues={{
        people: [{
          name: '',
          gender: '',
          state: '',
          canCall: true,
        }, {
          name: 'dude',
          gender: 'female',
          state: 'NY',
          canCall: false,
        }],
      }}
      render={(formProps) => {
        console.log('formProps', formProps);
        return (
          <form onSubmit={formProps.handleSubmit}>
            <div>
              <button
                type="button"
                onClick={() => formProps.form.mutators.push('people', undefined)}
              >
                Add Person
              </button>
              <button type="button" onClick={() => formProps.form.mutators.pop('people')}>
                Remove Person
              </button>
            </div>
            <RFFFieldArray
              fieldArrayName="people"
              render={(fieldArrayProps) => {
                console.log('fieldArrayProps', fieldArrayProps);
                return fieldArrayProps.fields.map((name, index) => (
                  <>
                    <MuiInput name={`${name}.name`} label="name" />
                    <MuiCheckbox name={`${name}.hasInsurance`} label="Has Insurance" />
                    <button type="button" onClick={() => fieldArrayProps.fields.remove(index)}>
                      Remove this Person
                    </button>
                  </>
                ));
              }}
            />
          </form>
        );
      }}
    />
  );
};

export default FieldArrayRender;
