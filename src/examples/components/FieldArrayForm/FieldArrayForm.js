import React from 'react';

import arrayMutators from 'final-form-arrays';
import Card from '@material-ui/core/Card';
import {
  Form,
  MuiInput,
  MuiCheckbox,
  MuiRadio,
  MuiSubmit,
  HTMLSelect,
  RFFFieldArray,
} from '../../../lib/index';

import Buttons from './components/Buttons/Buttons';

const FieldArrayForm = () => {
  const onSubmitFieldArrayForm = async (values) => {
    console.log('onSubmitHTMLForm values', values);
  };

  return (
    <Card>

      <Form
        mutators={{
          ...arrayMutators,
        }}
        onSubmit={onSubmitFieldArrayForm}
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
      >
        <Buttons />
        <RFFFieldArray fieldArrayName="people">
          <MuiInput
            name="name"
          />
          <MuiRadio name="gender" value="male" color="default" label="male" />
          <MuiRadio name="gender" value="female" color="default" label="female" />
          <HTMLSelect
            name="state"
            label="state"
            options={['CO', 'CA', 'NY']}
          />
          <MuiCheckbox name="canCall" />
        </RFFFieldArray>
        <MuiSubmit />
      </Form>
    </Card>
  );
};

export default FieldArrayForm;
