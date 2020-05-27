import React from 'react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { MuiSubmit } from './MuiSubmit';
import Form from '../Form/Form';

function setup() {
  const props = {
    buttonText: 'submit',
  };
  const comp = shallow(<MuiSubmit {...props} />);
  return { comp, props };
}

describe('<MuiSubmit />', () => {
  it('renders MuiSubmit', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <Form onSubmit={() => true}>
        <MemoryRouter>
          <MuiSubmit {...props} />
        </MemoryRouter>
      </Form>,
    );
    expect(tree).toMatchSnapshot();
  });
});