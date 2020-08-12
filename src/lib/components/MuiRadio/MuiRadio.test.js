import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiRadio from './MuiRadio';
import Form from '../Form/Form';


const checkicon = {
  iconName: 'star',
};

const muiIcon = {
  iconName: 'email',
};

function setup(checkedIcon = checkicon, icon = muiIcon) {
  const props = {
    checkedIcon,
    icon,
    name: 'radioName',
    value: 'hello',
  };
  const comp = mount(
    <Form onSubmit={() => true}>
      <MuiRadio {...props} />
    </Form>,
  );
  return { comp, props };
}

describe('<MuiRadio />', () => {
  it('renders Radio', () => {
    const { comp } = setup();
    expect(comp).toBeDefined();
  });

  test('snapshot', () => {
    const { props } = setup();
    const tree = renderer.create(
      <Form onSubmit={() => true}>
        <MuiRadio {...props} />
      </Form>,
    );
    expect(tree).toMatchSnapshot();
  });

  it('simulate change and checkes that onchange toggles checked value', () => {
    const { props } = setup();

    const comp = mount(
      <Form onSubmit={() => true}>
        <MuiRadio {...props} />
        <MuiRadio {...props} value="woooo" />
      </Form>,
    );
    let radioInputProps = comp.find('input').last().props();

    expect(radioInputProps.checked).toBe(false);
    comp.find('input').last().simulate('change');

    radioInputProps = comp.find('input').last().props();
    expect(radioInputProps.checked).toBe(true);
  });

  it('should render a checkedIcon if provided', () => {
    const { props } = setup({ iconName: 'menu' });
    expect(props.checkedIcon).toEqual({ iconName: 'menu' });
  });

  it('should render an Icon if provided', () => {
    const { props } = setup({ iconName: 'menu' }, { iconName: 'menu' });
    expect(props.checkedIcon).toEqual({ iconName: 'menu' });
    expect(props.icon).toEqual({ iconName: 'menu' });
  });

  it('should render a checkedIcon if provided', () => {
    const { props } = setup(null, { iconName: 'menu' });
    expect(props.icon).toEqual({ iconName: 'menu' });
  });
});
