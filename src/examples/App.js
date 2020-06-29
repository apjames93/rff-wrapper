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

const shadows = [
  'none',
  '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
  '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
  // '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
  // '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
  // '0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)',
  // '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
  // '0px 4px 5px -2px rgba(0,0,0,0.2),0px 7px 10px 1px rgba(0,0,0,0.14),0px 2px 16px 1px rgba(0,0,0,0.12)',
  // '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
  // '0px 5px 6px -3px rgba(0,0,0,0.2),0px 9px 12px 1px rgba(0,0,0,0.14),0px 3px 16px 2px rgba(0,0,0,0.12)',
  // '0px 6px 6px -3px rgba(0,0,0,0.2),0px 10px 14px 1px rgba(0,0,0,0.14),0px 4px 18px 3px rgba(0,0,0,0.12)',
  // '0px 6px 7px -4px rgba(0,0,0,0.2),0px 11px 15px 1px rgba(0,0,0,0.14),0px 4px 20px 3px rgba(0,0,0,0.12)',
  // '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
  // '0px 7px 8px -4px rgba(0,0,0,0.2),0px 13px 19px 2px rgba(0,0,0,0.14),0px 5px 24px 4px rgba(0,0,0,0.12)',
  // '0px 7px 9px -4px rgba(0,0,0,0.2),0px 14px 21px 2px rgba(0,0,0,0.14),0px 5px 26px 4px rgba(0,0,0,0.12)',
  // '0px 8px 9px -5px rgba(0,0,0,0.2),0px 15px 22px 2px rgba(0,0,0,0.14),0px 6px 28px 5px rgba(0,0,0,0.12)',
  // '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
  // '0px 8px 11px -5px rgba(0,0,0,0.2),0px 17px 26px 2px rgba(0,0,0,0.14),0px 6px 32px 5px rgba(0,0,0,0.12)',
  // '0px 9px 11px -5px rgba(0,0,0,0.2),0px 18px 28px 2px rgba(0,0,0,0.14),0px 7px 34px 6px rgba(0,0,0,0.12)',
  // '0px 9px 12px -6px rgba(0,0,0,0.2),0px 19px 29px 2px rgba(0,0,0,0.14),0px 7px 36px 6px rgba(0,0,0,0.12)',
  // '0px 10px 13px -6px rgba(0,0,0,0.2),0px 20px 31px 3px rgba(0,0,0,0.14),0px 8px 38px 7px rgba(0,0,0,0.12)',
  // '0px 10px 13px -6px rgba(0,0,0,0.2),0px 21px 33px 3px rgba(0,0,0,0.14),0px 8px 40px 7px rgba(0,0,0,0.12)',
  // '0px 10px 14px -6px rgba(0,0,0,0.2),0px 22px 35px 3px rgba(0,0,0,0.14),0px 8px 42px 7px rgba(0,0,0,0.12)',
  // '0px 11px 14px -7px rgba(0,0,0,0.2),0px 23px 36px 3px rgba(0,0,0,0.14),0px 9px 44px 8px rgba(0,0,0,0.12)',
  // '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
];

const App = () => (
  <Form
    mutators={{ ...arrayMutators }}
    onSubmit={onSubmit}
    // initialValues={{
    //   array: [
    //     {
    //       apples: 'wooo',
    //       state: '',
    //       gender: '',
    //       canCall: false,
    //     },
    //   ],
    initialValues={{
      shadows,
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
      {/* <MuiInput
        name="thing"
        label="thing"
        validate={(value) => {
          console.log('!!!!!', value)
          if (value !== 'wasd') {
            return 'needs to be wasd';
          }
        }}
      /> */}

      <div>
        <RFFFieldArray fieldArrayName="shadows">
          <MuiInput
            label="shadow1"
            validate={(value) => {
              if (value !== 'wasd') {
                return 'needs to be wasd';
              }
            }}
          />
          {/* <MuiRadio name="gender" value="male" color="default" label="male" /> */}
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
