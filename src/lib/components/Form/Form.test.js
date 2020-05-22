import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { MuiInput } from '../MuiInput/MuiInput';
import Form from './Form';

function setup() {
  const props = {
    onSubmit: jest.fn(),
  };
  const comp = shallow(<Form {...props} />);
  return { comp, props };
}

describe('<Form />', () => {
  it('renders Form', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <Form onSubmit={() => true}>
        <MemoryRouter>
          <MuiInput {...props} />
        </MemoryRouter>
      </Form>
    ));
    expect(tree).toMatchSnapshot();
  });
});
