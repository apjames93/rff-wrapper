import React from 'react';
import {
  Form,
  MuiInput,
  MuiSelect,
  MuiCheckBox,
  MuiRadio,
  MuiSubmit,
} from '../lib/index.mjs';

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
    <MuiInput
      name="thing"
      label="thing"
    />

    <MuiSelect
      name="otherThing"
      options={['one', 'two', 'three']}
    />

    <MuiSelect
      name="stuff"
      options={[{ num: 'six' }, { num: 'nine' }]}
      displayKey="num"
    />

    <MuiCheckBox name="cool" />
    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '100px' }}>
      <MuiRadio
        name="radioName"
        value="testValue1"
        color="default"
        label="radioButton1"
        checkedIcon={{ iconName: 'menu' }}
        icon={{ iconName: 'star' }}
      />
      <MuiRadio
        name="radioName"
        value="testValue2"
        color="default"
        label="radioButton2"
      />

    </div>
    <MuiSubmit />
  </Form>
);

export default App;
