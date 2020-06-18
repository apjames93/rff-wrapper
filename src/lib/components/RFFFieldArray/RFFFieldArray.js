import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'react-final-form-arrays';
import FieldArrayHelpers from '../../../utils/FieldArrayHelpers';

/**
 * RFFFieldArray
*/

export const RFFFieldArray = ({
  children,
  fieldArrayName,
}) => {
  const { checkFieldName } = FieldArrayHelpers;
  return (
    <FieldArray
      name={fieldArrayName}
    >
      {({ fields }) => (
        <>
          {fields.map((name, index) => {
            return (
              <div key={index}>
                {Array.isArray(children) && children.map((child, i) => {
                  const fieldName = checkFieldName(child.props.name, i);
                  return cloneElement(
                    child,
                    {
                      fields,
                      key: i,
                      name: `${name}[${fieldName}]`,
                      index,
                    },
                  );
                })}
                {!Array.isArray(children) && cloneElement(
                  children,
                  {
                    fields,
                    name: `${name}[${children.props.name}]`,
                  },
                )}
              </div>
            );
          })}
        </>
      )}
    </FieldArray>
  );
};

export default RFFFieldArray;

RFFFieldArray.propTypes = {
  children: PropTypes.string.isRequired,
  fieldArrayName: PropTypes.string.isRequired,
};

RFFFieldArray.defaultProps = {};
