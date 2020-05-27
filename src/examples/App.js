import React from 'react';

import ReactFinalForm from '../lib/components/Form/Form';
import MuiInput from '../lib/components/MuiInput/MuiInput';
import Select from '../lib/components/MuiSelect/MuiSelect';
import MuiCheckBox from '../lib/components/MuiCheckBox/MuiCheckBox';
import MuiRadio from '../lib/components/MuiRadio/MuiRadio';
import HTMLInput from '../lib/components/HTMLInput/HTMLInput';
import HTMLRadio from '../lib/components/HTMLRadio/HTMLRadio';
import HTMLCheckbox from '../lib/components/HTMLCheckbox/HTMLCheckbox';

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
    <div style={{ textAlign: 'center' }}>
      <MuiInput
        name="thing"
        label="thing"
      />
    </div>
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
    <div style={{
      marginTop: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center',
    }}
    >
      <HTMLInput
        name="htmlInput"
        label="EnterValue"
        maxLength={10}
      />
    </div>
    <div>
      <HTMLRadio
        name="htmlRadioButton"
        label="RadioLabel1"
        value="RadioValue1"
        labelPlacement="bottom"
      />
      <HTMLRadio
        name="htmlRadioButton"
        label="RadioLabel2"
        value="RadioValue2"
        labelPlacement="top"
      />
    </div>
    <div>
      <HTMLCheckbox
        name="car"
        label="car"
        labelPlacement="top"
      />
    </div>
    <div>
      <MuiCheckBox
        name="thing"
        label="thing"
        checkedIcon={{
          iconName: 'alarm_off',
        }}
      />
      <MuiCheckBox
        name="otherThing"
        label="otherThing"
        icon={{
          iconName: 'alarm_off',
        }}
      />
      <MuiCheckBox
        name="normalThing"
      />
    </div>
    <Submit />
  </ReactFinalForm>
);

export default App;
