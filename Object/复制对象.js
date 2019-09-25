/**
 * 对象常用操作方法
 */
/**
 * 根据target赋值source对象属性值
 * 如 source={a:1,b:2}, target={a:3,c:1}
 * 赋值后source={a:3,b:2}
 * @param source
 * @param target
 * @private
 */
let _assignment = function (source, target) {
    Object.keys(source).forEach(item => {
      if (!target || target[item] === undefined) {
        return;
      }
      source[item] = target[item];
    });
  };
  
  export default {
    assignment: _assignment,
  }
  