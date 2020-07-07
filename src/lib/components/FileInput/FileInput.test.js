import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import FileInput from './FileInput';
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
