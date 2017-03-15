export function convertToMap(arr) { // eslint-disable-line import/prefer-default-export
  return arr.map(obj => ({
    label: obj.label,
    value: obj.index,
  }));
}
