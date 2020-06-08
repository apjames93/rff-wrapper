import React from 'react';
import { shallow } from 'enzyme';
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

describe('<Select />', () => {
  it('renders Select', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <Form onSubmit={() => true}>
        <MuiSubmit {...props} />
      </Form>,
    );
    expect(tree).toMatchSnapshot();
  });
});
