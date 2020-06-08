import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { MuiInput } from '../MuiInput/MuiInput';
import Form from './Form';

function setup() {
  const props = {
    onSubmit: jest.fn(),
  };
  const comp = mount(
    <Form onSubmit={() => true}>
      <MuiInput {...props} />
    </Form>,
  );
  return { comp, props };
}

describe('<Form />', () => {
  it('renders Form', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('renders Form', () => {
    const { props } = setup();
    const comp = mount(
      <Form onSubmit={() => true}>
        <MuiInput {...props} />
        <MuiInput {...props} />
      </Form>,
    );
    const inputs = comp.find('MuiInput');
    expect(inputs.length).toBe(2);
  });


  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <Form onSubmit={() => true}>
        <MuiInput {...props} />
      </Form>
    ));
    expect(tree).toMatchSnapshot();
  });
});
