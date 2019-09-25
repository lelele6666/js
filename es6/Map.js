// ES6提供了新的数据结构Map，Map结构提供了“值—值”的对应，是一种更完善的Hash结构实现。如果你需要“键值对”的数据结构，Map比Object更合适。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。{"b" => "banana"}并且每一项都包含了key和value
let map = new Map();
map.set('a','apple');
map.set('b','banana');
console.log(map); //   Map {"a" => "apple", "b" => "banana"}
console.log(map.get('b'));  //banana
console.log(map.size);  //2
console.log(map.length); //undefined
console.log(map.entries());  //  MapIterator {["a", "apple"], ["b", "banana"]}
for(let name of map){
    console.log(name);  //["a", "apple"]  ["b", "banana"]
}
// 获取value
for(let val of map.values()){
    console.log(val);   //apple   banana
}
// 获取key
for(let key of map.keys()){
    console.log(key);  // a  b
}
// 
