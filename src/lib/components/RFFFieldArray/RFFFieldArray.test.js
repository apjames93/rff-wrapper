import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import arrayMutators from 'final-form-arrays';
import {
  Form, MuiInput, MuiRadio, MuiCheckbox,
} from '../../index';
import RFFFieldArray from './RFFFieldArray';

function setup() {
  const props = { fieldArrayName: 'array' };
  const comp = mount(
    <Form
      onSubmit={() => true}
      mutators={{ ...arrayMutators }}
      initialValues={{
        array: [
          {
            name: 'wooo',
            state: '',
            gender: '',
            canCall: false,
          },
        ],
      }}
    >
      <RFFFieldArray {...props}>
        <MuiInput name="name" label="name" />
        <MuiRadio name="gender" value="male" color="default" label="male" />
        <MuiCheckbox name="canCall" />
      </RFFFieldArray>
    </Form>,
  );
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
    const tree = renderer.create(
      <Form onSubmit={() => true} mutators={{ ...arrayMutators }}>
        <RFFFieldArray {...props} />
      </Form>,
    );
    expect(tree).toMatchSnapshot();
  });
});
