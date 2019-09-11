const obj = {};
const flag = DataType(obj, "object") && !Object.keys(obj).length;
// flag => true