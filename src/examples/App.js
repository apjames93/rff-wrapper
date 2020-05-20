import React from 'react';

import ReactFinalForm from '../lib/components/Form/Form';
import Input from '../lib/components/Input/Input';
import Select from '../lib/components/Select/Select';
import CheckBox from '../lib/components/CheckBox/CheckBox';
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

    <CheckBox name="cool" />
    <Submit />
  </ReactFinalForm>
);

export default App;
