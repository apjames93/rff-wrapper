import React from 'react';
import {
  Form,
  TelephoneInput,
  MuiSubmit,
} from '../../../lib/index';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const TelephoneInputForm = () => {
  const onSubmitTelephoneInput = async (values) => {
    console.log('onSubmitHTMLForm values', values);
  };

  return (
    <Form
      onSubmit={onSubmitTelephoneInput}
    >
      <div style={formStyle}>
        <TelephoneInput name="PhoneNumber" />
      </div>
      <MuiSubmit />
    </Form>
  );
};

export default TelephoneInputForm;
