class FieldArrayHelpers {
  static checkFieldName = (name, index) => {
    if (name === undefined) return `k${index}`;
    return name;
  }
}

export default FieldArrayHelpers;
