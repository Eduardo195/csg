export function convertToMap(arr) {
    console.log('cov');
    return arr.map(obj => ({
        label: obj.label,
        value: obj.index,
    }));
}
