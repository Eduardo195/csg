export function convertToMap(arr) { // eslint-disable-line import/prefer-default-export
    console.log('cov');
    return arr.map(obj => ({
        label: obj.label,
        value: obj.index,
    }));
}
