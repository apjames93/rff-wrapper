import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Input } from './Input';
import Form from '../Form/Form';

function setup() {
  const props = {
    name: 'cool',
  };
  const comp = shallow(<Input {...props} />);
  return { comp, props };
}

describe('<Input />', () => {
  it('renders Input', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create((
      <Form onSubmit={() => true}>
        <MemoryRouter>
          <Input {...props} />
        </MemoryRouter>
      </Form>
    ));
    expect(tree).toMatchSnapshot();
  });
});
