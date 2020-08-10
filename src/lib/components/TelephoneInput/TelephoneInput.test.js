import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../Form/Form';
import TelephoneInput from './TelephoneInput';

function setup() {
  const props = {
    name: 'phoneNumber',
  };
  const comp = shallow(
    <Form onSubmit={() => true}>
      <TelephoneInput {...props} />
    </Form>,
  );

  return { comp, props };
}

describe('<TelephoneInput />', () => {
  it('renders TelephoneInput', () => {
    const { comp } = setup('cool');
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup('cool');
    const tree = renderer.create(
      <Form onSubmit={() => true}>
        <TelephoneInput {...props} />
      </Form>,
    );
    expect(tree).toMatchSnapshot();
  });
});
