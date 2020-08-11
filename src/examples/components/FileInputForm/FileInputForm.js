import React from 'react';
import {
  Form,
  FileInput,
  MuiSubmit,
} from '../../../lib/index';

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};

const FileInputForm = () => {
  const onSubmitFileInputForm = async (values) => {
    console.log('onSubmitHTMLForm values', values);
  };

  return (
    <Form
      onSubmit={onSubmitFileInputForm}
    >
      <div
        style={formStyle}
      >
        <FileInput
          name="fileInput"
          acceptFileTypes={['application/json']}
        />
        <MuiSubmit />
      </div>
    </Form>
  );
};

export default FileInputForm;
