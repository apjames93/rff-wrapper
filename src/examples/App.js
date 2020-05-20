import React from 'react';

import ReactFinalForm from '../lib/components/Form/Form';
import Input from '../lib/components/Input/Input';
import Select from '../lib/components/Select/Select';

import Submit from '../lib/components/Submit/Submit';


const onSubmit = async (values) => {
  await setTimeout(() => {
    console.log('woooooo', values);
  }, 20);
  return true;
};

const App = () => (
  <ReactFinalForm
    onSubmit={onSubmit}
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
    <Submit />
  </ReactFinalForm>
);

export default App;
