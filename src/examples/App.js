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
  FileInput,
  RFFFieldArray,
  HTMLCheckbox,
} from '../lib/index';


const onSubmit = async (values) => {
  console.log('???????', values);
};

const shadows = [
  'none',
  '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
  '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
  '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
];

const App = () => (
  <Form
    mutators={{ ...arrayMutators }}
    onSubmit={onSubmit}
    initialValues={{
      MuiCheckbox: false,
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
      <FileInput
        name="fileInput"
        acceptFileTypes={['application/json']}
      />

      <MuiInput name="muiInputOne" label="mui Input One" type="number" />
      <MuiInput name="muiInputTwo" label="mui Input Two" />

      <MuiSelect
        name="muiSelectArrayOfStrings"
        options={['one', 'two', 'three']}
      />
      <MuiSelect
        name="muiSelectArrayOfObjects"
        options={[{ num: 'six' }, { num: 'nine' }]}
        displayKey="num"
      />

      <MuiCheckbox name="MuiCheckbox" />
      <HTMLCheckbox name="HTMLCheckbox" />

      <MuiRadio
        name="radioName"
        value="testValue1"
        color="default"
        label="radioButton1"
        checkedIcon={{ iconName: 'checked' }}
        icon={{ iconName: 'clear' }}
      />

      <MuiRadio
        name="radioName"
        value="testValue2"
        color="default"
        label="radioButton2"
      />

      <div>
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
      </div>

      <div>
        <RFFFieldArray fieldArrayName="shadows">
          <MuiInput
            label="shadow1"
            validate={(value) => {
              if (!value) {
                return 'required';
              }
            }}
          />
          <MuiRadio name="gender" value="male" color="default" label="male" />
          <HTMLSelect
            name="state"
            label="state"
            options={[1, 'two', 'three']}
          />
          <MuiCheckbox name="canCall" />
        </RFFFieldArray>
      </div>
    </div>
    <MuiSubmit />
    {/* <HTMLSubmit /> */}
  </Form>
);

export default App;
