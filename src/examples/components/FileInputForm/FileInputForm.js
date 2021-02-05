import React from 'react';
import Card from '@material-ui/core/Card';
import {
  Form,
  FileInput,
  MuiSubmit,
} from '../../../lib/index';

const FileInputForm = () => {
  const onSubmitFileInputForm = async (values) => {
    console.log(values);
    return new Promise(resolve => setTimeout(resolve, 200));
  };

  return (
    <Card>
      <Form
        onSubmit={onSubmitFileInputForm}
      >
        <FileInput
          name="fileInput"
          acceptFileTypes={['application/json']}
        />
        <MuiSubmit />
      </Form>
    </Card>
  );
};

export default FileInputForm;
