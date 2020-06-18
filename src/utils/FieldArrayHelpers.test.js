import FieldArrayHelpers from './FieldArrayHelpers';

describe('FieldArrayHelpers', () => {
  const { checkFieldName } = FieldArrayHelpers;
  it('should return the index as the key if no name is passed in', () => {
    const index = 3;
    const noName = checkFieldName(undefined, index);
    expect(noName).toEqual('k3');
    const fieldName = checkFieldName('apples', index);
    expect(fieldName).toEqual(fieldName);
  });
});
