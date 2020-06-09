import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Form from '../Form/Form';

import {
  CheckBoxArray,
  handleOnChange,
  assignIndex,
  getIndex,
} from './CheckBoxArray';

function setup() {
  const props = {
    label: 'label',
    fields: {
      push: jest.fn(value => [value]),
      remove: jest.fn(),
      get: jest.fn(),
      forEach: jest.fn(),
      value: [{ id: 1 }],
    },
    value: { id: 2 },
    checked: false,
    color: 'primary',
  };
  const comp = shallow(<CheckBoxArray {...props} />);

  return { comp, props };
}

describe('onChange', () => {
  it.skip('onChange call handleOnChange', () => {
    const { props } = setup();
    const comp = mount(<CheckBoxArray {...props} />);
    jest.mock('./handleOnChange');

    const event = {
      preventDefault() {},
      target: { value: 'the-value' },
    };
    comp.find('#MUICheckbox').first().simulate('change', event);
    expect(handleOnChange).toBeCalled();
  });
});

describe('handleOnChange', () => {
  const value = { id: 1 };
  const fields = {
    push: jest.fn(),
    remove: jest.fn(),
  };

  it('handleOnChange push', () => {
    handleOnChange(value, fields, undefined);
    expect(fields.push).toBeCalledWith(value);
  });

  it('handleOnChange remove', () => {
    handleOnChange(value, fields, 1);
    expect(fields.remove).toBeCalledWith(1);
  });
});

describe('getIndex', () => {
  const fieldValue = { id: 1 };

  it('getIndex true', () => {
    const value = { id: 1 };
    const same = getIndex(fieldValue, value);
    expect(same).toBe(true);
  });

  it('getIndex false', () => {
    const value = { id: 2 };
    const same = getIndex(fieldValue, value);
    expect(same).toBe(false);
  });
});

describe('assignIndex', () => {
  const fields = {
    value: [{ id: 1 }, { id: 2 }],
  };

  it('assignIndex index', () => {
    const value = { id: 2 };
    const index = assignIndex(fields, value);
    expect(index).toBe(1);
  });

  it('getIndex false', () => {
    const value = { id: 5 };
    const index = getIndex(fields, value);
    expect(index).toBe(false);
  });
});

describe('<CheckBoxArray />', () => {
  it('renders CheckBoxArray', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <Form onSubmit={() => true}>
        <MemoryRouter>
          <CheckBoxArray {...props} />
        </MemoryRouter>
      </Form>

    ));
    expect(tree).toMatchSnapshot();
  });
});
