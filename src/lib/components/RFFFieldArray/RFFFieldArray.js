import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'react-final-form-arrays';

/**
 * RFFFieldArray
*/

export const RFFFieldArray = ({
  children,
  fieldArrayName,
}) => (
  <FieldArray
    name={fieldArrayName}
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
  children: PropTypes.oneOfType(
    [PropTypes.arrayOf(PropTypes.element), PropTypes.element],
  ).isRequired,
  fieldArrayName: PropTypes.string.isRequired,
};

RFFFieldArray.defaultProps = {};
