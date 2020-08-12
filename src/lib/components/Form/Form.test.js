import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { MuiInput } from '../MuiInput/MuiInput';
import Form from './Form';

const TestForm = props => (
  <Form onSubmit={() => true}>
    <MuiInput name="firstName" {...props} />
  </Form>
);

function setup() {
  const props = {
    onSubmit: jest.fn(),
  };
  const comp = mount(<TestForm {...props} />);
  return { comp, props };
}

describe('<Form />', () => {
  it('renders Form', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  it('renders Form', () => {
    const { props } = setup();
    const comp = mount(<TestForm {...props} />);
    const inputs = comp.find('MuiInput');
    expect(inputs.length).toBe(1);
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<TestForm {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
