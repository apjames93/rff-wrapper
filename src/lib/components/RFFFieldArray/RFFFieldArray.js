import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'react-final-form-arrays';

/**
 * RFFFieldArray
 * https://www.npmjs.com/package/react-final-form-arrays#render-props-fieldarrayrenderprops--reactnode
*/
export const RFFFieldArray = ({
  children,
  render,
  fieldArrayName,
}) => (
  <FieldArray
    name={fieldArrayName}
    render={render}
  >
    {({ fields }) => (
      <>
        {fields.map((name, index) => (
          <div key={index} style={{ width: '100%' }}>
            {Array.isArray(children) && children.map((child, i) => cloneElement(
              child,
              {
                fields,
                key: i,
                name: child.props.name ? `${name}[${child.props.name}]` : name,
                index,
              },
            ))}
            {!Array.isArray(children) && cloneElement(
              children,
              {
                fields,
                name: children.props.name ? `${name}[${children.props.name}]` : name,
              },
            )}
          </div>
        ))}
      </>
    )}
  </FieldArray>
);

export default RFFFieldArray;

RFFFieldArray.propTypes = {
  /** if passed down as children will map over array data and assign the array field name */
  children: PropTypes.oneOfType(
    [PropTypes.arrayOf(PropTypes.element), PropTypes.element],
  ),
  /** will default to render if provided and gives access to the fields render props */
  render: PropTypes.func,
  /** name for array data */
  fieldArrayName: PropTypes.string.isRequired,
};

RFFFieldArray.defaultProps = {
  render: undefined,
  children: undefined,
};
