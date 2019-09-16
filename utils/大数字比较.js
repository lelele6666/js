/**
 * 大数字比较，相等返回0，前一个数大返回1，否则返回-1
 * @param num1
 * @param num2
 * @returns {number}
 */
export default (num1, num2) => {
    num1 += '';
    num2 += '';
    const len1 = num1.length;
    const len2 = num2.length;
  
    if (num1 === num2) {
      return 0;
    } else if (len1 > len2) {
      return 1;
    } else if (len1 < len2) {
      return -1;
    }
  
    for (let i = 0; i < len1; i++) {
      if (num1[i] > num2[i]) {
        return 1;
      } else if (num1[i] < num2[i]) {
        return -1;
      }
    }
  
    return 0;
  };
  