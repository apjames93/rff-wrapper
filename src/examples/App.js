import React from 'react';

import ReactFinalForm from '../lib/components/Form/Form';
import MuiInput from '../lib/components/MuiInput/MuiInput';
import Select from '../lib/components/MuiSelect/MuiSelect';
import MuiCheckBox from '../lib/components/MuiCheckBox/MuiCheckBox';
import MuiRadio from '../lib/components/MuiRadio/MuiRadio';
import HTMLSelect from '../lib/components/HTMLSelect/HTMLSelect';

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
    <MuiInput
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

      <div>
        {/* <HTMLSelect
          name="HTMLSelect1"
          label="testingSelect"
          options={['one', 'two', 'three']}
        /> */}

        <HTMLSelect
          name="HTMLSelect1"
          label="Numbers"
          options={[{ num: 'six' }, { num: 'nine' }]}
          displayKey="num"
        />

      </div>
    </div>
    <Submit />
  </ReactFinalForm>
);

export default App;
