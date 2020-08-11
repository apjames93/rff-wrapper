import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import arrayMutators from 'final-form-arrays';
import {
  Form, MuiInput,
} from '../../index';
import RFFFieldArray from './RFFFieldArray';

const TestForm = props => (
  <Form
    onSubmit={() => true}
    mutators={{ ...arrayMutators }}
    initialValues={{
      array: [
        {
          name: 'wooo',
        },
      ],
    }}
  >
    <RFFFieldArray {...props}>
      <MuiInput name="name" label="name" />
      <MuiInput name="age" label="age" />
    </RFFFieldArray>
  </Form>
);

function setup() {
  const props = { fieldArrayName: 'array' };
  const comp = mount(<TestForm {...props} />);
  return { comp, props };
}

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('<RFFFieldArray />', () => {
  it('renders RFFFieldArray', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(<TestForm {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
