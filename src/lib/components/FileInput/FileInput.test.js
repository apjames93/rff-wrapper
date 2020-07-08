import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import FileInput, { onDrop, defaultValidator } from './FileInput';
import Form from '../Form/Form';

function setup() {
  const props = {
    name: 'cool',
    label: 'apples',
  };
  const comp = mount(
    <Form onSubmit={() => true}>
      <FileInput {...props} />
    </Form>,
  );
  return { comp, props };
}

describe('onDrop', () => {
  const error = defaultValidator({
    errors: [{
      code: 'one file',
      message: 'only one file can be uploaded',
    }],
  });
  expect(error).toEqual('only one file can be uploaded');

  const noError = defaultValidator('base66 string');
  expect(noError).toEqual(undefined);
});

describe('onDrop', () => {
  const field = {
    input: {
      onChange: jest.fn(),
    },
  };
  beforeEach(() => {
    global.URL.createObjectURL = jest.fn(() => 'details');
  });


  it('onDrop rejectedFiles', async () => {
    const rejectedFiles = [{
      code: 'this is bad',
      message: 'real bad',
    }];
    await onDrop([], rejectedFiles, field, jest.fn());
    expect(field.input.onChange).toBeCalledWith(rejectedFiles[0]);
  });

  it('acceptedFiles.length > 1', async () => {
    await onDrop([{}, {}], [], field, jest.fn());
    expect(field.input.onChange).toBeCalledWith({
      errors: [{
        code: 'one file',
        message: 'only one file can be uploaded',
      }],
    });
  });

  it('acceptedFiles.length === 1 calls base64File', async () => {
    // eslint-disable-next-line no-undef
    const readAsDataURLSpy = jest.spyOn(FileReader.prototype, 'readAsDataURL');
    // eslint-disable-next-line no-undef
    await onDrop([new Blob()], [], field, jest.fn());
    expect(readAsDataURLSpy).toBeCalled();
    expect(global.URL.createObjectURL).toBeCalled();
    expect(field.input.onChange).toBeCalled();
  });
});

describe('<FileInput />', () => {
  it('renders Input', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <Form onSubmit={() => true}>
        <FileInput {...props} />
      </Form>,
    );
    expect(tree).toMatchSnapshot();
  });
});
