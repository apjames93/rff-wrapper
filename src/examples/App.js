import React from 'react';

import arrayMutators from 'final-form-arrays';
import {
  Form,
  MuiInput,
  MuiSelect,
  MuiCheckbox,
  MuiRadio,
  HTMLSelect,
  MuiSubmit,
  HTMLSubmit,
} from '../lib/index';
import RFFFieldArray from '../lib/components/RFFFieldArray/RFFFieldArray';

const onSubmit = async (values) => {
  await setTimeout(() => {
    console.log('woooooo', values);
  }, 20);
  return true;
};

const App = () => (
  <Form
    mutators={{ ...arrayMutators }}
    onSubmit={onSubmit}
    initialValues={{
      array: [
        {
          // apples: 'wooo',
          // state: '',
          // gender: '',
          // canCall: false,
        },
      ],
    }}
  >
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <MuiInput name="thing2" label="thing2" type="number" />

      <MuiInput name="thing" label="thing" />
      <MuiSelect
        name="otherThing"
        type="select"
        options={['one', 'two', 'three']}
      />
      <MuiSelect
        name="stuff"
        type="select"
        options={[{ num: 'six' }, { num: 'nine' }]}
        displayKey="num"
      />
      <MuiCheckbox name="cool" />
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
      /> */}

      {/* <div>
        <HTMLSelect
          name="HTMLSelect121"
          label="testingSelect"
          options={[1, 'two', 'three']}
        />

        <HTMLSelect
          name="HTMLSelect1"
          label="Numbers"
          options={[{ num: 'six' }, { num: 'nine' }]}
          displayKey="num"
          initalValue={{ num: 'six' }}
        />
      </div> */}
      <div style={{ height: '200px', width: '300px', margin: '30px' }}>
        <RFFFieldArray fieldArrayName="array">
          <MuiInput label="apples" />
          <MuiRadio name="gender" value="male" color="default" label="male" />
          {/* <HTMLSelect
            name="state"
            label="state"
            options={[1, 'two', 'three']}
          />
          <MuiCheckbox name="canCall" /> */}
        </RFFFieldArray>
      </div>
    </div>
    <MuiSubmit />
    <HTMLSubmit />
  </Form>
);

export default App;
