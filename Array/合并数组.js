const arr1 = [0, 1, 2];
const arr2 = [3, 4, 5];
const arr = [...arr1, ...arr2];
// arr => [0, 1, 2, 3, 4, 5];
// 与 concat() 函数不同，您可以使用spread运算符在另一个数组内的任何位置插入数组。
const odd = [1,3,5]
const nums = [2,...odd,4,6]
