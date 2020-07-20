import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { MuiCheckbox } from './MuiCheckbox';
import Form from '../Form/Form';

function setup() {
  const props = {
    name: 'cool',
  };
  const comp = shallow(<MuiCheckbox {...props} />);
  return { comp, props };
}

describe('<MuiCheckbox />', () => {
  it('renders Input', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <Form onSubmit={() => true}>
        <MuiCheckbox {...props} />
      </Form>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('should handle change of checkbox and set the value to true or false', () => {
    const { comp } = setup();
    const field = {
      input: {
        name: 'name',
        value: 'value',
        onChange: jest.fn(),
      },
    };
    const mockEvent = {
      target: {
        checked: true,
      },
    };
    const rffField = comp.find('RFFField').first().prop('passProps');
    rffField(field).onChange(mockEvent);
    expect(field.input.onChange).toHaveBeenCalled();
  });
});
