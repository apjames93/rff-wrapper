import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiIcon from './MuiIcon';

function setup() {
  const props = {
    component: 'MuiIcon',
    iconName: 'android',
  };
  const comp = shallow(<MuiIcon {...props} />);
  return { comp, props };
}

describe('<MuiIcon />', () => {
  it('renders MuiIcon', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();

    const tree = renderer.create((
      <MuiIcon {...props} />
    ));
    expect(tree).toMatchSnapshot();
  });
});
