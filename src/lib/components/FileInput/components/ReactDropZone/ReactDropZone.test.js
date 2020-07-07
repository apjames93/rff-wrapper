import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import ReactDropZone, { drop } from './ReactDropZone';

function setup() {
  const props = {
    onDrop: jest.fn(),
    field: {
      input: {
        onChange: jest.fn(),
      },
    },
  };
  const comp = mount(<ReactDropZone {...props} />);
  return { comp, props };
}


test('snapshot', () => {
  const tree = renderer.create(
    <ReactDropZone />,
  );
  expect(tree).toMatchSnapshot();
});

test('onDrop', () => {
  const { comp, props } = setup();
  comp.find('[data-testid="DropzoneInput"]').first().props().onDrop();
  expect(props.onDrop).toBeCalled();
});

describe('drop', () => {
  test('drop rejectedFiles', async () => {
    const { props } = setup();
    const rejectedFiles = [{
      code: 'this is bad',
      message: 'real bad',
    }];
    await drop([], rejectedFiles, props.field);
    expect(props.field.input.onChange).toBeCalledWith(rejectedFiles[0]);
  });

  test('acceptedFiles.length > 1', async () => {
    const { props } = setup();
    await drop([{}, {}], [], props.field);
    expect(props.field.input.onChange).toBeCalledWith({
      errors: [{
        code: 'one file',
        message: 'only one file can be uploaded',
      }],
    });
  });

  test('acceptedFiles.length === 1 calls base64File', async () => {
    // eslint-disable-next-line no-undef
    const readAsDataURLSpy = jest.spyOn(FileReader.prototype, 'readAsDataURL');
    const { props } = setup();
    // eslint-disable-next-line no-undef
    await drop([new Blob()], [], props.field);
    expect(readAsDataURLSpy).toBeCalled();
    expect(props.field.input.onChange).toBeCalled();
  });
});
