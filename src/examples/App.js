import React from 'react';

// import ReactFinalForm from '../lib/components/Form/Form';
import Input from '../lib/components/Input/Input';
import Select from '../lib/components/Select/Select';
import CheckBox from '../lib/components/CheckBox/CheckBox';
import Radio from '../lib/components/Radio/Radio';

import Submit from '../lib/components/Submit/Submit';


import { Form } from '../lib/index.mjs';



const onSubmit = async (values) => {
  await setTimeout(() => {
    console.log('woooooo', values);
  }, 20);
  return true;
};

const App = () => (
  <Form
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
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '100px'}}>
      <Radio
        name="radioName"
        value='testValue1'
        color='default'
        label='radioButton1'
        checkedIcon={{ iconName: 'menu' }}
        icon={{ iconName: 'star' }}
        />
      <Radio
        name="radioName"
        value='testValue2'
        color='default'
        label='radioButton2'
        />

    </div>
    <Submit />
  </Form>
);

export default App;
