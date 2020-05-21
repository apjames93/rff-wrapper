import React from 'react';

import arrayMutators from 'final-form-arrays';
import ReactFinalForm from '../lib/components/Form/Form';
import Input from '../lib/components/Input/Input';
import Select from '../lib/components/Select/Select';
import CheckBox from '../lib/components/CheckBox/CheckBox';
import Submit from '../lib/components/Submit/Submit';
import RFFFieldArray from '../lib/components/RFFFieldArray/RFFFieldArray';


const onSubmit = async (values) => {
  await setTimeout(() => {
    console.log('woooooo', values);
  }, 20);
  return true;
};

const App = () => (
  <ReactFinalForm
    onSubmit={onSubmit}
    mutators={{ ...arrayMutators }}
    initialValues={{
      coolStuff: [{
        thing: 'wooo',
        otherThing: 'cool',
      }],
    }}
  >
    <Input
      name="thing"
      label="thing"
    />
    <Select
      name="otherThing"
      type="select"
      options={['one', 'two', 'three']}
    />
    <Select
      name="stuff"
      type="select"
      options={[{ num: 'six' }, { num: 'nine' }]}
      displayKey="num"
    />

    <CheckBox name="cool" />


    <RFFFieldArray
      fieldArrayName="coolStuff"
    >
      <Input
        name="thing"
        label="thing"
      />
      <Input
        name="otherThing"
        label="otherThing"
      />

    </RFFFieldArray>

    <Submit />
  </ReactFinalForm>
);

export default App;
